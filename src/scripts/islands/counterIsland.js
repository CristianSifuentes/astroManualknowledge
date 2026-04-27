export function mountCounter(root) {
  const countEl = root.querySelector('[data-count]');
  const button = root.querySelector('[data-increment]');

  if (!countEl || !button) return;

  let count = 0;
  button.addEventListener('click', () => {
    count += 1;
    countEl.textContent = String(count);
  });
}
