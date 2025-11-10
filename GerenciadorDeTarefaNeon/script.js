
const input = document.getElementById('tarefa');
const btn = document.getElementById('btnAdd');
const lista = document.getElementById('lista');

btn.addEventListener('click', adicionarTarefa);

input.addEventListener('keydown', function(e){
  if(e.key === 'Enter') adicionarTarefa();
});

function adicionarTarefa(){
  const valor = input.value.trim();
  if(!valor) return;

  // Criar o item da lista com SVGs
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="task-left" title="Clique para marcar/desmarcar">
      <!-- ícone check -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <div class="task-text">${escapeHtml(valor)}</div>
    </div>

    <div class="task-actions">
      <div class="btn-icon trash" title="Excluir">
        <!-- ícone lixeira -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
          <path d="M10 11v6"></path>
          <path d="M14 11v6"></path>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
        </svg>
      </div>
    </div>
  `;

  li.querySelector('.task-left').addEventListener('click', function(){
    li.classList.toggle('completed');
  });

  li.querySelector('.trash').addEventListener('click', function(e){
    e.stopPropagation();
    li.remove();
  });

  lista.appendChild(li);
  input.value = '';
  input.focus();
}

function escapeHtml(str) {
  return str.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}
