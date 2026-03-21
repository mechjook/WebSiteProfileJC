export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Propuesta', href: '#value' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Fortalezas', href: '#strengths' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'Formación', href: '#education' },
  { label: 'Visión', href: '#vision' },
  { label: 'Contacto', href: '#contact' },
]

export const HERO = {
  name: 'José Nicolás Candia',
  title: 'Desarrollador de Automatización y Soluciones Tecnológicas',
  subtitles: [
    'Automation Developer',
    'RPA Developer',
    'Python Developer',
    'Especialista en Datos y Control Operacional',
  ],
  tagline: 'Diseño soluciones, no solo automatizaciones aisladas.',
  description:
    'Combino automatización, desarrollo, datos y criterio técnico para transformar procesos complejos en soluciones robustas, mantenibles y de impacto real — especialmente en entornos financieros, contables y operacionales.',
}

export const ABOUT = {
  paragraphs: [
    'Soy un profesional enfocado en automatización de procesos, desarrollo de herramientas internas y soluciones orientadas a la operación. Mi trabajo va más allá de ejecutar tareas repetitivas: diseño soluciones técnicas que conectan reglas de negocio, validaciones, trazabilidad y control operacional en un flujo coherente.',
    'He desarrollado pipelines ETL completos, bots de extracción tributaria, orquestadores de procesos contables y herramientas de conciliación de datos — siempre con foco en robustez, reanudación automática y separación entre entornos QA y Producción. Mi dominio del sector financiero-contable me permite entender tanto el código como las reglas del negocio.',
    'Antes de actuar, analizo. Entiendo el proceso, identifico riesgos, evalúo dependencias y recién entonces diseño la solución. Cuando tengo claridad, ejecuto con decisión y compromiso. No busco lo rápido, busco lo correcto — y cuando ambos coinciden, es donde genero mayor valor.',
  ],
}

export const VALUE_PROPS = [
  {
    title: 'Procesos manuales a soluciones robustas',
    description:
      'Transformo operaciones manuales y repetitivas en flujos automatizados con validaciones, manejo de errores, evidencia de ejecución y reanudación automática.',
    icon: 'cog',
  },
  {
    title: 'Reducción de errores operativos',
    description:
      'Implemento capas de validación, reglas de negocio y controles que eliminan la variabilidad humana en procesos críticos como conciliaciones y certificaciones contables.',
    icon: 'shield',
  },
  {
    title: 'Automatizaciones mantenibles',
    description:
      'Construyo soluciones con arquitectura clara, separación de responsabilidades, orquestación por etapas y documentación que permite evolución y soporte a largo plazo.',
    icon: 'layers',
  },
  {
    title: 'Trazabilidad y control',
    description:
      'Integro logging, evidencia, reportería y monitoreo para que cada ejecución sea observable, auditable y medible.',
    icon: 'eye',
  },
  {
    title: 'Negocio conectado con tecnología',
    description:
      'Traduzco necesidades operativas en lógica técnica. Conecto reglas contables, tributarias y financieras con la ejecución automatizada de forma precisa.',
    icon: 'link',
  },
  {
    title: 'Rapidez con orden técnico',
    description:
      'Entrego soluciones funcionales en plazos reales sin sacrificar calidad, estructura ni buenas prácticas de desarrollo.',
    icon: 'zap',
  },
]

export const EXPERIENCE_AREAS = [
  {
    area: 'Automatización RPA',
    description:
      'Diseño y desarrollo de automatizaciones con UiPath, Robocorp y Selenium, integrando validaciones, manejo de excepciones, trazabilidad y separación entre entornos QA y Producción.',
  },
  {
    area: 'Desarrollo Python',
    description:
      'Construcción de herramientas internas, pipelines ETL, automatización web, procesamiento de datos y utilidades operativas con pandas, openpyxl, SQLAlchemy y Selenium.',
  },
  {
    area: 'Datos, SQL y ETL',
    description:
      'Consultas avanzadas en PostgreSQL y SQL Server, transformación de datos, conciliaciones contables, cruces entre fuentes y preparación de información para operación y reportería.',
  },
  {
    area: 'Dominio financiero y contable',
    description:
      'Automatización de procesos tributarios (SII, F29), validaciones contables, consolidación de subsidiarios, cuadraturas y certificación — con entendimiento profundo de las reglas de negocio.',
  },
  {
    area: 'Integración entre sistemas',
    description:
      'Conexión de plataformas, bases de datos, APIs, Google Sheets, Excel COM y archivos para crear flujos de información consistentes entre sistemas heterogéneos.',
  },
  {
    area: 'Control operacional',
    description:
      'Implementación de orquestadores, reanudación automática, control de estados, evidencia de ejecución y métricas que permiten supervisar y auditar procesos automatizados.',
  },
]

export const STACK = {
  'Automatización & RPA': ['UiPath', 'Selenium', 'Robocorp', 'Playwright'],
  'Desarrollo': ['Python', 'JavaScript', 'APIs REST', 'Regex'],
  'Datos & ETL': ['pandas', 'openpyxl', 'SQLAlchemy', 'numpy'],
  'Bases de datos': ['PostgreSQL', 'SQL Server', 'PLpgSQL', 'TSQL'],
  'Archivos & Procesamiento': ['Excel Avanzado', 'CSV', 'PDF', 'Google Sheets'],
  'Herramientas & DevOps': ['Git', 'GitHub', 'Docker', 'PyInstaller'],
}

export const STRENGTHS = [
  {
    title: 'Automatización de procesos con UiPath',
    description: 'Flujos robustos con validaciones, evidencia, manejo de errores y separación QA/Producción para procesos críticos.',
  },
  {
    title: 'Desarrollo de herramientas con Python',
    description: 'Pipelines ETL, utilidades, GUIs y aplicaciones internas que resuelven problemas reales de operación.',
  },
  {
    title: 'SQL avanzado y manejo de datos',
    description: 'Consultas complejas en PostgreSQL y SQL Server, transformaciones, cruces contables y esquemas de clasificación.',
  },
  {
    title: 'ETL y transformación de información',
    description: 'Pipelines de extracción, limpieza y carga de datos con pandas, openpyxl y SQLAlchemy orientados a calidad y consistencia.',
  },
  {
    title: 'Web scraping avanzado',
    description: 'Extracción de datos desde portales complejos con Selenium y Playwright, incluyendo manejo de login, modales y navegación dinámica.',
  },
  {
    title: 'Validación y reglas de negocio',
    description: 'Implementación de controles que aseguran integridad, consistencia y cumplimiento de reglas contables y operativas.',
  },
  {
    title: 'Integración entre sistemas',
    description: 'Conexión fluida entre PostgreSQL, Excel COM, Google Sheets, APIs y archivos para crear ecosistemas funcionales.',
  },
  {
    title: 'Monitoreo y trazabilidad',
    description: 'Observabilidad completa del ciclo de ejecución con logging, control de estados, evidencia y reanudación automática.',
  },
  {
    title: 'Herramientas internas y distribución',
    description: 'Construcción de utilidades con GUI (tkinter) y generación de portables (.exe) para distribución a usuarios finales.',
  },
  {
    title: 'Robustez operativa',
    description: 'Soluciones con orquestación, reanudación automática, manejo de excepciones y separación de entornos para continuidad operativa.',
  },
]

export const PROJECTS = [
  {
    title: 'Bot RPA de extracción tributaria',
    description:
      'Automatización completa de consulta del Formulario 29 (F29) desde el portal del SII para múltiples contribuyentes, con GUI, reanudación automática, reportería en Excel y generación de portable.',
    tags: ['Python', 'Selenium', 'tkinter', 'Excel', 'PyInstaller'],
  },
  {
    title: 'Pipeline ETL de contabilidad automática',
    description:
      'Procesamiento masivo de datos de producción para generar contabilidad automática. Orquestación de múltiples módulos ETL, comparadores contables y conciliación entre subsidiarios.',
    tags: ['Python', 'PostgreSQL', 'pandas', 'SQL', 'Orquestación'],
  },
  {
    title: 'Consolidación y validación contable',
    description:
      'Flujo maestro de 7 etapas para validación de subsidiarios: archivado, preparación, inserción, enriquecimiento, cruce TXP, cuadratura y consolidación diaria contra PostgreSQL.',
    tags: ['Python', 'SQLAlchemy', 'openpyxl', 'PostgreSQL', 'ETL'],
  },
  {
    title: 'Soluciones de conciliación de datos',
    description:
      'Cruce de múltiples fuentes de información financiera para detectar diferencias, inconsistencias y desvíos críticos en la operación contable.',
    tags: ['SQL', 'Python', 'Conciliación', 'Control'],
  },
  {
    title: 'Herramientas internas para productividad',
    description:
      'Aplicaciones y utilidades orientadas a reducir tiempos, estandarizar tareas y facilitar el análisis técnico — incluyendo traductor de documentos y herramientas de procesamiento.',
    tags: ['Python', 'JavaScript', 'Herramientas', 'Productividad'],
  },
]

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Entendimiento',
    description: 'Comprensión profunda del proceso, sus actores, dependencias y contexto operativo.',
  },
  {
    step: '02',
    title: 'Análisis',
    description: 'Identificación de riesgos, puntos críticos, excepciones y oportunidades de mejora.',
  },
  {
    step: '03',
    title: 'Diseño',
    description: 'Arquitectura de la solución con flujos claros, validaciones y manejo de errores definido.',
  },
  {
    step: '04',
    title: 'Construcción',
    description: 'Desarrollo ordenado con buenas prácticas, código limpio y separación de responsabilidades.',
  },
  {
    step: '05',
    title: 'Validación',
    description: 'Pruebas exhaustivas en entornos controlados, verificación de reglas y revisión de edge cases.',
  },
  {
    step: '06',
    title: 'Entrega y mejora',
    description: 'Despliegue con monitoreo, recolección de feedback y ciclo de mejora continua.',
  },
]

export const VISION_ITEMS = [
  {
    title: 'Arquitectura de Soluciones',
    description:
      'Diseñar ecosistemas de automatización completos que conecten procesos, datos y tecnología a nivel organizacional.',
  },
  {
    title: 'Liderazgo Técnico',
    description:
      'Guiar equipos de desarrollo y automatización con criterio técnico, buenas prácticas y visión de largo plazo.',
  },
  {
    title: 'Automatización Inteligente',
    description:
      'Incorporar IA aplicada, clasificación de documentos y agentes técnicos para llevar la automatización al siguiente nivel.',
  },
  {
    title: 'Gestión de Proyectos',
    description:
      'Liderar iniciativas tecnológicas de punta a punta, conectando negocio, operación y tecnología de forma efectiva.',
  },
  {
    title: 'Observabilidad avanzada',
    description:
      'Evolucionar los patrones de monitoreo y orquestación actuales hacia observabilidad completa con métricas, alertas y dashboards.',
  },
  {
    title: 'Soluciones de Alto Impacto',
    description:
      'Construir herramientas que transformen la operación, generen métricas reales y escalen con el crecimiento del negocio.',
  },
]

export const EDUCATION = [
  {
    type: 'magister',
    title: 'Magíster en Ingeniería Informática',
    institution: 'Universidad Andrés Bello',
  },
  {
    type: 'titulo',
    title: 'Ingeniería de Ejecución Informática mención Desarrollo de Sistemas',
    institution: 'Instituto Profesional AIEP, Universidad Andrés Bello',
  },
  {
    type: 'titulo',
    title: 'Programación y Análisis de Sistemas',
    institution: 'Instituto Profesional AIEP, Universidad Andrés Bello',
  },
]

export const DIPLOMAS = [
  {
    title: 'Red Team (Ciberseguridad)',
    institution: 'USACH',
  },
  {
    title: 'Ingeniería de Sistemas Empresariales',
    institution: 'UNAB',
  },
  {
    title: 'Gestión TI',
    institution: 'UNAB',
  },
  {
    title: 'Estrategias de TI',
    institution: 'UNAB',
  },
]

export const CERTIFICATIONS = [
  'AZ900: Azure Fundamentals',
  'Pentest Web — Del escaneo al Exploit',
  'Reversing & Exploiting',
  'Técnicas en Función de los Escenarios',
  'Iniciándonos en Ethical Hacking y Pentesting',
  'Nivelación para Red Team',
]

export const CONTACT = {
  headline: 'Conversemos sobre automatización, desarrollo o mejora de procesos',
  description:
    'Disponible para oportunidades desafiantes donde pueda aportar valor real. Abierto a colaborar en soluciones tecnológicas de alto impacto.',
  links: {
    email: 'jose.nicolas.candia@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-candia-orostegui-a7861913a/',
    github: 'https://github.com/mechjook',
  },
  location: 'Chile',
}
