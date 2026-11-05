import {defineType, defineField, defineArrayMember} from 'sanity';

const textList = (name: string, title: string) => defineField({
  name, title, type: 'array', of: [defineArrayMember({type: 'string'})],
});

const linkFields = [
  defineField({name: 'href', title: 'Link destination', type: 'string'}),
  defineField({name: 'label', title: 'Link text', type: 'string'}),
];

const imageFields = [
  defineField({name: 'image', title: 'Choose or upload an image', type: 'image', options: {hotspot: true}}),
  defineField({name: 'src', title: 'Existing image URL (fallback)', type: 'string', description: 'The image selector above takes priority.'}),
  defineField({name: 'alt', title: 'Image description', type: 'string'}),
];

const numberedItems = [
  defineField({name: 'number', title: 'Number', type: 'string'}),
  defineField({name: 'title', title: 'Title', type: 'string'}),
  defineField({name: 'body', title: 'Copy', type: 'text'}),
];

const section = (name: string, title: string) => defineField({
  name, title, type: 'object', fields: [
    defineField({name: 'label', title: 'Section label', type: 'string'}),
    defineField({name: 'title', title: 'Heading', type: 'string'}),
    defineField({name: 'items', title: 'Items', type: 'array', of: [defineArrayMember({
      type: 'object', name: 'numberedItem', fields: numberedItems,
    })]}),
  ],
});

export const serviceContent = defineType({
  name: 'servicePage',
  title: 'Service pages (website)',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'string'}),
    defineField({name: 'slug', title: 'Page address', type: 'slug', options: {source: 'kicker'}, validation: rule => rule.required()}),
    defineField({name: 'description', title: 'SEO description', type: 'text'}),
    defineField({name: 'kicker', title: 'Service name', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Main headline', type: 'text'}),
    defineField({name: 'standfirst', title: 'Opening paragraph', type: 'text'}),
    defineField({name: 'heroMedia', title: 'Lead media', type: 'object', fields: [
      defineField({name: 'kind', title: 'Display', type: 'string', options: {list: [
        {title: 'Image', value: 'image'}, {title: 'Slideshow', value: 'slideshow'}, {title: 'Skiv film', value: 'skiv'}, {title: 'Vimeo film', value: 'vimeo'},
      ]}}),
      defineField({name: 'videoId', title: 'Film ID', type: 'string'}),
      defineField({name: 'images', title: 'Images in order', type: 'array', of: [defineArrayMember({
        type: 'object', name: 'serviceMediaImage', fields: imageFields,
      })]}),
    ]}),
    defineField({name: 'heroImage', title: 'Fallback hero image', type: 'object', fields: imageFields}),
    defineField({name: 'actions', title: 'Opening links', type: 'array', of: [defineArrayMember({
      type: 'object', name: 'serviceAction', fields: [
        ...linkFields, defineField({name: 'className', title: 'Existing button style (leave unchanged)', type: 'string'}),
      ],
    })]}),
    defineField({name: 'proofLine', title: 'Opening proof line', type: 'text'}),
    defineField({name: 'featuredProjects', title: 'Related projects', type: 'array', of: [defineArrayMember({
      type: 'object', name: 'featuredServiceProject', fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'href', type: 'string'}),
        defineField({name: 'description', type: 'text'}),
        defineField({name: 'image', type: 'object', fields: imageFields}),
      ],
    })]}),
    defineField({name: 'argument', title: 'Why it matters', type: 'object', fields: [
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      textList('paragraphs', 'Paragraphs'),
    ]}),
    defineField({name: 'comparison', title: 'What you are developing (optional)', type: 'object', fields: [
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      defineField({name: 'intro', type: 'text'}),
      defineField({name: 'closing', type: 'text'}),
      defineField({name: 'items', type: 'array', of: [defineArrayMember({
        type: 'object', name: 'comparisonItem', fields: [
          defineField({name: 'title', type: 'string'}),
          defineField({name: 'body', type: 'text'}),
        ],
      })]}),
    ]}),
    section('capabilities', 'Capabilities'),
    section('process', 'Process'),
    defineField({name: 'caseStudy', title: 'Case study / proof', type: 'object', fields: [
      defineField({name: 'image', type: 'object', fields: imageFields}),
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      textList('paragraphs', 'Paragraphs'),
      defineField({name: 'link', type: 'object', fields: linkFields}),
      textList('related', 'Other proof points'),
    ]}),
    defineField({name: 'fit', title: 'When to bring us in', type: 'object', fields: [
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      textList('items', 'Reasons to call'),
    ]}),
    defineField({name: 'faq', title: 'Frequently asked questions', type: 'object', fields: [
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      defineField({name: 'items', type: 'array', of: [defineArrayMember({
        type: 'object', name: 'serviceFaq', fields: [
          defineField({name: 'question', type: 'string'}),
          defineField({name: 'answer', type: 'text'}),
        ],
      })]}),
    ]}),
    defineField({name: 'enquiry', title: 'Enquiry section', type: 'object', fields: [
      defineField({name: 'label', type: 'string'}),
      defineField({name: 'title', type: 'string'}),
      defineField({name: 'intro', type: 'text'}),
    ]}),
  ],
});
