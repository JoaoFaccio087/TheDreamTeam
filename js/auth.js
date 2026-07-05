// auth.js — ícone de perfil com dropdown + modal de login/cadastro

var modalAuth      = document.getElementById('modal-auth');
var modalBackdrop  = document.querySelector('#modal-auth .modal-auth-backdrop');
var modalFechar    = document.getElementById('modal-auth-fechar');
var formLogin      = document.getElementById('form-login');
var formCadastro   = document.getElementById('form-cadastro');
var tabLoginBtn    = document.getElementById('tab-login');
var tabCadastroBtn = document.getElementById('tab-cadastro');
var authErro       = document.getElementById('auth-erro');

var btnPerfil      = document.getElementById('btn-perfil');

// ── Sessão ────────────────────────────────────────────────────────────────

function salvarSessao(token, user) {
  localStorage.setItem('dreamteam_token', token);
  localStorage.setItem('dreamteam_user', JSON.stringify(user));
}

function limparSessao() {
  localStorage.removeItem('dreamteam_token');
  localStorage.removeItem('dreamteam_user');
}

function getToken() { return localStorage.getItem('dreamteam_token'); }

function getUser() {
  try { return JSON.parse(localStorage.getItem('dreamteam_user')); } catch (e) { return null; }
}

// ── Ícone de perfil ───────────────────────────────────────────────────────
// Sem menu: clicar leva o usuário logado direto à tela de Perfil; o convidado
// vê o modal de login/cadastro. fecharDropdown() vira no-op (o dropdown saiu),
// mantida só porque outros trechos ainda a chamam por compatibilidade.

function fecharDropdown() {}

if (btnPerfil) {
  btnPerfil.addEventListener('click', function (e) {
    e.stopPropagation();
    if (getUser()) {
      if (typeof window.abrirPerfil === 'function') window.abrirPerfil();
    } else {
      tabLoginBtn.click();
      abrirModal();
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fecharModal();
});

// ── Estado do header ──────────────────────────────────────────────────────

function atualizarDropdown(user) {
  // Nome do time nos modos: logado → nome do cadastro; senão → "Seu time".
  var temNome = !!(user && user.nomeDoTime);
  if (typeof nomeDoTime !== 'undefined') nomeDoTime = temNome ? user.nomeDoTime : 'Seu time';
  if (typeof inputNomeTime !== 'undefined' && inputNomeTime) {
    inputNomeTime.value = temNome ? user.nomeDoTime : '';
  }
}

// ── Modal ─────────────────────────────────────────────────────────────────

function mostrarErro(msg) {
  authErro.textContent = msg;
  authErro.classList.remove('escondida');
}

function limparErro() {
  authErro.classList.add('escondida');
  authErro.textContent = '';
}

function abrirModal() {
  if (!modalAuth) return;
  modalAuth.classList.remove('escondida');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  if (!modalAuth) return;
  modalAuth.classList.add('escondida');
  document.body.style.overflow = '';
  limparErro();
  var aceite = document.getElementById('cad-aceite');
  if (aceite) aceite.checked = false;
}

if (modalFechar)   modalFechar.addEventListener('click', fecharModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', fecharModal);

// ── Logout ────────────────────────────────────────────────────────────────
// Disparado pelo ícone de sair, ao lado das infos do usuário na tela de Perfil.

var btnPerfilLogout = document.getElementById('perfil-logout');
if (btnPerfilLogout) {
  btnPerfilLogout.addEventListener('click', function () {
    var modal = document.getElementById('modal-logout');
    if (modal) modal.classList.remove('escondida');
    else { limparSessao(); atualizarDropdown(null); }   // fallback se o modal não existir
  });
}

// Confirmação do logout: só desconecta ao confirmar; feedback rápido de "Saindo…".
var modalLogout          = document.getElementById('modal-logout');
var modalLogoutCancelar  = document.getElementById('modal-logout-cancelar');
var modalLogoutConfirmar = document.getElementById('modal-logout-confirmar');
if (modalLogoutCancelar) {
  modalLogoutCancelar.addEventListener('click', function () {
    if (modalLogout) modalLogout.classList.add('escondida');
  });
}
if (modalLogoutConfirmar) {
  modalLogoutConfirmar.addEventListener('click', function () {
    modalLogoutConfirmar.disabled = true;
    modalLogoutConfirmar.textContent = 'Saindo…';
    limparSessao();
    atualizarDropdown(null);
    setTimeout(function () {
      if (modalLogout) modalLogout.classList.add('escondida');
      modalLogoutConfirmar.disabled = false;
      modalLogoutConfirmar.textContent = 'Sair';
      // Sai da tela de Perfil de volta para o início.
      var inicial = document.getElementById('tela-inicial');
      if (inicial && typeof mostrarTela === 'function') mostrarTela(inicial);
    }, 350);
  });
}

// ── Abas ──────────────────────────────────────────────────────────────────

tabLoginBtn.addEventListener('click', function () {
  tabLoginBtn.classList.add('auth-tab-ativa');
  tabCadastroBtn.classList.remove('auth-tab-ativa');
  formLogin.classList.remove('escondida');
  formCadastro.classList.add('escondida');
  limparErro();
});

tabCadastroBtn.addEventListener('click', function () {
  tabCadastroBtn.classList.add('auth-tab-ativa');
  tabLoginBtn.classList.remove('auth-tab-ativa');
  formCadastro.classList.remove('escondida');
  formLogin.classList.add('escondida');
  limparErro();
});

// ── Estado de carregamento do botão (+ dica de "cold start" do Render grátis) ─

function comBotaoCarregando(btn, textoCarregando, promessa) {
  var original = btn.textContent;
  btn.textContent = textoCarregando;
  btn.disabled = true;
  btn.classList.add('btn-carregando');

  // Se demorar (servidor "dormindo" no plano grátis), avisa que está acordando.
  var dicaTimer = setTimeout(function () { btn.textContent = 'Acordando servidor…'; }, 3500);

  function restaurar() {
    clearTimeout(dicaTimer);
    btn.textContent = original;
    btn.disabled = false;
    btn.classList.remove('btn-carregando');
  }

  return promessa
    .then(function (data) { clearTimeout(dicaTimer); return data; })
    .catch(function (err) { restaurar(); throw err; });
}

// ── Formulário de Login ───────────────────────────────────────────────────

formLogin.addEventListener('submit', function (ev) {
  ev.preventDefault();
  limparErro();

  var username = document.getElementById('login-username').value.trim();
  var senha    = document.getElementById('login-senha').value;
  if (!username || !senha) { mostrarErro('Preencha todos os campos'); return; }

  var btn = formLogin.querySelector('button[type=submit]');

  comBotaoCarregando(btn, 'Entrando…', apiPost('/auth/login', { username: username, password: senha }))
    .then(function (data) {
      salvarSessao(data.token, data.user);
      atualizarDropdown(data.user);
      fecharModal();
    })
    .catch(function (err) {
      mostrarErro(err.message);
    });
});

// ── Formulário de Cadastro ────────────────────────────────────────────────

formCadastro.addEventListener('submit', function (ev) {
  ev.preventDefault();
  limparErro();

  var username = document.getElementById('cad-username').value.trim();
  var senha    = document.getElementById('cad-senha').value;
  var email    = document.getElementById('cad-email').value.trim();
  var nomeTime = document.getElementById('cad-nome-time').value.trim();

  if (!username || !senha || !email) { mostrarErro('Preencha todos os campos'); return; }

  var aceite = document.getElementById('cad-aceite');
  if (aceite && !aceite.checked) { mostrarErro('É preciso aceitar a Política de Privacidade para se cadastrar.'); return; }

  var btn = formCadastro.querySelector('button[type=submit]');

  comBotaoCarregando(btn, 'Cadastrando…', apiPost('/auth/register', { username: username, email: email, password: senha, nomeTime: nomeTime }))
    .then(function (data) {
      salvarSessao(data.token, data.user);
      atualizarDropdown(data.user);
      fecharModal();
    })
    .catch(function (err) {
      mostrarErro(err.message);
    });
});

// ── Notificação estilo iPhone ─────────────────────────────────────────────

var notifPill        = document.getElementById('notif-cadastro');
var notifTimerAbrir  = null;
var notifTimerFechar = null;

function fecharNotif() {
  if (!notifPill) return;
  clearTimeout(notifTimerFechar);
  notifPill.classList.add('notif-saindo');
  notifPill.classList.remove('notif-aberta');
}

function mostrarNotif() {
  if (!notifPill) return;
  notifPill.classList.remove('notif-saindo');
  notifPill.classList.add('notif-aberta');
  notifTimerFechar = setTimeout(fecharNotif, 5000);
}

if (notifPill) {
  notifPill.addEventListener('click', function () {
    fecharNotif();
    tabCadastroBtn.click();
    abrirModal();
  });
}

function agendarNotif() {
  if (getUser()) return;
  clearTimeout(notifTimerAbrir);
  notifTimerAbrir = setTimeout(mostrarNotif, 2000);
}

// ── Inicialização ─────────────────────────────────────────────────────────

(function init() {
  var user = getUser();
  atualizarDropdown(user);

  if (typeof calcularEstatisticasFooter === 'function') {
    calcularEstatisticasFooter();
  }

  agendarNotif();
}());
