# Perfil de Desarrollador — José Nicolás Candia

> Análisis generado a partir de los repositorios de [github.com/mechjook](https://github.com/mechjook)
> Fecha: 20 de marzo de 2026

---

## 1. Stack Tecnológico

### Lenguajes principales (por frecuencia de uso real en proyectos propios)

| Lenguaje | Frecuencia | Contexto de uso |
|----------|-----------|-----------------|
| **Python** | Muy alta — presente en 10+ repos | Lenguaje principal. Automatización, ETL, scraping, herramientas internas, procesamiento de datos, GUI |
| **SQL / PLpgSQL** | Alta — presente en 4+ repos | Consultas avanzadas, transformaciones, esquemas de clasificación, cruces contables en PostgreSQL |
| **TSQL** | Media | Consultas en SQL Server |
| **JavaScript** | Media — 1 proyecto dedicado | Aplicación de traducción (TranslatorBook) |
| **Shell / Batch** | Baja | Scripts auxiliares de despliegue y automatización |

### Frameworks, librerías y herramientas

| Categoría | Herramientas |
|-----------|-------------|
| **Automatización / RPA** | Selenium, WebDriver Manager, Robocorp (Playwright), UiPath (repos REF_*, Ui-PRD-FINA, RPA-ProdFinancieros) |
| **Datos y ETL** | pandas, openpyxl, numpy, SQLAlchemy, psycopg2 |
| **Bases de datos** | PostgreSQL, SQL Server |
| **Web scraping** | Selenium, Playwright (Robocorp), requests |
| **GUI** | tkinter |
| **Distribución** | PyInstaller (generación de portables .exe) |
| **Versionado** | Git, GitHub |
| **Otros** | Docker (referenciado), Excel COM automation, Google Sheets API, CSV/TXT/PDF processing |

---

## 2. Proyectos Destacados

### ExtractorSII-F29
- **Descripción**: Bot RPA en Python que automatiza la extracción de datos del Formulario 29 (F29) desde el portal del SII (Servicio de Impuestos Internos de Chile) para múltiples contribuyentes.
- **Tecnologías**: Python, Selenium, openpyxl, tkinter (GUI)
- **Características**: Login automatizado, extracción de códigos tributarios, manejo de estados, reanudación automática, interfaz gráfica, generación de portable .exe
- **README**: Excelente — documentación completa con estructura, configuración, estados, instrucciones de uso y notas de seguridad
- **Última actividad**: Marzo 2026

### Prod_ContableBECH
- **Descripción**: Procesamiento masivo de data de producción para generar contabilidad automática. Múltiples módulos ETL, comparadores CTB-SUB, orquestación de procesos.
- **Tecnologías**: Python, PLpgSQL, TSQL, Jupyter Notebook, Shell
- **Características**: Orquestador de procesos, búsqueda por evento, comparador contable, procesamiento de subsidiarios, facturación
- **README**: Sin README (proyecto operativo complejo)
- **Última actividad**: Marzo 2026 (muy activo)

### Proyecto_piloto_contable
- **Descripción**: Automatización de validaciones contables y consolidación diaria de subsidiarios. Pipeline ETL completo con orquestación, reglas de negocio y cuadraturas.
- **Tecnologías**: Python (pandas, openpyxl, SQLAlchemy), PostgreSQL, Excel COM
- **Características**: Flujo maestro de 7 pasos (archivado → preparación → inserción → validación → TXP → cuadratura → consolidación), flags de ejecución, reglas de clasificación contra PostgreSQL
- **README**: Muy bueno — documenta flujo completo, requisitos, ejecución y reglas especiales
- **Última actividad**: Febrero 2026

### Proyecto_certificacion_contable
- **Descripción**: Manejo de data contable y automatización de validaciones para proceso de certificación contable.
- **Tecnologías**: Python, PLpgSQL
- **Características**: Proceso de subsidiarios, herramientas de proyecto auxiliares
- **Última actividad**: Octubre 2025

### Robocorp_Auto_SII-F29_Scrap
- **Descripción**: Scraping de información tributaria desde SII.cl con extracción de datos del F29 y almacenamiento en Google Sheets/Drive.
- **Tecnologías**: Python, Robocorp (Playwright), Google APIs
- **Características**: Framework Robocorp, integración con Google Sheets, automatización web avanzada
- **Última actividad**: Agosto 2025

### TranslatorBook
- **Descripción**: Aplicación de traducción de documentos.
- **Tecnologías**: JavaScript, Python, CSS, HTML
- **Características**: Descarga de idiomas, procesamiento de documentos, interfaz web
- **Última actividad**: Mayo 2025

### Myl2D
- **Descripción**: Juego de cartas 2D en Python con arquitectura modular.
- **Tecnologías**: Python
- **Características**: Motor de juego, sistema de mazos, gestión de sesiones, UI components, scraping de datos de cartas
- **Última actividad**: Mayo 2025

### Repos RPA / UiPath (privados, sin código visible vía API)
- **RPA-ProdFinancieros**: Automatización de productos financieros
- **REF_Carga_Cartas_SERNAC**: Automatización de carga de cartas SERNAC
- **REF_Respaldos_Casilla_Seguros**: Respaldos automatizados de casilla de seguros
- **Ui-PRD-FINA**: Proyecto UiPath en producción (financiero)
- **ATOM-NOTES**: Notas de procesos RPA

### Aprendizaje-Python
- **Descripción**: Fork del roadmap de retos de programación de MoureDev. Ejercicios resueltos en Python cubriendo 50+ temas desde sintaxis básica hasta principios SOLID.
- **Tecnologías**: Python (principal), múltiples lenguajes como referencia
- **Valor**: Demuestra estudio formal de fundamentos, patrones de diseño y principios SOLID

---

## 3. Patrones de Trabajo

### Tipo de proyectos

| Categoría | Proporción | Ejemplos |
|-----------|-----------|----------|
| **Automatización / RPA** | ~40% | ExtractorSII-F29, Robocorp_Auto_SII, RPA-ProdFinancieros, REF_*, Ui-PRD-FINA |
| **ETL y procesamiento de datos** | ~30% | Prod_ContableBECH, Proyecto_piloto_contable, Proyecto_certificacion_contable |
| **Herramientas internas** | ~15% | TranslatorBook, DEVELOP, ATOM-NOTES |
| **Proyectos personales** | ~10% | Myl2D (juego de cartas), Aprendizaje-Python |
| **Frontend / Web** | ~5% | TranslatorBook (JS/HTML/CSS) |

### Patrones observados

- **Orientación a producción**: Los proyectos más grandes tienen orquestadores, manejo de errores, reanudación automática y separación QA/Producción
- **Estructura modular**: Separación clara de responsabilidades (APP/, Entrada/, Salida/, Tools/)
- **Enfoque operacional**: Validaciones de negocio, cuadraturas, trazabilidad, control de estados
- **Automatización integral**: No solo scripts aislados — pipelines completos con múltiples etapas
- **Datos contables/financieros**: Dominio fuerte en el sector financiero y contable chileno (SII, subsidiarios, certificación contable, conciliaciones)
- **Generación de portables**: Creación de ejecutables para distribución a usuarios finales

---

## 4. Contribuciones y Actividad

### Repositorios más recientes y activos

| Repositorio | Última actividad | Estado |
|-------------|-----------------|--------|
| ExtractorSII-F29 | 20 Mar 2026 | Activo — commit inicial reciente |
| Prod_ContableBECH | 16 Mar 2026 | Muy activo — commits semanales, mejoras continuas |
| Proyecto_piloto_contable | 18 Feb 2026 | Activo — orquestador y reglas de negocio |
| Aprendizaje-Python | Nov 2025 | Completado — 50+ ejercicios |
| Proyecto_certificacion_contable | Oct 2025 | Estable |
| Robocorp_Auto_SII-F29_Scrap | Ago 2025 | Estable |
| TranslatorBook | May 2025 | Estable |
| Myl2D | May 2025 | Estable |

### Ritmo de trabajo
- Actividad constante entre 2024 y 2026
- Commits frecuentes en proyectos operativos (Prod_ContableBECH tiene actividad semanal)
- Mensajes de commit descriptivos y en español, orientados a funcionalidad
- Uso de ramas y estructura de proyecto profesional

---

## 5. Fortalezas Técnicas Inferidas

### Fortalezas confirmadas por el código

- **Automatización de procesos complejos**: No scripts simples — pipelines completos con múltiples etapas, manejo de errores, reanudación y estados
- **ETL y transformación de datos**: Dominio profundo de pandas, openpyxl, SQL. Pipelines con múltiples fuentes, normalización y reglas de negocio
- **Dominio contable/financiero**: Conocimiento del dominio de negocio (SII, F29, subsidiarios, certificación, cuadraturas, conciliaciones). Esto es diferencial
- **Web scraping avanzado**: Selenium + manejo de modales, login, navegación compleja en portales gubernamentales
- **SQL avanzado**: PLpgSQL, TSQL, esquemas de clasificación, cruces entre fuentes
- **Diseño de herramientas internas**: GUIs con tkinter, generación de portables, configuración via JSON
- **Pensamiento estructurado**: Proyectos con orquestadores, separación de etapas, control de flujo, logging
- **Robustez operativa**: Reanudación automática, manejo de excepciones, control de estados, evidencia de ejecución
- **Fundamentos sólidos**: 50+ ejercicios de lógica + principios SOLID demostrados en Aprendizaje-Python

### Capacidades emergentes

- **Arquitectura de soluciones**: Los proyectos más recientes muestran patrones de orquestación y modularidad creciente
- **Múltiples frameworks RPA**: Experiencia con UiPath, Robocorp (Playwright) y Selenium — no atado a una sola herramienta
- **Integración de ecosistemas**: Google Sheets, PostgreSQL, Excel COM, CSV, APIs — capacidad de conectar sistemas heterogéneos
- **Desarrollo de productos**: Myl2D muestra capacidad de diseñar arquitectura de software más allá de scripts operativos (motor, sesiones, UI, datos)

### Áreas de diferenciación

1. **Combinación técnica + dominio de negocio** — Entiende tanto el código como las reglas contables/tributarias
2. **Automatización con criterio operacional** — No solo "hacer que funcione", sino que sea robusto, reanudable y auditable
3. **Versatilidad en herramientas** — Python, SQL, UiPath, Robocorp, Selenium, JavaScript — elige la herramienta correcta para el problema
4. **Orientación a producción** — Proyectos con separación QA/Prod, configuración externalizada, manejo de errores real

---

## Resumen Ejecutivo

José Nicolás Candia es un **desarrollador de automatización y soluciones tecnológicas** con foco en el sector financiero-contable chileno. Su perfil combina:

- **Profundidad técnica** en Python, SQL y herramientas RPA
- **Conocimiento de dominio** en procesos contables, tributarios y operacionales
- **Diseño de soluciones integrales** que van desde la extracción de datos hasta la consolidación y validación con reglas de negocio
- **Madurez operativa** demostrada en proyectos con orquestación, trazabilidad, manejo de errores y reanudación automática

Su evolución reciente muestra una trayectoria hacia soluciones más complejas, modulares y orientadas a arquitectura — consistente con una proyección hacia liderazgo técnico y arquitectura de automatización.
