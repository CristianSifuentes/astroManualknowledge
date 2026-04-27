export function mountClientOnlyTodo(root) {
  const mountPoint = root.querySelector('[data-client-only-mount]');
  if (!mountPoint) return;

  mountPoint.innerHTML = `
    <label class="todo-label" for="todo-input">Quick client-only note</label>
    <div class="todo-row">
      <input id="todo-input" type="text" placeholder="Type and press Add" />
      <button type="button" data-add>Add</button>
    </div>
    <ul data-list></ul>
  `;

  const input = mountPoint.querySelector('#todo-input');
  const addBtn = mountPoint.querySelector('[data-add]');
  const list = mountPoint.querySelector('[data-list]');

  addBtn?.addEventListener('click', () => {
    const text = input?.value.trim();
    if (!text || !list || !input) return;

    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  });
}
