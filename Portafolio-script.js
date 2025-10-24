// --- Projectos
const PROJECTS = [
  {
    slug: 'siluetas',
    h3: 'Sofía Segura / Siluetas que aparecen en un blanco silencio',
    p: 'Taller de Hacer Visible, segundo año.',
    title: 'Sofía Segura / Siluetas que aparecen en un blanco silencio',
    cardTitle: 'Siluetas que aparecen en un blanco silencioso — Taller de Hacer Visible, segundo año',
    desc: 'Estudio entre como la luz y la sombra interactuan en un blanco, relacionado a observaciones realizadas, además de estar conectadas a un poema del profesor Manuel Sanfuentes y Cartas de Amereida de Carlos Covarrubias..',
    url: 'https://wiki.ead.pucv.cl/Sofía_Segura/_Siluetas_que_aparecen_en_un_blanco_silencio'
  },
  {
    slug: 'volumenes-cambio',
    h3: 'Exploración envolvente de los volúmenes del cambio, Sofía Segura Madariaga. TPT S1 2025.',
    p: 'Taller de Personas y Territorios, tercer año.',
    title: 'Exploración envolvente de los volúmenes del cambio — TPT S1 2025',
    cardTitle: 'Exploración envolvente de los volúmenes del cambio — TPT S1 2025, tercer año',
    desc: 'Proceso de estudio de la alfarería de Quichamalí, de esta se extrae un objeto, el cual se realiza en 3D y después en cerámica.',
    url: 'https://wiki.ead.pucv.cl/Exploración_envolvente_de_los_volúmenes_del_cambio,_Sofía_Segura_Madariaga._TPT_S1_2025.'
  },
  {
    slug: 'siclon-libro',
    h3: 'Proyecto de Diseño de Servicios - Siclón del libro',
    p: 'Taller de Diseño de Servicios, tercer año.',
    title: 'Proyecto de Diseño de Servicios — Siclón del libro',
    cardTitle: 'Siclón del libro — Diseño de Servicios, tercer año',
    desc: 'Estudio de experiencia de usuario dentro de una librería local de Viña del Mar (Siclón del Libro), en el cual se buscaron mejoras y como fortalecer el servicio de la librería.',
    url: 'https://wiki.ead.pucv.cl/Proyecto_de_Diseño_de_Servicios_-_Siclón_del_libro'
  }
];

// --- Tareas
const TASKS = [
  {
    slug: 'gestualidad-bailarina',
    h3: 'M1: Encargo 06 TDH 2023 - Gestualidad en la bailarina / Sofía Segura',
    p: 'Taller de Diversión del Hábito, primer año.',
    title: 'M1: Encargo 06 TDH 2023 — Gestualidad en la bailarina',
    cardTitle: 'Gestualidad en la bailarina — TDH, primer año',
    desc: 'Estudio de gesto y movimiento de bailarina, el cual fue parte de una secuencia que se hizo como taller, esto se realizó con el pie y su ortesís, que lo ayudaba a dibujar.',
    url: 'https://wiki.ead.pucv.cl/M1:_Encargo_06_TDH_2023_-_Gestualidad_en_la_bailarina_/_Sofía_Segura'
  },
  {
    slug: 'tarjeta-obsequio',
    h3: 'M3: Encargo 16 TDH 2023 - Tarjeta de obsequio / Sofía Segura',
    p: 'Taller de Diversión del Hábito, primer año.',
    title: 'M3: Encargo 16 TDH 2023 — Tarjeta de obsequio',
    cardTitle: 'Tarjeta de obsequio — TDH, primer año',
    desc: 'Se tenía pensado como propuesta realizar una tarjeta Pop-Up de Valparaíso, para entregar de obsequio a la comunidad de Mehuin, cuando se fuera hacia allá en travesía.',
    url: 'https://wiki.ead.pucv.cl/M3:_Encargo_16_TDH_2023_-_Tarjeta_de_obsequio_/_Sofía_Segura'
  },
  {
    slug: 'propuestas-afiche',
    h3: 'Propuestas de afiche - Sofía Segura',
    p: 'Taller de Luz y Color, segundo año.',
    title: 'Propuestas de afiche — Sofía Segura',
    cardTitle: 'Propuestas de afiche — Luz y Color, segundo año',
    desc: 'Se desarrollaron distintos afiches con el objetivo de poder observar bien el color, sus tonos y como este logra interactuar con el resto. También aprender a jerarquizar bien los objetos dentro de este.',
    url: 'https://wiki.ead.pucv.cl/Propuestas_de_afiche_-_Sofía_Segura'
  },
  {
    slug: 'tareas-finales-ead1451',
    h3: 'Sofía Segura. EAD1451-01 2024. Tareas Finales',
    p: 'Presentación: El Dibujo como Herramienta de Conocimiento, segundo año.',
    title: 'Sofía Segura. EAD1451-01 2024 — Tareas Finales',
    cardTitle: 'El Dibujo como Herramienta de Conocimiento, segundo año',
    desc: 'Proceso para entrega final, en el cual se trabajo el observar y capturar a través del dibujo cada detalle, en este caso de la suculenta. Aprendiendo a utilizar distintos tipos de lápices.',
    url: 'https://wiki.ead.pucv.cl/Sofía_Segura._EAD1451-01_2024._Tareas_Finales'
  },
  {
    slug: 'deriva-grupal',
    h3: 'Valeria Muñoz, Valentina Martínez, Sofía Segura. Sarai Farías. TPT S1 2025. Deriva grupal',
    p: 'Taller de Personas y Territorios, tercer año.',
    title: 'Deriva grupal — TPT S1 2025',
    cardTitle: 'Deriva grupal — TPT S1 2025, tercer año',
    desc: 'Recorrido y registro colectivo de deriva realizada desde estación Recreo hasta estación Barón, en la cual fuimos observando, oliendo y escuchando detalles que no se aprecian comunmente. También se extrajo tierra de ciertos puntos para poder saber su estado.',
    url: 'https://wiki.ead.pucv.cl/Valeria_Muñoz,_Valentina_Martínez,_Sofía_Segura._Sarai_Farías._TPT_S1_2025._Deriva_grupal'
  },
  {
    slug: 'alfareria-quinchamali',
    h3: 'Sofía Segura. TPT S1 2025. Alfarería de Quinchamalí',
    p: 'Taller de Personas y Territorios, tercer año.',
    title: 'Alfarería de Quinchamalí — TPT S1 2025',
    cardTitle: 'Alfarería de Quinchamalí — TPT, tercer año',
    desc: 'Estudio de la alfarería de Quinchamalí, con la cual se realizó un estudio de piezas, las cuales se realizaron en Fusion 360, escogiendo una para el proyect final, la cual también se realizó en ceramica.',
    url: 'https://wiki.ead.pucv.cl/Sofía_Segura._TPT_S1_2025._Alfarería_de_Quinchamalí'
  },
  {
    slug: 'segura-f03',
    h3: 'Segura S - F03',
    p: 'Presentación: Diseño y Cultura Contemporánea, tercer año.',
    title: 'Segura S - F03',
    cardTitle: 'Diseño y Cultura Contemporánea, tercer año',
    desc: 'Se investiga sobre museos de diseño relevantes a nivel mundial, se analizan: Red Dot Design Museum en Singapur, Vitra Design Museum en Alemania y The Design Museum en Inglaterra.',
    url: 'https://wiki.ead.pucv.cl/Segura_S_-_F03'
  }
];

// === Sección de vistas ===
const VIEWS = {
  home: document.getElementById('view-home'),
  contenido: document.getElementById('view-contenido'),
  sobre: document.getElementById('view-sobre'),
  proyectos: document.getElementById('view-proyectos'),
  tareas: document.getElementById('view-tareas'),
  detalle: document.getElementById('view-detalle'),
};

// mostrar u ocultar pantallas
function show(id){
  Object.values(VIEWS).forEach(v => v.classList.remove('active'));
  (VIEWS[id] || VIEWS.home).classList.add('active');
}

function renderList(containerId, items){
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(it => `
    <a class="card-link" href="#/detalle/${encodeURIComponent(it.slug)}">
      <article class="card">
        <h3>${it.h3}</h3>
        <p>${it.p}</p>
      </article>
    </a>
  `).join('');
}

// === Sección detalles trabajos ===
const elDetailTitle = document.getElementById('detail-title');
const elCardTitle   = document.getElementById('detail-card-title');
const elDesc        = document.getElementById('detail-desc');
const elLink        = document.getElementById('detail-link');

function findItem(slug){
  return PROJECTS.concat(TASKS).find(i => i.slug === slug);
}

function renderDetail(slug){
  const item = findItem(slug);
  if(!item){ show('contenido'); return; }
  elDetailTitle.textContent = item.title;
  elCardTitle.textContent   = item.cardTitle || item.title;
  elDesc.textContent        = item.desc || '';
  elLink.href               = item.url;
  show('detalle');
}

function route(){
  const hash = (location.hash || '#/').toLowerCase();

  if(hash === '#/' || hash === '#') return show('home');
  if(hash === '#/contenido')        return show('contenido');
  if(hash === '#/sobre-mi')         return show('sobre');
  if(hash === '#/proyectos')        return show('proyectos');
  if(hash === '#/tareas')           return show('tareas');

  if(hash.startsWith('#/detalle/')){
    const slug = decodeURIComponent(hash.replace('#/detalle/',''));
    return renderDetail(slug);
  }
  show('home');
}

document.addEventListener('DOMContentLoaded', () => {
  renderList('projects-grid', PROJECTS);
  renderList('tasks-grid', TASKS);
  route();
});
window.addEventListener('hashchange', route);