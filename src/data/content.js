export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
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
  title: 'Ingeniero Informático | Python, SQL, Automatización & Procesamiento de Datos',
  subtitles: [
    'Automatizo procesos críticos con Python y SQL',
    'Proceso y valido grandes volúmenes de datos a escala',
    'Conecto datos, procesos y tecnología en soluciones robustas',
    'Construyo soluciones que la operación necesita',
  ],
  tagline: '+8 años de experiencia en entornos corporativos — automatización, integración de datos y desarrollo de soluciones con impacto real.',
  description:
    'Especializado en automatización de procesos, desarrollo con Python, procesamiento de datos masivos e integración de información en contextos de alta exigencia operacional.',
}

export const ABOUT = {
  summary:
    'Ingeniero en Informática con más de 8 años de experiencia en entornos corporativos, especializado en automatización de procesos, desarrollo de soluciones con Python, integración de datos y análisis de información en contextos de alta exigencia operacional. He participado en proyectos para empresas del sector financiero, retail y consumo masivo, aportando en optimización de procesos, certificación contable, automatización operativa e integración de datos.',
  highlights: [
    {
      title: 'Automatización y desarrollo con Python',
      description:
        'Más de 4 años de experiencia directa en automatización, RPA, ETL y procesamiento de datos. Desarrollo soluciones robustas que eliminan tareas manuales y reducen errores en procesos críticos.',
    },
    {
      title: 'Procesamiento de datos a escala',
      description:
        'Fortaleciendo mi perfil en manejo de grandes volúmenes de datos con Python, SQL Server Management Studio y AWS Athena para análisis, transformación, validación y explotación de información.',
    },
    {
      title: 'Experiencia corporativa comprobada',
      description:
        'Participación en proyectos para BancoEstado, Cencosud Scotiabank, ACL Tecnología, Getronics y Carozzi — desde certificación contable hasta soporte de plataformas empresariales.',
    },
    {
      title: 'Visión técnica orientada a resultados',
      description:
        'Combino experiencia práctica en procesos corporativos con un enfoque técnico centrado en trazabilidad, eficiencia y calidad de datos.',
    },
  ],
}

export const STACK = {
  'Lenguajes y desarrollo': ['Python', 'SQL', 'JavaScript', 'Regex'],
  'Datos y análisis': ['SQL Server Management Studio', 'AWS Athena', 'PostgreSQL', 'pandas', 'openpyxl', 'SQLAlchemy', 'APIs REST'],
  'Automatización y ETL': ['UiPath', 'Pentaho PDI', 'Selenium', 'Robocorp', 'Playwright', 'Power Automate'],
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
    title: 'API de Validación Tributaria — Chile',
    problem:
      'Los cálculos tributarios chilenos (validación de RUT, IVA, retención de honorarios, topes imponibles, declaración F29) requieren conocimiento especializado de normativa vigente y se realizan manualmente con planillas propensas a errores.',
    solution:
      'Construí un microservicio REST con FastAPI que expone 11 endpoints documentados con Swagger para validación y cálculo tributario. Incluye módulos puros de lógica tributaria (RUT módulo 11, IVA 19%, retención 2024-2027, cotizaciones AFP/salud/AFC, F29 simplificado), modelos Pydantic validados, Dockerfile y demo HTML interactiva con formularios funcionales desplegada en GitHub Pages.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'pytest', 'httpx', 'Docker', 'GitHub Actions', 'GitHub Pages'],
    impact:
      '11 endpoints REST documentados con Swagger. 56 tests (unitarios + integración). 5 dominios tributarios implementados. Demo interactiva con formularios que replican la lógica de la API. Deploy continuo a GitHub Pages.',
  },
  {
    title: 'Detector de Anomalías Financieras — Dashboard Interactivo',
    problem:
      'La detección de transacciones sospechosas en datos financieros requiere analizar miles de operaciones simultáneamente, considerando múltiples variables (montos, horarios, frecuencias, destinatarios), algo inviable de forma manual y propenso a errores humanos.',
    solution:
      'Construí un sistema de detección de anomalías en Python con 6 etapas automatizadas: generación de ~5.000 transacciones sintéticas con 6 tipos de anomalías inyectadas, validación de integridad, detección con 3 métodos (Z-Score, IQR e Isolation Forest), clasificación de riesgo (bajo/medio/alto/crítico), reportes CSV y dashboard HTML interactivo con Chart.js. El dashboard incluye scatter plot, heatmap hora×día, distribuciones, timeline mensual y tabla de alertas filtrable. CI/CD con GitHub Actions ejecuta tests, pipeline y despliega en GitHub Pages.',
    technologies: ['Python', 'scikit-learn', 'pandas', 'Chart.js', 'GitHub Actions', 'GitHub Pages', 'pytest'],
    impact:
      'Pipeline ejecuta en menos de 2 segundos. Precision 83% y F1-Score 57% sobre anomalías conocidas. Dashboard con 7 secciones interactivas, heatmap de patrones temporales y contexto explicativo. 33 tests automatizados. Deploy continuo a GitHub Pages.',
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
    name: 'DemostrationTaxAPI',
    description: 'API REST de validación tributaria chilena (RUT, IVA, honorarios, topes, F29) con FastAPI, Swagger, Docker y demo interactiva.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Docker'],
    link: 'https://mechjook.github.io/DemostrationTaxAPI/',
  },
  {
    name: 'DemostrationAnomalyDetector',
    description: 'Detector de anomalías financieras con Z-Score, IQR e Isolation Forest, dashboard interactivo Chart.js y deploy automático a GitHub Pages.',
    technologies: ['Python', 'scikit-learn', 'Chart.js', 'GitHub Actions'],
    link: 'https://mechjook.github.io/DemostrationAnomalyDetector/',
  },
  {
    name: 'DemostrationScraper',
    description: 'Web Scraper de indicadores previsionales de Chile con dashboard interactivo Chart.js y deploy automático a GitHub Pages.',
    technologies: ['Python', 'BeautifulSoup', 'Chart.js', 'GitHub Actions'],
    link: 'https://mechjook.github.io/DemostrationScraper/',
  },
  {
    name: 'DemostrationETL',
    description: 'Pipeline ETL de conciliación bancaria con dashboard interactivo Chart.js y deploy automático a GitHub Pages.',
    technologies: ['Python', 'pandas', 'Chart.js', 'GitHub Actions'],
    link: 'https://mechjook.github.io/DemostrationETL/',
  },
  {
    name: 'ExtractorSII-F29',
    description: 'Bot RPA que automatiza la extracción del Formulario 29 desde el portal del SII para múltiples contribuyentes.',
    technologies: ['Python', 'Selenium', 'tkinter'],
    private: true,
    privateReason: 'Repositorio privado por contener trazas de datos sensibles de entornos corporativos reales.',
  },
  {
    name: 'Prod_ContableBECH',
    description: 'Pipeline ETL para procesamiento masivo de datos de producción y generación de contabilidad automática.',
    technologies: ['Python', 'PostgreSQL', 'PLpgSQL'],
    private: true,
    privateReason: 'Repositorio privado por contener trazas de datos sensibles de entornos corporativos reales.',
  },
  {
    name: 'Proyecto_piloto_contable',
    description: 'Flujo maestro de 7 etapas para validación y consolidación diaria de subsidiarios contables.',
    technologies: ['Python', 'SQLAlchemy', 'openpyxl'],
    private: true,
    privateReason: 'Repositorio privado por contener trazas de datos sensibles de entornos corporativos reales.',
  },
  {
    name: 'Robocorp_Auto_SII-F29_Scrap',
    description: 'Scraping tributario con framework Robocorp y almacenamiento en Google Sheets/Drive.',
    technologies: ['Python', 'Playwright', 'Google APIs'],
    private: true,
    privateReason: 'Repositorio privado por contener trazas de datos sensibles de entornos corporativos reales.',
  },
]

export const EXPERIENCE_TIMELINE = [
  {
    role: 'Programmer Analyst',
    company: 'Getronics',
    client: 'BancoEstado',
    period: 'septiembre 2025 — Actualidad',
    location: 'Región Metropolitana, Chile',
    description:
      'Desarrollo de automatizaciones, procesamiento de información y análisis de datos masivos para procesos de certificación contable y operación productiva.',
    responsibilities: [
      'Desarrollo de soluciones con Python para automatización y validación de procesos',
      'Procesamiento, depuración y análisis de grandes volúmenes de datos',
      'Construcción de consultas y validaciones con SQL sobre información operacional y contable',
      'Carga, migración y administración de datos en entornos productivos',
      'Apoyo en levantamiento funcional, historias de usuario y documentación de procesos',
    ],
    technologies: ['Python', 'SQL', 'Procesamiento de Datos', 'Análisis de Datos', 'Automatización'],
    current: true,
  },
  {
    role: 'Desarrollador RPA / Analista Programador Sr',
    company: 'ACL Tecnología',
    client: 'Cencosud Scotiabank',
    period: 'noviembre 2021 — febrero 2025',
    location: 'Región Metropolitana, Chile',
    description:
      'Desarrollo de soluciones de automatización y flujos ETL para procesos internos, con foco en continuidad operativa, monitoreo y estabilidad de procesos productivos.',
    responsibilities: [
      'Desarrollo de soluciones RPA para procesos de negocio',
      'Implementación de flujos ETL para tratamiento e integración de datos',
      'Uso de UiPath ReFramework para automatizaciones robustas y mantenibles',
      'Desarrollo de procesos con Pentaho PDI',
      'Monitoreo, soporte y orquestación de procesos automatizados en producción',
    ],
    technologies: ['UiPath', 'ReFramework', 'Pentaho PDI', 'ETL', 'Automatización'],
    current: false,
  },
  {
    role: 'Soporte TI',
    company: 'Empresas Carozzi S.A.',
    client: null,
    period: 'junio 2017 — junio 2021',
    location: 'Nos, Chile',
    description:
      'Ejecución, planificación y resolución de incidentes generados por usuarios y sistemas, participando en proyectos de implementación y administración de plataformas corporativas críticas.',
    responsibilities: [
      'Atención y resolución de incidentes técnicos para usuarios y sistemas',
      'Participación en proyectos de implementación tecnológica',
      'Gestión de herramientas como CrowdStrike, System Center, SAP, Office 365, Azure y servicios Cloud',
      'Análisis de plataformas OT y concientización en ciberseguridad',
      'Monitoreo de amenazas mediante plataformas de administración y seguridad',
    ],
    technologies: ['Office 365', 'Azure', 'SAP', 'System Center', 'Cloud', 'Ciberseguridad'],
    current: false,
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
    title: 'Desarrollo con Python a escala',
    description:
      'Consolidar un perfil técnico robusto en desarrollo de soluciones con Python para automatización, validación y tratamiento de información a escala.',
  },
  {
    title: 'Procesamiento de datos masivos',
    description:
      'Profundizar en análisis, transformación y explotación de grandes volúmenes de datos con Python, SQL Server Management Studio y AWS Athena.',
  },
  {
    title: 'Automatización inteligente',
    description:
      'Llevar la automatización al siguiente nivel incorporando IA aplicada, clasificación de documentos y agentes técnicos.',
  },
  {
    title: 'Integración y calidad de datos',
    description:
      'Diseñar flujos de integración robustos que garanticen trazabilidad, consistencia y confiabilidad de la información en entornos productivos.',
  },
  {
    title: 'Liderazgo técnico',
    description:
      'Guiar equipos de desarrollo y automatización con criterio técnico, buenas prácticas y visión orientada a resultados.',
  },
  {
    title: 'Soluciones de alto impacto',
    description:
      'Construir herramientas que transformen la operación, contribuyendo a la eficiencia, trazabilidad y confiabilidad de los procesos.',
  },
]

export const CONTACT = {
  headline: 'Busco desafíos donde la automatización y los datos generen impacto real',
  description:
    'Si necesitas automatizar procesos, procesar datos a escala, integrar información o construir soluciones que mejoren la operación — conversemos. Disponible para oportunidades técnicas, freelance o colaboración profesional.',
  links: {
    email: 'jose.nicolas.candia@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-candia-orostegui-a7861913a/',
    github: 'https://github.com/mechjook',
  },
  location: 'Chile',
}
