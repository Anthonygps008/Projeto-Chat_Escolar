/* visitante.js - fluxo + chat para todas as opções */

const el = id => document.getElementById(id);
const hide = eln => eln.classList.add('hidden');
const show = eln => eln.classList.remove('hidden');

/* Inicial */
function voltarInicio(){
  show(el('opcoes-iniciais'));
  hide(el('menu-infantil'));
  hide(el('menu-fund-med'));
  hide(el('texto'));
  hide(el('rh'));
  hide(el('chatContainer'));
}

/* escolher nível (infantil / fundamental / medio) */
function escolherNivel(nivel){
  hide(el('opcoes-iniciais'));
  hide(el('texto'));
  hide(el('rh'));
  hide(el('chatContainer'));

  if(nivel === 'infantil'){
    show(el('menu-infantil'));
  } else {
    // fundamental / medio
    show(el('menu-fund-med'));
    const titulo = el('titulo-fund-med');
    const link = el('link-calendario');
    if(nivel === 'fundamental'){
      titulo.innerText = 'Ensino Fundamental';
      link.href = 'pdfs/calendario_escolar_fundamental.pdf';
    } else {
      titulo.innerText = 'Ensino Médio';
      link.href = 'pdfs/calendario_escolar_medio.pdf';
    }
  }
}

/* mostrar RH (quando clicar no botão RH inicial) */
function mostrarRH(){
  hide(el('opcoes-iniciais'));
  show(el('rh'));
}

/* fila de atendimento simples (avisa) */
function filaAtendimento(){
  // no fluxo visitante queremos abrir chat em vez de somente alerta — usamos abrirChat nos botões que chamam atendimento
  alert('Você será direcionado ao chat de atendimento. Clique em "Falar com a Secretaria Escolar" (ou abertura equivalente) para iniciar o chat.');
}

/* mostrar textos */
function mostrarTexto(tipo){
  const box = el('texto');
  box.className = 'texto'; // remove hidden
  let conteudo = '';
  if(tipo === 'adaptacao'){
    conteudo = `<h3>Como funciona a adaptação escolar?</h3>
    <p>A adaptação funciona como um processo gradual, onde a criança é inserida aos poucos no nosso ambiente, com o apoio dos pais e educadores. Vamos começar com horários reduzidos que vão aumentando progressivamente, os responsáveis podem permanecer com a criança nos primeiros dias até que ela se sinta mais segura. É fundamental respeitar o ritmo de cada criança, que pode manifestar insegurança e precisar de um objeto de apego para se sentir mais confortável.</p>
    <p><strong>Tendo interesse em nos visitar, por favor volte ao menu inicial e selecione “Falar com a Secretaria Escolar”.</strong></p>`;
  } else if(tipo === 'metodologia'){
    conteudo = `<h3>Qual é a metodologia de ensino?</h3>
    <p>Nossa metodologia é baseada na Montessoriana, priorizando o brincar, a interação e a experimentação, com atividades que respeitam o desenvolvimento individual da criança. Focamos na autonomia, materiais acessíveis e abordagens construtivistas.</p>
    <p><strong>Para visita, selecione “Falar com a Secretaria Escolar”.</strong></p>`;
  } else if(typeoF = (tipo === 'horarios')){
  }
  if(tipo === 'horarios'){
    conteudo = `<h3>Horários de funcionamento</h3>
    <ul>
      <li><strong>Educação Infantil:</strong> segunda a sexta, das 12h às 18h</li>
      <li><strong>Ensino Fundamental:</strong> segunda a sexta, das 12h40 às 17h30</li>
      <li><strong>Ensino Médio:</strong> segunda a sexta, das 07h às 13h</li>
    </ul>`;
  } else if(tipo === 'material'){
    conteudo = `<h3>Material Didático</h3>
    <p>Utilizamos o <strong>Moderna.Compartilha</strong>, da Editora Moderna — plataforma que integra tecnologia e conteúdo, oferecendo livros digitais, jogos, ferramentas de apoio e uma abordagem baseada em competências, conectando o aprendizado à realidade dos alunos.</p>`;
  }

  box.innerHTML = conteudo;
  show(box);
}

/* --- CHAT --- */
/* abertura do chat para qualquer setor */
function abrirChat(setor){
  // esconder menus e mostrar chat
  hide(el('opcoes-iniciais'));
  hide(el('menu-infantil'));
  hide(el('menu-fund-med'));
  hide(el('rh'));
  hide(el('texto'));
  show(el('chatContainer'));

  // set title
  el('chatTitle').innerText = `Chat — ${setor}`;

  // limpar histórico e confirmações
  const messages = el('chatMessages');
  messages.innerHTML = '';
  hide(el('chatConfirm'));

  // colocar placeholder com setor
  el('chatMessage').placeholder = `Escreva sua mensagem para ${setor}...`;

  // focus
  el('chatMessage').focus();
}

/* fechar chat sem sair da página */
function fecharChat(){
  hide(el('chatContainer'));
  // volta ao menu inicial de visitante
  show(el('opcoes-iniciais'));
}

/* enviar mensagem (simples — apenas local) */
el('sendChatBtn').addEventListener('click', function(){
  const text = el('chatMessage').value.trim();
  if(!text){
    alert('Digite uma mensagem antes de enviar.');
    return;
  }

  // adicionar mensagem do usuário
  const messages = el('chatMessages');
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  messages.appendChild(userMsg);

  // limpar input e rolar
  el('chatMessage').value = '';
  messages.scrollTop = messages.scrollHeight;

  // resposta automática do sistema (simula envio)
  setTimeout(() => {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = 'Sua mensagem foi enviada com sucesso! Em breve responderemos pelo canal apropriado.';
    messages.appendChild(sys);
    messages.scrollTop = messages.scrollHeight;

    // exibir confirmação fixada
    show(el('chatConfirm'));

    // opcional: esconder confirmação depois de alguns segundos
    setTimeout(() => {
      // manter a confirmação visível — se quiser esconda automaticamente:
      // hide(el('chatConfirm'));
    }, 6000);

  }, 600);
});

/* inicia com a tela inicial visível */
voltarInicio();