/**
 * Todos tus datos personales y textos del sitio viven acá.
 * Editá este archivo y el sitio se actualiza solo (no hace falta tocar componentes).
 */

export const perfil = {
  nombre: 'Valentina Valle',
  nombrePila: 'Valentina',
  apellido: 'Valle',
  ubicacion: 'Buenos Aires, Argentina',
  bajada: 'Marketing, creadores y experiencias de marca. De la idea a la ejecución.',

  // Se usan en <title>, meta description y al compartir el link (Open Graph).
  seo: {
    titulo: 'Valentina Valle · Marketing, creadores y experiencias de marca',
    descripcion:
      'Soy Valentina Valle, Licenciada en Comunicación Social con más de cinco años en marketing y brand experience. Trabajo como freelance en creadores y UGC, experiencias de marca, lanzamientos, cobranding, prensa y PM de marketing. Buenos Aires.',
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
    { etiqueta: 'Servicios', href: '#que-hago' },
    { etiqueta: 'Proyectos', href: '#proyectos' },
    { etiqueta: 'Trayectoria', href: '#trayectoria' },
    { etiqueta: 'VERBAL', href: '#verbal' },
  ],

  hero: {
    sello: 'Disponible para nuevos proyectos',
  },

  sobreMi: {
    titulo: 'Sobre mí',
    texto:
      'Soy Licenciada en Comunicación Social (UCES) y hace más de cinco años trabajo en marketing, marca y brand experience: en Grupo Sancor Seguros, en Cervecería Rabieta con Pampa y Guinness, y a cargo de los eventos de todo Grupo La Emilia. Lo mío es tomar una idea y hacerla realidad: campañas, lanzamientos, creadores y experiencias, con presupuestos, cronogramas, proveedores y equipos en orden.',
    // Se muestra en lugar de la foto mientras no subas una a src/assets/perfil/.
    cita: 'Me muevo igual de cómoda en lo creativo que en lo operativo.',
    cifras: [
      { valor: '+5', etiqueta: 'años en marketing, marca y brand experience' },
      { valor: '11', etiqueta: 'marcas a mi cargo en eventos en Grupo La Emilia' },
      { valor: '9', etiqueta: 'eventos en paralelo en el pico de la temporada' },
      { valor: '3', etiqueta: 'marcas en simultáneo en Rabieta' },
    ],
  },

  servicios: {
    titulo: 'Servicios',
    bajada: 'Podés contratar uno puntual o combinar varios, por proyecto o con fee mensual.',
    items: [
      {
        icono: 'creadores',
        titulo: 'Creadores y UGC',
        texto:
          'Busco y elijo perfiles, negocio fees y condiciones, escribo briefs y guiones y reviso cada pieza hasta la entrega. Packs UGC, campañas, programas mes a mes y UGC para pauta.',
        prueba: 'Creadores para Rabieta, Pampa y Guinness a la vez.',
      },
      {
        icono: 'eventos',
        titulo: 'Experiencias de marca',
        texto:
          'Activaciones, eventos, ferias y stands: concepto, presupuesto, proveedores, logística y viajes, montaje, coordinación en el lugar y cierre con reporte.',
        prueba: 'Los eventos de 11 marcas en Grupo La Emilia.',
      },
      {
        icono: 'lanzamiento',
        titulo: 'Lanzamientos',
        texto:
          'Campañas con concepto creativo, creadores, prensa y una acción de marca a medida: PR boxes, pop-up o evento.',
        prueba: 'El lanzamiento de MALAGUTI en Argentina.',
      },
      {
        icono: 'cobranding',
        titulo: 'Cobranding entre marcas',
        texto:
          'Busco la marca socia, negocio el acuerdo y armamos juntas un producto o una acción: ediciones limitadas, envíos especiales e invitaciones.',
        prueba: 'Rabieta × Kakawa, una edición que se agotó.',
      },
      {
        icono: 'diario',
        titulo: 'Prensa y clipping',
        texto:
          'Kits e invitaciones de prensa para lanzamientos y eventos, y monitoreo de medios: cada nota en la que aparece tu marca, con la mención destacada.',
        prueba: 'Relación con prensa y clippings en Grupo Sancor Seguros.',
      },
      {
        icono: 'gestion',
        titulo: 'PM de marketing',
        texto:
          'Me sumo a tu equipo por horas: cronogramas, proveedores y negociación, presupuestos, coordinación con diseño y agencias, email marketing y reportes.',
        prueba: 'Hasta 9 eventos en paralelo.',
      },
      {
        icono: 'estrategia',
        titulo: 'Estrategia de campañas',
        texto:
          'Un plan de campañas con objetivos, fechas clave y calendario de contenidos, con los briefs para que tu equipo produzca y publique a su ritmo.',
      },
      {
        icono: 'camara',
        titulo: 'Contenido a medida',
        texto:
          'Foto, video, diseño y edición con mi red de colegas. Yo coordino el brief, la revisión y la entrega. Se cotiza según cada pedido.',
      },
    ],
  },

  proyectos: {
    titulo: 'Proyectos',
    bajada: 'Lanzamientos, activaciones, cobrandings y campañas con creadores. Elegí uno y te cuento cómo lo hice.',
  },

  marcas: {
    titulo: 'Marcas con las que trabajé',
    bajada: 'Bebidas, seguros y movilidad: categorías distintas, el mismo foco en llevar cada proyecto de punta a punta.',
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
        fecha: 'Sep 2025 – Oct 2026',
        empresa: 'Grupo La Emilia',
        rol: 'Responsable de Eventos y Brand Experience',
        puntos: [
          'Eventos y activaciones de 11 marcas: Suzuki, TVS, Motomel, MALAGUTI, Kove, Morbidelli, Benelli, SYM, Scott, Orbea e IKA.',
          'Presupuesto anual, control de desvíos y gestión en SAP.',
          'Búsqueda y negociación con proveedores, logística y viajes para eventos.',
          'Trabajo con agencias, concesionarios y diseño; email marketing a clientes y reportes de resultados.',
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
          'Campañas on premise, off premise y digitales, con creadores, prensa y promociones.',
          'Lanzamientos de cerveza, activaciones y ferias: Hipódromo, Oktoberfest, San Patricio y rugby.',
          'Adaptación de campañas globales de Guinness bajo lineamientos de Diageo.',
          'Coordinación con diseño y ecommerce, comunicación de los bares de Palermo y Pilar, y gestión de equipo.',
        ],
      },
      {
        fecha: 'Dic 2020 – Jul 2023',
        empresa: 'Grupo Sancor Seguros',
        rol: 'De pasante a Analista de Relaciones Institucionales',
        puntos: [
          'Presupuestos anuales del área.',
          'Relación con periodistas, análisis de notas en medios y clipping.',
          'Eventos corporativos, sponsoreo y evaluación de propuestas.',
          'Experiencias en suites de Movistar Arena y Teatro El Nacional.',
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
        texto: 'Un lanzamiento, una campaña, un evento o un cobranding: lo armamos con alcance y cronograma claros, y lo llevo hasta el cierre.',
      },
      {
        titulo: 'Con fee mensual',
        texto: 'Si necesitás a alguien a cargo todos los meses, me sumo a tu equipo y acompaño el día a día del marketing.',
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
    bajada: 'Contame qué estás armando y te envío una propuesta a medida para tu marca.',
  },
};

export type Perfil = typeof perfil;
