/** Accept provider IDs or their own sharing/player URLs; never arbitrary embeds. */
export function videoDetails(provider: string | null | undefined, input: string | null | undefined): {id: string; hash?: string} | null {
  const value = input?.trim();
  if (!value) return null;
  if (provider === 'vimeo' && /^\d+$/.test(value)) return {id: value};
  if (provider === 'skiv' && /^[a-zA-Z0-9_-]+$/.test(value)) return {id: value};
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    const parts = url.pathname.split('/').filter(Boolean);
    if (provider === 'vimeo' && ['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'].includes(url.hostname)) {
      const index = parts.findIndex(part => /^\d+$/.test(part));
      if (index < 0) return null;
      const hash = url.searchParams.get('h') || parts[index + 1];
      return {id: parts[index], ...(hash && /^[a-zA-Z0-9]+$/.test(hash) ? {hash} : {})};
    }
    if (provider === 'skiv' && ['skiv.com', 'www.skiv.com'].includes(url.hostname)) {
      const id = parts.at(-1);
      return id && /^[a-zA-Z0-9_-]+$/.test(id) ? {id} : null;
    }
  } catch { /* A malformed sharing URL is not an embed. */ }
  return null;
}

export function videoEmbedUrl(provider: string | null | undefined, input: string | null | undefined) {
  const details = videoDetails(provider, input);
  if (!details) return null;
  if (provider === 'vimeo') {
    const query = new URLSearchParams({background: '1', autoplay: '1', loop: '1', muted: '1', title: '0', byline: '0', portrait: '0'});
    if (details.hash) query.set('h', details.hash);
    return `https://player.vimeo.com/video/${details.id}?${query}`;
  }
  return `https://skiv.com/embed/${details.id}?search=0&links=0&logo=0&title=0&autoplay=1&loop=1&volume=0&style=no-controls`;
}
