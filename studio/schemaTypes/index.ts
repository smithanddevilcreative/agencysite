import {defineType, defineField, defineArrayMember, type SchemaTypeDefinition, type PreviewValue} from 'sanity';
import {recoveredTypes} from './recovered';
import {videoDetails} from '../../src/lib/gallery-media';

const spacing = [
  {title: 'None', value: 'none'}, {title: 'Small', value: 'small'},
  {title: 'Medium', value: 'medium'}, {title: 'Large', value: 'large'},
];

const mediaFields = [
  defineField({name: 'internalName', title: 'Name in editor', type: 'string', description: 'For finding and arranging this item. This name is not shown on the website.'}),
  defineField({name: 'kind', title: 'What are you adding?', type: 'string', initialValue: 'image',
    options: {layout: 'radio', list: [{title: 'Image', value: 'image'}, {title: 'Vimeo video', value: 'vimeo'}, {title: 'Skiv video', value: 'skiv'}]},
    validation: rule => rule.required()}),
  defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true},
    hidden: ({parent}) => parent?.kind && parent.kind !== 'image',
    validation: rule => rule.custom((value, context) => (context.parent as {kind?: string})?.kind === 'image' && !value ? 'Choose an image.' : true)}),
  defineField({name: 'vimeoId', title: 'Vimeo link or video ID', type: 'string', description: 'Paste the Vimeo sharing link, including any privacy code. A numeric video ID works too.',
    hidden: ({parent}) => parent?.kind !== 'vimeo',
    validation: rule => rule.custom((value, context) => (context.parent as {kind?: string})?.kind === 'vimeo' && !videoDetails('vimeo', value) ? 'Paste a valid HTTPS Vimeo link or numeric video ID.' : true)}),
  defineField({name: 'skivId', title: 'Skiv link or video ID', type: 'string', description: 'Paste the Skiv sharing link or video ID.',
    hidden: ({parent}) => parent?.kind !== 'skiv',
    validation: rule => rule.custom((value, context) => (context.parent as {kind?: string})?.kind === 'skiv' && !videoDetails('skiv', value) ? 'Paste a valid HTTPS Skiv link or video ID.' : true)}),
  defineField({name: 'altText', title: 'Image description / video title', type: 'string', description: 'Describe the media for people using assistive technology.'}),
  defineField({name: 'caption', title: 'Caption on website (optional)', type: 'string', description: 'This text appears beneath the image or video. Leave blank for no caption.'}),
];

const mediaPreview = {
  select: {name: 'internalName', caption: 'caption', alt: 'altText', kind: 'kind', format: 'format', media: 'image'},
  prepare(selection: {name?: string; caption?: string; alt?: string; kind?: string; format?: string; media?: PreviewValue['media']}) {
    const kind = selection.kind === 'vimeo' ? 'Vimeo video' : selection.kind === 'skiv' ? 'Skiv video' : 'Image';
    const layout = selection.format === 'half' ? 'Half width — pairs with next half-width item' : 'Own row';
    return {title: selection.name || selection.caption || selection.alt || `Unnamed ${kind.toLowerCase()}`, subtitle: `${kind} · ${layout}`, media: selection.media};
  },
};

const mediaItem = defineType({name: 'mediaItem', title: 'Image or video', type: 'object',
  fields: [...mediaFields, defineField({name: 'format', title: 'Existing gallery layout', type: 'string', initialValue: 'standard',
    description: 'Two consecutive Half width items may share a row. For explicit row and spacing controls, use Gallery rows instead.',
    options: {list: [{title: 'Own row — standard', value: 'standard'}, {title: 'Own row — full width', value: 'full'}, {title: 'Half width — pair with another half-width item', value: 'half'}, {title: 'Laptop (existing format)', value: 'laptop'}, {title: 'Phone (existing format)', value: 'phone'}, {title: 'Instagram grid (existing format)', value: 'instagram-grid'}]}})],
  preview: mediaPreview,
});

const galleryMedia = defineType({name: 'galleryMedia', title: 'Image or video', type: 'object', fields: mediaFields,
  preview: {
    select: {name: 'internalName', caption: 'caption', alt: 'altText', kind: 'kind', media: 'image'},
    prepare(selection) {
      const preview = mediaPreview.prepare(selection);
      return {...preview, subtitle: preview.subtitle.split(' · ')[0]};
    },
  },
});

const galleryRow = defineType({name: 'galleryRow', title: 'Gallery row', type: 'object', fields: [
  defineField({name: 'internalName', title: 'Row name', type: 'string', description: 'For example: Interior photography or Website films. Only shown in the editor.'}),
  defineField({name: 'layout', title: 'How should this row look?', type: 'string', initialValue: 'single',
    options: {layout: 'radio', list: [{title: 'One item across the row', value: 'single'}, {title: 'Two items side by side', value: 'pair'}]}, validation: rule => rule.required()}),
  defineField({name: 'items', title: 'Images and videos in this row', type: 'array', of: [defineArrayMember({type: 'galleryMedia'})],
    description: 'Drag to change left-to-right order. On mobile, items stack in this same order.',
    validation: rule => rule.required().min(1).max(2).custom((items, context) => {
      const layout = (context.parent as {layout?: string})?.layout;
      const required = layout === 'pair' ? 2 : 1;
      return items?.length === required ? true : `Add exactly ${required} ${required === 1 ? 'item' : 'items'} for this layout.`;
    })}),
  defineField({name: 'spaceAbove', title: 'Space above this row', type: 'string', initialValue: 'none', options: {list: spacing}}),
  defineField({name: 'spaceBelow', title: 'Space below this row', type: 'string', initialValue: 'medium', options: {list: spacing}}),
  defineField({name: 'sideMargins', title: 'Side margins', type: 'string', initialValue: 'standard',
    description: 'Within the gallery column. Margins and spacing reduce automatically on mobile.',
    options: {list: [{title: 'Standard', value: 'standard'}, {title: 'Wide margins — smaller media', value: 'wide'}, {title: 'Edge to edge within gallery', value: 'edge'}]}}),
], preview: {
  select: {name: 'internalName', layout: 'layout', firstName: 'items.0.internalName', secondName: 'items.1.internalName', media: 'items.0.image', above: 'spaceAbove', below: 'spaceBelow'},
  prepare({name, layout, firstName, secondName, media, above, below}) {
    return {title: name || [firstName, secondName].filter(Boolean).join(' + ') || 'Gallery row',
      subtitle: `${layout === 'pair' ? 'Two side by side' : 'One item across'} · Above: ${above || 'none'} · Below: ${below || 'none'}`, media};
  },
}});

// Recover every existing type and field, retaining stored names and references.
// Field definitions were recovered from the project's schema snapshot; functions
// (validation/preview) are supplied here rather than serialised in the snapshot.
const base = recoveredTypes;
export const schemaTypes: SchemaTypeDefinition[] = [
  ...base.filter(type => type.name !== 'mediaItem').map(type => {
    const fields: import('sanity').FieldDefinition[] = type.fields.map(field => {
      if (type.name === 'project' && field.name === 'gallery') {
        return {...field, title: 'Existing gallery', description: 'Used when Gallery rows is empty. Existing items are preserved; use Gallery rows for explicit layout and spacing.'};
      }
      return field;
    });
    if (type.name === 'project') {
      fields.splice(fields.findIndex(field => field.name === 'gallery'), 0, defineField({
        name: 'galleryRows', title: 'Gallery rows — layout and spacing', type: 'array',
        description: 'Add a row, choose one item or two side by side, then add images or videos. Drag rows to set the page order. Once a complete row is added, these rows replace the existing gallery on the website.',
        of: [defineArrayMember({type: 'galleryRow'})],
      }));
    }
    return {...type, fields} as SchemaTypeDefinition;
  }),
  mediaItem, galleryMedia, galleryRow,
];
