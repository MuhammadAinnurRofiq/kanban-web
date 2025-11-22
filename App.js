// Struktur data board sederhana (nanti ini kita ganti dengan database Supabase)
let boardData = {
  todo: [],
  doing: [],
  done: []
};

function renderBoard() {
  ['todo', 'doing', 'done'].forEach(col => {
    const container = document.getElementById(col + '-cards');
    container.innerHTML = '';
    boardData[col].forEach((card, idx) => {
      const div = document.createElement('div');
      div.className = 'card';
      div.textContent = card.title;
      container.appendChild(div);
    });
  });
}

function setupAddCardForms() {
  const forms = document.querySelectorAll('.add-card-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const column = form.getAttribute('data-column');
      const input  = form.querySelector('input');
      const text   = input.value.trim();
      if (!text) return;
      boardData[column].push({ title: text });
      input.value = '';
      renderBoard();
      // TODO: nanti disini kita simpan ke database Supabase
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBoard();
  setupAddCardForms();
});
