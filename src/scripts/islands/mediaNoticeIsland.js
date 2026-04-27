export function mountMediaNotice(root, query) {
  const target = root.querySelector('[data-media-status]');
  if (!target) return;

  const media = window.matchMedia(query);

  const paint = () => {
    target.textContent = media.matches
      ? `Query matched: ${query}. Island hydrated.`
      : `Query not matched: ${query}. Static HTML remains.`;
  };

  paint();
  media.addEventListener('change', paint);
}
