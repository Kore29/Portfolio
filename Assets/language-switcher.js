const translations = {
  es: {
    navbar: ["Sobre mi", "Tecnologias", "Logros", "Proyectos", "Contactame"],
    titulo: "Me llamo Kore",
    typewrite: ["Backend", "Frontend"],
    typewriteWrap: "Soy Desarrolador",
    bienvenida: `Bienvenido a mi portafolio. Aquí podreis ver cosas sobre mi, experiencas, tecnologias proyectos y mas. Esto una pequeña ventana a lo que hago y lo que quiero construir. Me encanta conectar con gente del sector, aprender en equipo y buscar proyectos divertidos e interesantes.`,
    aficionado: `Soy un gran aficionado de la programación (teclear código), tanto frontend como backend. No me considero un profesional de nada pero si un entusiasta por ambas cosas y asipiro a serlo algún dia y seguir aprendiendo cosas nuevas.`,
    sobreTitulo: "Sobre Mi",
    sobre1: `Mi nombre es Martí, he cursado en Bachillerato y actualmente estoy en un ciclo formativo de Desarrollo de Aplicaciones Multiplataforma orientado a AI, llevo varios años de aprendiendo por mi cuenta y he participado en pequeños proyectos de forma individual y colectiva.`,
    sobre2: `Empece con este mundo hace 3 años en Bachillerato cuando me inscribi en el HP CodeWars, un concurso de programación muy famosos aquí en Barcelona, actualmente sigo compitiendo en concursos de progamación y es un hobby que disfruto mucho y mejora mis competencias para resolver problemas.`,
    proyectosTitulo: "Proyectos",
    proyectosIntro: `Desde que comencé en el mundo de la programación, he trabajado en diversos proyectos personales. Aquí te muestro algunos que destacaría por el esfuerzo y dedicación que han supuesto. Puedes ver más en mi perfil de GitHub.`,
    proyectos: [
      {
        titulo: "Whale - Red Social Backend",
        desc: "Aplicación orientada a la gestión de usuarios y publicaciones."
      },
      {
        titulo: "Wasp - Página de incidencias",
        desc: "WASP es un sistema web para la gestión de incidentes informáticos, con control de acceso por roles, soporte para múltiples bases de datos"
      },
      {
        titulo: "Página de Apuntes",
        desc: "Diseñada para compartir y organizar material de estudio de forma clara y accesible."
      },
      {
        titulo: "NutriSalut – Plataforma con ChatBot",
        desc: "Plataforma informativa con funcionalidades interactivas para el usuario."
      }
    ],
    hobby: `En mi tiempo libre creo problemas de programación para el <a href=\"https://jo-el.es/problems/\">JO-EL</a>, un juez online desarrollado por el Institut Sabadell.`,
    tecnologiasTitulo: "Tecnologías",
    tecnologias: ["HTML", "CSS", "Java", "SQL", "GIT", "JavaScript", "C++", "Python"],
    logrosTitulo: "Logros",
    contactame: "Contactame",
    linkedin: "Linkedin",
    github: "GitHub",
    gmail: "Gmail"
  },
  en: {
    navbar: ["About me", "Technologies", "Achievements", "Projects", "Contact me"],
    titulo: "My name is Kore",
    typewrite: ["Backend", "Frontend"],
    typewriteWrap: "I'm a Developer",
    bienvenida: `Welcome to my portfolio. Here you can see things about me, experiences, technologies, projects and more. This is a small window into what I do and what I want to build. I love connecting with people in the field, learning as a team and looking for fun and interesting projects.`,
    aficionado: `I'm a big fan of programming (typing code), both frontend and backend. I don't consider myself a professional at anything but I am an enthusiast for both and aspire to be one someday and keep learning new things.`,
    sobreTitulo: "About Me",
    sobre1: `My name is Martí, I have completed high school and I am currently in a Multiplatform Application Development program focused on AI. I have been self-learning for several years and have participated in small projects both individually and collectively.`,
    sobre2: `I started in this world 3 years ago in high school when I signed up for HP CodeWars, a very famous programming contest here in Barcelona. I still compete in programming contests and it's a hobby I really enjoy and it improves my problem-solving skills.`,
    proyectosTitulo: "Projects",
    proyectosIntro: `Since I started in the world of programming, I have worked on various personal projects. Here are some that I would highlight for the effort and dedication they required. You can see more on my GitHub profile.`,
    proyectos: [
      {
        titulo: "Whale - Social Network Backend",
        desc: "Application focused on user and post management."
      },
      {
        titulo: "Wasp - Incident Management Page",
        desc: "WASP is a web system for managing IT incidents, with role-based access control and support for multiple databases."
      },
      {
        titulo: "Notes Page",
        desc: "Designed to share and organize study material clearly and accessibly."
      },
      {
        titulo: "NutriSalut – Platform with ChatBot",
        desc: "Informative platform with interactive features for the user."
      }
    ],
    hobby: `In my free time I create programming problems for <a href=\"https://jo-el.es/problems/\">JO-EL</a>, an online judge developed by Institut Sabadell.`,
    tecnologiasTitulo: "Technologies",
    tecnologias: ["HTML", "CSS", "Java", "SQL", "GIT", "JavaScript", "C++", "Python"],
    logrosTitulo: "Achievements",
    contactame: "Contact me",
    linkedin: "Linkedin",
    github: "GitHub",
    gmail: "Gmail"
  }
};

let currentLang = 'es';

function switchLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const t = translations[currentLang];

  // Navbar
  document.querySelectorAll('#navbar ul li a').forEach((el, i) => {
    el.textContent = t.navbar[i];
  });

  // Título principal
  document.getElementById('titulo').textContent = t.titulo;

  // Typewrite
  const typewrite = document.querySelector('.typewrite');
  if (typewrite) {
    typewrite.setAttribute('data-type', JSON.stringify(t.typewrite));
    typewrite.querySelector('.wrap').textContent = t.typewriteWrap;
  }

  // Bienvenida y aficionado
  const pTags = document.querySelectorAll('#kore p');
  if (pTags[0]) pTags[0].textContent = t.bienvenida;
  if (pTags[1]) pTags[1].textContent = t.aficionado;

  // Sobre Mi
  document.querySelector('#sobre-mi h1').textContent = t.sobreTitulo;
  const sobrePs = document.querySelectorAll('#sobre-mi p');
  if (sobrePs[0]) sobrePs[0].textContent = t.sobre1;
  if (sobrePs[1]) sobrePs[1].textContent = t.sobre2;

  // Proyectos
  document.querySelector('#proyectos h1').textContent = t.proyectosTitulo;
  document.querySelector('#proyectos .intro').textContent = t.proyectosIntro;
  document.querySelectorAll('#proyectos .proyecto-card').forEach((card, i) => {
    const h3 = card.querySelector('h3 a');
    const desc = card.querySelector('p');
    if (h3 && t.proyectos[i]) h3.textContent = t.proyectos[i].titulo;
    if (desc && t.proyectos[i]) desc.textContent = t.proyectos[i].desc;
  });
  document.querySelector('#proyectos .hobby').innerHTML = t.hobby;

  // Tecnologías
  document.querySelector('#tecnologias h1').textContent = t.tecnologiasTitulo;
  document.querySelectorAll('#tecnologias .tecnologias-box h3').forEach((el, i) => {
    el.textContent = t.tecnologias[i];
  });

  // Logros
  document.querySelector('#logros h1').textContent = t.logrosTitulo;

  // Contactame
  document.querySelector('#contactame').setAttribute('aria-label', t.contactame);
  const socialBtns = document.querySelectorAll('.social-btn span');
  if (socialBtns[0]) socialBtns[0].textContent = t.linkedin;
  if (socialBtns[1]) socialBtns[1].textContent = t.github;
  if (socialBtns[2]) socialBtns[2].textContent = t.gmail;
}

// Crear el botón de idioma en el navbar
window.addEventListener('DOMContentLoaded', () => {
  // Si el botón ya existe en el navbar, solo lo configuramos
  let btn = document.getElementById('lang-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'lang-btn';
    document.body.appendChild(btn);
  }
  btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  // Elimina todos los estilos inline
  btn.removeAttribute('style');
  btn.onclick = () => {
    switchLanguage();
    btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  };
});
