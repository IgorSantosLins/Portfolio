// ===== DADOS DAS TECNOLOGIAS =====
const tecnologias = [
{ nome: "HTML5", icone: "🌐" },
{ nome: "CSS3", icone: "🎨" },
{ nome: "JavaScript", icone: "⚡" },
{ nome: "React", icone: "⚛️" },
{ nome: "MySQL", icone: "🗄️" },
];
// ===== RENDERIZA OS CARDS =====
function renderTecnologias() {
const container = document.getElementById("tech-cards");
tecnologias.forEach(tech => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<span>${tech.icone}</span>
<p>${tech.nome}</p>
`;
container.appendChild(card);
});
}
// ===== SMOOTH SCROLL =====
document.querySelectorAll("a[href^='#']").forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();
const alvo = document.querySelector(link.getAttribute("href"));
alvo?.scrollIntoView({ behavior: "smooth" });
});
});
// Inicializa
renderTecnologias();
const tecnologias = [
{ nome: 'HTML5', icone: '🌐' },
{ nome: 'CSS3', icone: '🎨' },
{ nome: 'JavaScript', icone: '⚡' },
{ nome: 'React', icone: '⚛️' },
{ nome: 'MySQL', icone: '🗄️' },
{ nome: 'Node.js', icone: '🟢' }, // ← adicione assim
{ nome: 'Git', icone: '🔀' }, // ← e assim
];
<div class="projeto-card">
<h3>Nome do seu projeto</h3>
<p>Breve descrição do que o projeto faz</p>
<a href="https://github.com/SEU-USUARIO/nome-repo"
target="_blank" class="btn">Ver no GitHub</a>
<span class="tag">React</span>
<span class="tag">MySQL</span>
</div>