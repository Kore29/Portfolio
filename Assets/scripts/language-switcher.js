const translations = {
  es: {
    navbar: ["Sobre mi", "Tecnologías", "Logros", "Proyectos", "Contacto"],
    titulo: "Me llamo Kore",
    typewrite: ["Backend", "Frontend"],
    typewritePrefix: "Soy Desarrollador ",
    bienvenida: `Bienvenido a mi portafolio. Aquí podréis ver cosas sobre mí, experiencias, tecnologías, proyectos y más. Esto es una pequeña ventana a lo que hago y lo que quiero construir. Me encanta conectar con gente del sector, aprender en equipo y buscar proyectos divertidos e interesantes.`,
    aficionado: `Soy un gran aficionado de la programación (teclear código), tanto frontend como backend. No me considero un profesional de nada pero sí un entusiasta por ambas cosas y aspiro a serlo algún día y seguir aprendiendo cosas nuevas.`,
    sobreTitulo: "Sobre Mi",
    sobre1: `Mi nombre es Martí, he cursado Bachillerato y actualmente estoy en un ciclo formativo de Desarrollo de Aplicaciones Multiplataforma orientado a IA. Llevo varios años aprendiendo por mi cuenta y he participado en pequeños proyectos de forma individual y colectiva.`,
    sobre2: `Empecé en este mundo hace 3 años en Bachillerato cuando me inscribí en el HP CodeWars, un concurso de programación muy famoso aquí en Barcelona. Actualmente sigo compitiendo en concursos de programación y es un hobby que disfruto mucho y mejora mis competencias para resolver problemas.`,
    proyectosTitulo: "Proyectos",
    proyectosTexto: "En proceso...",
    tecnologiasTitulo: "Tecnologías"
  },
  en: {
    navbar: ["About me", "Technologies", "Achievements", "Projects", "Contact"],
    titulo: "My name is Kore",
    
    typewrite: ["Backend", "Frontend"],
    typewritePrefix: "I'm a Developer ",
    bienvenida: `Welcome to my portfolio. Here you can see things about me, experiences, technologies, projects and more. This is a small window into what I do and what I want to build. I love connecting with people in the field, learning as a team and looking for fun and interesting projects.`,
    aficionado: `I'm a big fan of programming (typing code), both frontend and backend. I don't consider myself a professional at anything but I am an enthusiast for both and aspire to be one someday and keep learning new things.`,
    sobreTitulo: "About Me",
    sobre1: `My name is Martí, I finished high school and I am currently studying a Multiplatform Application Development course focused on AI. I have been self-learning for several years and have participated in small projects both individually and collectively.`,
    sobre2: `I started in this world 3 years ago in high school when I signed up for HP CodeWars, a very famous programming contest here in Barcelona. I still compete in programming contests and it's a hobby I really enjoy and it improves my problem-solving skills.`,
    proyectosTitulo: "Projects",
    proyectosTexto: "In progress...",
    tecnologiasTitulo: "Technologies"
  }
};

let currentLang = 'es';

function switchLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const t = translations[currentLang];

  // Navbar
  document.querySelectorAll('#navbar-main a').forEach((el, i) => {
    el.textContent = t.navbar[i];
  });

  // Título principal
  const titulo = document.getElementById('titulo');
  if (titulo) titulo.textContent = t.titulo;

  // Typewrite
  const typewrite = document.querySelector('.typewrite');
  if (typewrite) {
    typewrite.setAttribute('data-type', JSON.stringify(t.typewrite));
    // Reinicia el efecto máquina de escribir
    if (window.TxtType) {
      typewrite.innerHTML = `<span class="prefix">${t.typewritePrefix}</span><span class="wrap"></span>`;
      new TxtType(typewrite, t.typewrite, 2000, t.typewritePrefix);
    }
  }

  // Bienvenida y aficionado
  const koreSection = document.getElementById('kore');
  if (koreSection) {
    const pTags = koreSection.querySelectorAll('p');
    if (pTags[0]) pTags[0].textContent = t.bienvenida;
    if (pTags[1]) pTags[1].textContent = t.aficionado;
  }

  // Sobre mí
  const sobreSection = document.getElementById('sobre-mi');
  if (sobreSection) {
    const h1 = sobreSection.querySelector('h1');
    const pTags = sobreSection.querySelectorAll('p');
    if (h1) h1.textContent = t.sobreTitulo;
    if (pTags[0]) pTags[0].textContent = t.sobre1;
    if (pTags[1]) pTags[1].textContent = t.sobre2;
  }

  // Proyectos
  const proyectosSection = document.getElementById('proyectos');
  if (proyectosSection) {
    const h1 = proyectosSection.querySelector('h1');
    const p = proyectosSection.querySelector('p');
    if (h1) h1.textContent = t.proyectosTitulo;
    if (p) p.textContent = t.proyectosTexto;
  }

  // Tecnologías
  const tecnologiasSection = document.getElementById('tecnologias');
  if (tecnologiasSection) {
    const h1 = tecnologiasSection.querySelector('h1');
    if (h1) h1.textContent = t.tecnologiasTitulo;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById('lang-btn');
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      switchLanguage();
    });
  }
});