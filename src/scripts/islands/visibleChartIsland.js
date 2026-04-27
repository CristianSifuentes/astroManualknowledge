function renderBars(container) {
  const bars = Array.from(container.querySelectorAll('[data-bar]'));
  bars.forEach((bar, index) => {
    const target = Number(bar.getAttribute('data-value') || 0);
    bar.animate(
      [
        { inlineSize: '0%' },
        { inlineSize: `${target}%` }
      ],
      {
        duration: 700 + index * 120,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
  });
}

export function mountVisibleChart(root) {
  const chart = root.querySelector('[data-chart]');
  if (!chart) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          renderBars(chart);
          observer.disconnect();
          break;
        }
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(chart);
}
