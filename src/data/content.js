export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Impacto', href: '#impact' },
  { label: 'GitHub', href: '#github' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'Formación', href: '#education' },
  { label: 'Visión', href: '#vision' },
  { label: 'Contacto', href: '#contact' },
]

export const HERO = {
  name: 'José Nicolás Candia',
  title: 'Automation Developer | RPA, Python, ETL & Process Optimization',
  subtitles: [
    'Reduzco horas manuales con automatización inteligente',
    'Conecto datos, procesos y tecnología en soluciones robustas',
    'Transformo operaciones manuales en flujos auditables',
    'Construyo herramientas que la operación necesita',
  ],
  tagline: 'Diseño soluciones que eliminan trabajo manual, reducen errores y escalan con el negocio.',
  description:
    'Automatizo procesos críticos, integro fuentes de datos y construyo herramientas internas que generan impacto real — con foco en eficiencia, trazabilidad y robustez operativa.',
}

export const ABOUT = {
  summary:
    'Soy un desarrollador especializado en automatización de procesos, integración de datos y construcción de herramientas operativas. Mi trabajo se centra en resolver problemas reales: eliminar tareas manuales repetitivas, reducir errores en procesos críticos y crear soluciones que conecten reglas de negocio con ejecución técnica.',
  highlights: [
    {
      title: 'Resuelvo problemas de operación',
      description:
        'Identifico cuellos de botella, procesos frágiles y tareas repetitivas. Diseño automatizaciones que los eliminan de raíz, no parches temporales.',
    },
    {
      title: 'Combino negocio y tecnología',
      description:
        'Entiendo las reglas contables, tributarias y financieras antes de escribir código. Eso me permite construir soluciones que realmente calzan con la operación.',
    },
    {
      title: 'Construyo para que dure',
      description:
        'Mis soluciones incluyen validaciones, manejo de errores, trazabilidad y reanudación automática. No solo funcionan — son mantenibles, auditables y resilientes.',
    },
    {
      title: 'Aprendo rápido, ejecuto con criterio',
      description:
        'Analizo antes de actuar. Cuando tengo claridad, ejecuto con decisión. Me adapto a herramientas nuevas, contextos distintos y presión operativa.',
    },
  ],
}

export const STACK = {
  'Automatización': ['UiPath', 'Selenium', 'Robocorp', 'Playwright', 'Power Automate'],
  'Lenguajes': ['Python', 'JavaScript', 'SQL', 'Regex'],
  'Datos e integración': ['pandas', 'openpyxl', 'SQLAlchemy', 'PostgreSQL', 'SQL Server', 'Athena', 'APIs REST'],
  'Dev / Herramientas': ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'PyInstaller', 'Excel Avanzado'],
}

export const PROJECTS = [
  {
    title: 'Bot RPA de extracción tributaria (SII F29)',
    problem:
      'La consulta mensual del Formulario 29 para decenas de contribuyentes se hacía manualmente en el portal del SII, consumiendo horas de trabajo y generando errores frecuentes.',
    solution:
      'Desarrollé un bot en Python con Selenium que automatiza el login, navegación, extracción de códigos tributarios y escritura de resultados en Excel. Incluye GUI, reanudación automática y generación de portable .exe para usuarios finales.',
    technologies: ['Python', 'Selenium', 'tkinter', 'openpyxl', 'PyInstaller'],
    impact:
      'Proceso que tomaba un día completo de trabajo manual ahora se ejecuta de forma desatendida. Eliminación de errores de transcripción y trazabilidad completa de cada ejecución.',
  },
  {
    title: 'Pipeline ETL de contabilidad automática',
    problem:
      'La generación de contabilidad a partir de datos de producción requería procesamiento manual de múltiples fuentes, cruces complejos y era propenso a inconsistencias.',
    solution:
      'Construí un sistema orquestado con múltiples módulos ETL en Python que procesa datos masivos, ejecuta comparadores contables, cruza subsidiarios y genera consolidados automáticos contra PostgreSQL.',
    technologies: ['Python', 'PostgreSQL', 'pandas', 'PLpgSQL', 'Jupyter'],
    impact:
      'Automatización completa de un proceso contable crítico. Reducción significativa de tiempo de procesamiento y detección temprana de inconsistencias entre fuentes.',
  },
  {
    title: 'Consolidación y validación de subsidiarios',
    problem:
      'La validación diaria de subsidiarios contables requería cruzar múltiples archivos, aplicar reglas de clasificación y consolidar resultados — todo manualmente.',
    solution:
      'Diseñé un flujo maestro de 7 etapas: archivado, preparación, inserción, enriquecimiento con cuentas/eventos, cruce TXP, cuadratura MCF y consolidación histórica. Orquestado con flags de ejecución y rutas alternativas.',
    technologies: ['Python', 'SQLAlchemy', 'openpyxl', 'PostgreSQL', 'Excel COM'],
    impact:
      'Proceso diario que antes tomaba horas de trabajo manual ahora se ejecuta con un solo comando. Cuadraturas automáticas y consolidación histórica sin intervención.',
  },
  {
    title: 'Sistema de conciliación de datos financieros',
    problem:
      'La operación necesitaba cruzar información de múltiples fuentes financieras para detectar diferencias, pero el proceso era lento, manual y difícil de auditar.',
    solution:
      'Implementé soluciones de cruce automatizado entre bases de datos, archivos Excel y reportes, con reglas de validación específicas y generación de reportes de diferencias.',
    technologies: ['SQL', 'Python', 'PostgreSQL', 'pandas'],
    impact:
      'Detección automática de inconsistencias que antes pasaban desapercibidas. Trazabilidad completa del proceso de conciliación.',
  },
  {
    title: 'ETL Conciliación Bancaria — Dashboard Interactivo',
    problem:
      'La conciliación entre registros contables y extractos bancarios requería cruces manuales entre archivos con formatos distintos (encoding, delimitadores, formatos de fecha y montos), sin visibilidad consolidada de diferencias ni análisis estadístico.',
    solution:
      'Construí un pipeline ETL completo en Python con 7 etapas automatizadas: generación de datos sintéticos, validación de estructura, extracción con detección automática de encoding, normalización, match por código de operación, reportes CSV y dashboard HTML interactivo con Chart.js. Incluye CI/CD con GitHub Actions que ejecuta tests, corre el pipeline y publica el dashboard en GitHub Pages.',
    technologies: ['Python', 'pandas', 'matplotlib', 'Chart.js', 'GitHub Actions', 'GitHub Pages', 'pytest'],
    impact:
      'Pipeline ejecuta en menos de 2 segundos. Dashboard interactivo con gráficos, tablas filtrables/ordenables, búsqueda en tiempo real y navegación por secciones. 17 tests automatizados. Deploy continuo a GitHub Pages.',
  },
  {
    title: 'Web Scraper Indicadores Previsionales — Dashboard Interactivo',
    problem:
      'Los indicadores económicos y previsionales de Chile (UF, dólar, UTM, tasas AFP, topes imponibles) cambian constantemente y consultarlos manualmente en Previred no permite visualizar tendencias ni variaciones históricas.',
    solution:
      'Construí un Web Scraper automatizado en Python con 7 etapas: extracción desde Previred con reintentos, parsing de formatos chilenos ($1.234.567, 11,44%), almacenamiento como serie temporal en CSV, cálculo de variaciones y tendencias, validación de integridad y dashboard HTML interactivo con Chart.js. Incluye sparklines en KPIs, gráficos de evolución temporal y tabla resumen agrupada por sección. CI/CD con GitHub Actions ejecuta el scraper semanalmente y despliega en GitHub Pages.',
    technologies: ['Python', 'BeautifulSoup', 'pandas', 'Chart.js', 'GitHub Actions', 'GitHub Pages', 'pytest'],
    impact:
      'Pipeline ejecuta en menos de 2 segundos. 43 indicadores monitoreados con 26 semanas de historial. Dashboard con 5 secciones interactivas, sparklines de tendencia y filtros. 67 tests automatizados. Scraping semanal automático con deploy continuo.',
  },
  {
    title: 'Herramientas internas de productividad',
    problem:
      'Equipos operativos dedicaban tiempo significativo a tareas repetitivas que podían estandarizarse y automatizarse con herramientas simples.',
    solution:
      'Desarrollé utilidades en Python y JavaScript para procesamiento de archivos, traducción de documentos, análisis de datos y estandarización de tareas operativas recurrentes.',
    technologies: ['Python', 'JavaScript', 'APIs', 'Google Sheets'],
    impact:
      'Reducción de tiempos en tareas rutinarias y estandarización de procesos que antes dependían de criterio individual.',
  },
]

export const IMPACT_METRICS = [
  {
    metric: 'Procesos manuales eliminados',
    description:
      'Automatización de flujos completos que antes requerían horas de trabajo manual diario — desde extracción tributaria hasta consolidación contable.',
    icon: 'cog',
  },
  {
    metric: 'Errores operativos reducidos',
    description:
      'Implementación de validaciones, reglas de negocio y controles automáticos que eliminan la variabilidad humana en procesos críticos.',
    icon: 'shield',
  },
  {
    metric: 'Trazabilidad completa',
    description:
      'Cada automatización incluye logging, evidencia de ejecución, control de estados y reanudación automática — auditable de principio a fin.',
    icon: 'eye',
  },
  {
    metric: 'Tiempo de procesamiento optimizado',
    description:
      'Procesos contables y de datos que tomaban un día completo ahora se ejecutan en minutos de forma desatendida.',
    icon: 'zap',
  },
  {
    metric: 'Integración de fuentes heterogéneas',
    description:
      'Conexión de PostgreSQL, SQL Server, Excel, Google Sheets, APIs y archivos planos en flujos unificados y consistentes.',
    icon: 'link',
  },
  {
    metric: 'Herramientas para usuarios finales',
    description:
      'Construcción de utilidades con GUI y portables .exe que permiten a equipos no técnicos beneficiarse de la automatización.',
    icon: 'layers',
  },
]

export const GITHUB_REPOS = [
  {
    name: 'ExtractorSII-F29',
    description: 'Bot RPA que automatiza la extracción del Formulario 29 desde el portal del SII para múltiples contribuyentes.',
    technologies: ['Python', 'Selenium', 'tkinter'],
  },
  {
    name: 'Prod_ContableBECH',
    description: 'Pipeline ETL para procesamiento masivo de datos de producción y generación de contabilidad automática.',
    technologies: ['Python', 'PostgreSQL', 'PLpgSQL'],
  },
  {
    name: 'Proyecto_piloto_contable',
    description: 'Flujo maestro de 7 etapas para validación y consolidación diaria de subsidiarios contables.',
    technologies: ['Python', 'SQLAlchemy', 'openpyxl'],
  },
  {
    name: 'DemostrationETL',
    description: 'Pipeline ETL de conciliación bancaria con dashboard interactivo Chart.js y deploy automático a GitHub Pages.',
    technologies: ['Python', 'pandas', 'Chart.js', 'GitHub Actions'],
    link: 'https://mechjook.github.io/DemostrationETL/',
  },
  {
    name: 'DemostrationScraper',
    description: 'Web Scraper de indicadores previsionales de Chile con dashboard interactivo Chart.js y deploy automático a GitHub Pages.',
    technologies: ['Python', 'BeautifulSoup', 'Chart.js', 'GitHub Actions'],
    link: 'https://mechjook.github.io/DemostrationScraper/',
  },
  {
    name: 'Robocorp_Auto_SII-F29_Scrap',
    description: 'Scraping tributario con framework Robocorp y almacenamiento en Google Sheets/Drive.',
    technologies: ['Python', 'Playwright', 'Google APIs'],
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

export const CONTACT = {
  headline: 'Busco desafíos donde la automatización genere impacto real',
  description:
    'Si necesitas automatizar procesos, integrar datos, reducir trabajo manual o construir herramientas que mejoren la operación — conversemos. Disponible para oportunidades técnicas, freelance o colaboración profesional.',
  links: {
    email: 'jose.nicolas.candia@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-candia-orostegui-a7861913a/',
    github: 'https://github.com/mechjook',
  },
  location: 'Chile',
}
