/**
 * Todos tus datos personales y textos del sitio viven acá.
 * Editá este archivo y el sitio se actualiza solo (no hace falta tocar componentes).
 */

export const perfil = {
  nombre: 'Valentina Valle',
  nombrePila: 'Valentina',
  apellido: 'Valle',
  ubicacion: 'Buenos Aires, Argentina',
  bajada: 'Lanzamientos y experiencias de marca para bebidas y gastronomía. De la idea a la acción.',

  // Se usan en <title>, meta description y al compartir el link (Open Graph).
  seo: {
    titulo: 'Valentina Valle · Lanzamientos y experiencias de marca',
    descripcion:
      'Soy Valentina Valle, Licenciada en Comunicación Social con más de cinco años en marketing y brand experience. Lanzo productos y armo experiencias de marca para bebidas y gastronomía: campañas creativas con creadores, prensa y una acción que la gente vive. Buenos Aires.',
  },

  contacto: {
    mail: 'valentinavpicco@gmail.com',
    whatsappTexto: '+54 9 11 3840-6375',
    whatsappLink: 'https://wa.me/5491138406375',
    linkedin: 'https://www.linkedin.com/in/valentina-valle1',
    // El PDF va en public/cv/ con exactamente este nombre.
    cv: '/cv/CV_Valentina_Valle_2026.pdf',
  },

  navegacion: [
    { etiqueta: 'Sobre mí', href: '#sobre-mi' },
    { etiqueta: 'Qué hago', href: '#que-hago' },
    { etiqueta: 'Proyectos', href: '#proyectos' },
    { etiqueta: 'Trayectoria', href: '#trayectoria' },
  ],

  hero: {
    sello: 'Disponible para nuevos proyectos',
  },

  sobreMi: {
    titulo: 'Sobre mí',
    texto:
      'Licenciada en Comunicación Social, con más de cinco años en marketing y brand experience en Sancor Seguros, Cervecería Rabieta y Grupo La Emilia. Hoy lanzo productos y armo experiencias para marcas de bebidas y gastronomía.',
    // Se muestra en lugar de la foto mientras no subas una a src/assets/perfil/.
    cita: 'Me muevo igual de cómoda en lo creativo que en lo operativo.',
    cifras: [
      { valor: '+5', etiqueta: 'años en marketing, marca y brand experience' },
      { valor: '11', etiqueta: 'marcas a mi cargo en eventos en Grupo La Emilia' },
      { valor: '9', etiqueta: 'eventos en paralelo en el pico de la temporada' },
      { valor: '3', etiqueta: 'marcas en simultáneo en Rabieta' },
    ],
  },

  // Especialidades: máximo 3, texto corto y un ejemplo que linkea a su caso (slug de proyectos.ts).
  servicios: {
    titulo: 'Qué hago',
    bajada: 'Para marcas de bebidas y gastronomía. Por proyecto o con fee mensual.',
    items: [
      {
        icono: 'lanzamiento',
        titulo: 'Lanzamientos',
        texto: 'Productos nuevos, ediciones limitadas y colaboraciones entre marcas, con creadores y prensa.',
        ejemplo: { texto: 'Rabieta × Kakawa, sold out', slug: 'rabieta-x-kakawa' },
      },
      {
        icono: 'eventos',
        titulo: 'Experiencias de marca',
        texto: 'Degustaciones, pop-ups y activaciones en ferias y festivales, de la idea al cierre.',
        ejemplo: { texto: 'Primavera de Pampa y Rabieta', slug: 'primavera-pampa-rabieta' },
      },
      {
        icono: 'gestion',
        titulo: 'PM de marketing',
        texto: 'Me sumo por horas a tu marca o agencia y llevo los proyectos de punta a punta.',
        ejemplo: { texto: 'Eventos de 11 marcas a la vez', slug: 'portfolio-eventos-motos' },
      },
    ],
  },

  proyectos: {
    titulo: 'Proyectos',
    bajada: 'Elegí uno y te cuento cómo lo hice.',
  },

  marcas: {
    titulo: 'Marcas con las que trabajé',
    bajada: 'Bebidas, seguros y movilidad: empecé en grandes marcas y hoy llevo esa escala a cervecerías, cafés, bares y marcas nuevas.',
    items: [
      'Cervecería Rabieta',
      'Guinness',
      'Pampa',
      'Kakawa',
      'Grupo Sancor Seguros',
      'Suzuki',
      'MALAGUTI',
      'Motomel',
      'TVS',
      'Kove',
      'Morbidelli',
      'Benelli',
      'SYM',
      'Scott',
      'Orbea',
      'IKA',
    ],
  },

  trayectoria: {
    titulo: 'Trayectoria',
    items: [
      {
        fecha: 'Oct 2026 – hoy',
        empresa: 'Freelance',
        rol: 'Lanzamientos y experiencias de marca',
        actual: true,
        puntos: ['Lanzamientos, experiencias de marca y PM de marketing para bebidas y gastronomía.'],
      },
      {
        fecha: 'Sep 2025 – Oct 2026',
        empresa: 'Grupo La Emilia',
        rol: 'Responsable de Eventos y Brand Experience',
        puntos: [
          'Eventos y activaciones de 11 marcas, con hasta 9 en paralelo.',
          'Lanzamiento de MALAGUTI en Argentina.',
          'Presupuesto anual, proveedores, logística y reportes.',
        ],
      },
      {
        fecha: 'May 2026 – hoy',
        empresa: 'VERBAL Agencia',
        rol: 'Co-fundadora',
        actual: true,
        puntos: ['Estrategia, posicionamiento y campañas.', 'Supervisión de producción creativa y redes.'],
      },
      {
        fecha: 'Jul 2023 – Sep 2025',
        empresa: 'Cervecería Rabieta',
        rol: 'Marketing & Brand Experience Senior',
        puntos: [
          'Marketing y brand experience de Rabieta, Pampa y Guinness.',
          'Lanzamientos y colaboraciones: DISOLUTA y Rabieta × Kakawa.',
          'Activaciones en Oktoberfest, San Patricio, rugby y ferias del Hipódromo.',
        ],
      },
      {
        fecha: 'Dic 2020 – Jul 2023',
        empresa: 'Grupo Sancor Seguros',
        rol: 'De pasante a Analista de Relaciones Institucionales',
        puntos: [
          'Relación con prensa, análisis de medios y clipping.',
          'Eventos corporativos y sponsoreo.',
          'Experiencias en Movistar Arena y Teatro El Nacional.',
        ],
      },
    ],
  },

  herramientas: {
    titulo: 'Herramientas y formación',
    herramientas: {
      titulo: 'Herramientas',
      items: ['SAP', 'Pilot', 'Emblue', 'Canva (avanzado)', 'Illustrator (básico)', 'Microsoft Office'],
    },
    metodologias: {
      titulo: 'Metodologías',
      items: ['Metodologías ágiles'],
    },
    formacion: {
      titulo: 'Formación',
      items: [
        { titulo: 'Licenciatura en Comunicación Social, orientación Publicidad', detalle: 'UCES, 2026' },
        { titulo: 'Liderazgo y Gestión de Equipos', detalle: 'Coderhouse, 2024' },
      ],
    },
    idiomas: {
      titulo: 'Idiomas',
      items: [
        { idioma: 'Español', nivel: 'nativo' },
        { idioma: 'Inglés', nivel: 'C1' },
        { idioma: 'Portugués', nivel: 'básico' },
      ],
    },
  },

  comoTrabajo: {
    titulo: 'Cómo trabajo',
    bajada: 'Modalidad remota o híbrida desde Buenos Aires, con reuniones presenciales cuando suman.',
    pasos: [
      { titulo: 'Diagnóstico', texto: 'Entiendo tu marca, tus objetivos y dónde estás hoy.' },
      { titulo: 'Plan', texto: 'Defino alcance, cronograma y presupuesto.' },
      { titulo: 'Ejecución', texto: 'Coordino creadores, proveedores, equipos y contenido.' },
      { titulo: 'Reporte', texto: 'Mido resultados y propongo los próximos pasos.' },
    ],
    items: [
      {
        titulo: 'Por proyecto',
        texto: 'Un lanzamiento, una campaña de temporada o una experiencia: lo armamos con alcance y cronograma claros, y lo llevo hasta el cierre.',
      },
      {
        titulo: 'Con fee mensual',
        texto: 'Me sumo a tu marca o a tu agencia por horas, también en marca blanca, y llevo los lanzamientos y eventos del calendario.',
      },
    ],
  },

  verbal: {
    titulo: 'VERBAL',
    texto:
      'Co-fundé VERBAL, una agencia boutique de estrategia, marketing y automatización con IA para marcas y PyMEs. Ahí me ocupo de la estrategia y los contenidos. Si tu proyecto necesita más que una persona, lo resolvemos con el equipo de VERBAL.',
    // Si querés mostrar un botón a la web de la agencia, pegá acá su link (ej. 'https://...').
    sitio: '',
  },

  contactoSeccion: {
    titulo: 'Hablemos',
    bajada: '¿Tenés un lanzamiento, una fecha o una experiencia en mente? Contame y te envío una propuesta a medida.',
  },
};

export type Perfil = typeof perfil;
