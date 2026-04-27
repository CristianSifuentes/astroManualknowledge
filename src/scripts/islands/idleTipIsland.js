const TIPS = [
  'Astro ships zero JavaScript by default.',
  'Hydrate only islands that need interaction.',
  'Static HTML gives search engines immediate content.',
  'Keep islands independent for resilient UX.'
];

export function mountIdleTip(root) {
  const tipEl = root.querySelector('[data-tip]');
  const button = root.querySelector('[data-next-tip]');
  if (!tipEl || !button) return;

  let pointer = 0;
  button.addEventListener('click', () => {
    pointer = (pointer + 1) % TIPS.length;
    tipEl.textContent = TIPS[pointer];
  });
}
