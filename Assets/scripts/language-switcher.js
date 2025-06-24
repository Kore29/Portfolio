const translations = {
  es: {
    navbar: ["Sobre mi", "Tecnologias", "Logros", "Proyectos", "Contacto"],
    titulo: "Me llamo Kore",
    typewrite: ["Backend", "Frontend"],
    typewritePrefix: "Soy Desarrolador ",
    bienvenida: `Bienvenido a mi portafolio. Aquí podreis ver cosas sobre mi, experiencas, tecnologias proyectos y mas. Esto una pequeña ventana a lo que hago y lo que quiero construir. Me encanta conectar con gente del sector, aprender en equipo y buscar proyectos interesantes.`,
    aficionado: `Soy un gran aficionado de la programación (teclear código), tanto frontend como backend. No me considero un profesional de nada pero si un entusiasta por ambas cosas y asipiro a serlo algún dia y seguir aprendiendo cosas nuevas.`,
    sobreTitulo: "Sobre mí",
    sobre1: `Me llamo Martí. Estudié Bachillerato y actualmente curso un ciclo formativo en Desarrollo de Aplicaciones Multiplataforma orientado a inteligencia artificial. Llevo años aprendiendo programación por mi cuenta y he participado en varios proyectos, tanto individuales como en equipo.`,
    sobre2: `Considero que es mejor ser definido por los proyectos realizados que por una descripción personal.; Aun así, comparto aquí un poco sobre mí para quien tenga curiosidad.`,
    sobre3: `Me interesan muchos aspectos del desarrollo. En casa tengo un servidor con Proxmox y varios contenedores LXC: uso Home Assistant para domotizar mi casa, tengo un servidor de películas y otros servicios para asegurar mi red con una VPN. Me atraen tanto el backend como el frontend: disfruto cuidando el diseño visual, pero también la estructura, organización y eficiencia del código. Siempre estoy aprendiendo nuevas tecnologías y buscando ideas para seguir creciendo.`,
    proyectosTitulo: "Proyectos",
    proyectos: [
      {
        titulo: "WASP - Incidence Manage",
        descripcion: "Un sistema web para la gestión de incidentes informáticos, con control de acceso por roles, soporte para múltiples bases de datos",
        tecnologias: ["Bootstrap", "Nodejs", "Express", "Ejs", "JavaScript"]
      },
      {
        titulo: "Página de Apuntes dedicada al Front-end",
        descripcion: "Diseñada para compartir y organizar material de estudio de forma clara y accesible.",
        tecnologias: ["HTML", "CSS", "JavaScript"]
      },
      {
        titulo: "NutriSalut Plataforma con ChatBot",
        descripcion: "Plataforma informativa con funcionalidades interactivas para el usuario.",
        tecnologias: ["HTML", "Bootstrap", "JavaScript", "Nodejs"]
      }
    ],
    tecnologiasTitulo: "Tecnologías",
    tecnologiasIntro1: "Empecé con Python en Bachillerato, que me dio las bases de la programación.El lenguaje que más domino es Java, con el que tengo bastante experiencia.",
    tecnologiasIntro2: "Actualmente estoy aprendiendo JavaScript y Node.js, junto con sus extensiones.",
    logrosTitulo: "Logros",
    logrosTexto: "En proceso...",
    contacto: ["Linkedin", "GitHub", "Gmail"]
  },
  en: {
    navbar: ["About me", "Technologies", "Achievements", "Projects", "Contact"],
    titulo: "My name is Kore",
    typewrite: ["Backend", "Frontend"],
    typewritePrefix: "I'm a Developer ",
    bienvenida: `Welcome to my portfolio. Here you can see things about me, experiences, technologies, projects and more. This is a small window into what I do and what I want to build. I love connecting with people in the field, learning as a team and looking for interesting projects.`,
    aficionado: `I'm a big programming enthusiast (typing code), both frontend and backend. I don't consider myself a professional at anything but I am an enthusiast for both and aspire to be one someday and keep learning new things.`,
    sobreTitulo: "About Me",
    sobre1: `My name is Martí. I studied high school and I am currently studying a vocational training course in Multiplatform Application Development oriented to artificial intelligence. I have been self-learning programming for years and have participated in several projects, both individual and team.`,
    sobre2: `I believe it is better to be defined by the projects carried out than by a personal description. Still, I share a bit about myself here for those who are curious.`,
    sobre3: `I'm interested in many aspects of development. At home I have a server with Proxmox and several LXC containers: I use Home Assistant to automate my house, I have a movie server and other services to secure my network with a VPN. I'm attracted to both backend and frontend: I enjoy taking care of the visual design, but also the structure, organization and efficiency of the code. I'm always learning new technologies and looking for ideas to keep growing.`,
    proyectosTitulo: "Projects",
    proyectos: [
      {
        titulo: "WASP - Incidence Manage",
        descripcion: "A web system for managing IT incidents, with role-based access control and support for multiple databases",
        tecnologias: ["Bootstrap", "Nodejs", "Express", "Ejs", "JavaScript"]
      },
      {
        titulo: "Notes Page dedicated to Front-end",
        descripcion: "Designed to share and organize study material clearly and accessibly.",
        tecnologias: ["HTML", "CSS", "JavaScript"]
      },
      {
        titulo: "NutriSalut Platform with ChatBot",
        descripcion: "Informative platform with interactive features for the user.",
        tecnologias: ["HTML", "Bootstrap", "JavaScript", "Nodejs"]
      }
    ],
    tecnologiasTitulo: "Technologies",
    tecnologiasIntro1: "I started with Python in high school, which gave me the basics of programming. The language I master the most is Java, with which I have quite a bit of experience.",
    tecnologiasIntro2: "I'm currently learning JavaScript and Node.js, along with their extensions.",
    logrosTitulo: "Achievements",
    logrosTexto: "In progress...",
    contacto: ["Linkedin", "GitHub", "Gmail"]
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
    typewrite.setAttribute('data-period', '2000');
    // Limpia el contenido para que el script lo regenere correctamente
    typewrite.innerHTML = '';
    // Reinicia el typewriter con el nuevo idioma
    if (window.TxtTypeInstance) {
      window.TxtTypeInstance.stop();
      window.TxtTypeInstance = null;
    }
    setTimeout(() => {
      // Cambia el prefijo según el idioma
      if (window.startTypeWrite) {
        // Sobrescribe el prefix en el elemento para que type-write.js lo detecte
        let prefix = t.typewritePrefix;
        // El type-write.js busca el prefix en el span .prefix, así que lo ponemos vacío y lo deja al script
        typewrite.innerHTML = `<span class="prefix">${prefix}</span><span class="wrap"></span>`;
        window.startTypeWrite();
      }
    }, 100);
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
    if (pTags[2]) pTags[2].textContent = t.sobre3;
  }

  // Proyectos
  const proyectosSection = document.getElementById('proyectos');
  if (proyectosSection) {
    const h1 = proyectosSection.querySelector('h1');
    if (h1) h1.textContent = t.proyectosTitulo;
    // Actualiza los proyectos
    const proyectos = proyectosSection.querySelectorAll('.proyecto');
    t.proyectos.forEach((proy, i) => {
      const datos = proyectos[i]?.querySelector('.datos');
      if (datos) {
        const titulo = datos.querySelector('.titulo h1');
        if (titulo) titulo.textContent = proy.titulo;
        const p = datos.querySelector('p');
        if (p) p.textContent = proy.descripcion;
        const techList = datos.querySelector('.tech-list');
        if (techList) {
          techList.innerHTML = proy.tecnologias.map(tech => `<li>${tech}</li>`).join('');
        }
      }
    });
  }

  // Tecnologías
  const tecnologiasSection = document.getElementById('tecnologias');
  if (tecnologiasSection) {
    const h1 = tecnologiasSection.querySelector('h1');
    if (h1) h1.textContent = t.tecnologiasTitulo;
    const pTags = tecnologiasSection.querySelectorAll('p');
    if (pTags[0]) pTags[0].textContent = t.tecnologiasIntro1;
    if (pTags[1]) pTags[1].textContent = t.tecnologiasIntro2;
  }

  // Logros
  const logrosSection = document.getElementById('logros');
  if (logrosSection) {
    const h1 = logrosSection.querySelector('h1');
    if (h1) h1.textContent = t.logrosTitulo;
    const p = logrosSection.querySelector('p');
    if (p) p.textContent = t.logrosTexto;
  }

  // Contacto
  const contactoSection = document.getElementById('contacto');
  if (contactoSection) {
    const spans = contactoSection.querySelectorAll('.social-btn span');
    t.contacto.forEach((txt, i) => {
      if (spans[i]) spans[i].textContent = txt;
    });
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
  if (window.startTypeWrite) window.startTypeWrite();
});