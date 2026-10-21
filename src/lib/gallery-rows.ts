import {videoEmbedUrl} from './gallery-media';

export type GalleryMedia = {
  _key?: string;
  internalName?: string | null;
  kind?: 'image' | 'vimeo' | 'skiv' | null;
  imageUrl?: string | null;
  vimeoId?: string | null;
  skivId?: string | null;
  altText?: string | null;
  caption?: string | null;
};

export type GalleryRow = {
  _key?: string;
  internalName?: string | null;
  layout?: 'single' | 'pair' | null;
  spaceAbove?: string | null;
  spaceBelow?: string | null;
  sideMargins?: string | null;
  items?: GalleryMedia[] | null;
};

function escape(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mediaHtml(item: GalleryMedia, title: string) {
  const caption = item.caption ? `<figcaption class="sd-gallery-caption">${escape(item.caption)}</figcaption>` : '';
  let media = '';
  if (item.kind === 'image' && item.imageUrl) {
    // Asset URLs originate from Sanity. Still reject non-HTTPS values at this HTML boundary.
    try { if (new URL(item.imageUrl).protocol !== 'https:') return ''; } catch { return ''; }
    media = `<img src="${escape(item.imageUrl)}" alt="${escape(item.altText || '')}" loading="lazy" width="1400" height="900"/>`;
  } else {
    const src = videoEmbedUrl(item.kind, item.kind === 'vimeo' ? item.vimeoId : item.skivId);
    if (src) media = `<div class="sd-gallery-video"><iframe src="${escape(src)}" title="${escape(item.altText || title)}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  return media ? `<figure class="sd-gallery-media">${media}${caption}</figure>` : '';
}

export function renderGalleryRows(rows: GalleryRow[] | null | undefined, title: string) {
  const spacing = (value: string | null | undefined) => ['none', 'small', 'medium', 'large'].includes(value || '') ? value : 'none';
  const rendered = (rows || []).map(row => {
    const items = (row.items || []).map(item => mediaHtml(item, title)).filter(Boolean);
    if (!items.length) return '';
    const margins = ['standard', 'wide', 'edge'].includes(row.sideMargins || '') ? row.sideMargins : 'standard';
    // Keep all content visible even if a draft has more items than its selected layout permits.
    return `<div class="sd-gallery-row" data-layout="${row.layout === 'pair' ? 'pair' : 'single'}" data-above="${spacing(row.spaceAbove)}" data-below="${spacing(row.spaceBelow)}" data-margins="${margins}">${items.join('')}</div>`;
  }).join('');
  return rendered ? `<div class="sd-gallery-rows">${rendered}</div>` : '';
}
