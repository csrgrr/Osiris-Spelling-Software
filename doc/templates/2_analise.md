# Análisis: Requerimientos del sistema

Este documento describe los requerimentos para la aplicación _Osiris Spelling Software_, especificando que funcionalidades ofrece y de que manera.

## 1. Descripción general

Osiris Spelling Software es una herramienta de investigación en forma de aplicación web que ofrece, de manera simple y comprensible, la posibilidad de obtener resultados a partir de una base de datos mediante búsquedas y filtrado, obteniendo también estadísticas de los mismos resultados. El objetivo es que el investigador se haga una idea de la distribución temporal,geográfica y contextual de las grafías de Osiris en los Textos de los Ataúdes del Reino Antiguo Egipcio.

## 2. Funcionalidades


### Back-end

- Gestión de consultas en BD a partir de PHP.
	+ Mostrar la totalidad de las referencias (grafías) (gestionando la base de datos relacional para que una referencia cuente con toda la información necesaria).
	+ Obtener referencias a partir de un id.
	+ Obtener referencias a partir del código del localización de la grafía (por ejemplo, CT V 12 a).
	+ Obtener referencias a través de filtrado de datos.
	+ Obtener los valores de la tabla Spell, Location y Document a partir de su id (esto permitirá consultar la información detallada de la tabla a partir de una referencia concreta).
	+ Mostrar resultados a partir de un api rest.

### Front-end

- Gestión de consultas a partir de interfaz web.
	+ Obtener la totalidad de las grafías.
	+ Realizar búsquedas directas a partir del código de localización de la grafía.
	+ Realizar búsquedas a través del filtrado de datos mediante un formulario.

- Visualización de datos.
	+ Visualizar las grafías con su información.
	+ Obtener información detallada de la localización de la grafía seleccionada.
	+ Obtener información detallada del documento de la grafía seleccionada.
	+ Obtener información detallada de la naturaleza de la grafía de la referencia seleccionada.
	+ Mostrar gráfica relativa a los datos obtenidos según la cantidad de cada grafía.
	+ Mostrar gráfica relativa a los datos obtenidos según la cantidad de coincidencias según zona geográfica.
	+ Mostrar gráfica relativa a los datos obtenidos según la cantidad de coincidencias según zona época.
	+ Mostrar gráfica relativa a los datos obtenidos según la cantidad de coincidencias según localización en documento.
	+ Mostrar gráfica relativa a los datos obtenidos según la cantidad de coincidencias según Spell (fórmula).
	+ Mostrar gráfica relativa a los datos obtenidos según si es una locución _wsir NN pn/tn_ o no.

- Información adicional.
	+ Acceder a instrucciones para el uso de la herramienta.
	+ Acceder a información relativa a la variación de grafías del nombre de Osiris.
	+ Acceder a información relativa a la creación y naturaleza del proyecto.
	+ Acceder a información relativa al contacto para consultas o detección de errores.
	+ Acceder a información relativa a aspectos legales.


 
## 3. Requerimentos no funcionales

Los usuarios no tendrán acceso a la base de datos (guardar, modificar y eliminar), solo se les permitirá acceder mediante consultas.



## 4. Tipos de usuarios

- Usuario estándar: tendrá acceso a las peticionenes de búsqueda y filtrado. 
- Usuario administrador: adicionalmente, tendrá acceso a las peticiones de creación, modificación y eliminación de registros en la base de datos.


## 5. Entorno operacional

### 5.1. Dominio

Actualmente no se plantéa la necesidad de un dominio concreto, aunque es posible que se aloje como parte del domidio de `[MORTEXVAR](https://www.mortexvar.com/).

### 5.2. Hardware

- Laptop Microsoft Surface Pro 9 y Toshiba Satiellite Pro para desenvolver la aplicación.


### 5.3. Software

- Visual Studio Code.
- XAMPP
- Docker
- JQUERY
- AJAX
- CHART.JS
- DataTables
- Bootstrap


## 6. Interfaces externos

- Interfaz de usuario:
	+ Página principal: vista de referencias listadas en una tabla, herramientas de búsqueda y filtrado.
	+ Grafías: listado de grafías y datos sobre las mismas.
	+ Información del proyecto.
	+ Contacto.
	+ Legal.

- Hardware (No).

- Software:
	+ API de acceso a datos de la BD en formato JSON.


## 7. Mejoras futuras

La aplicación podrá ampliarse con las siguientes funcionalidades:

- Sesión de administrador para modificar los datos de la BD sin necesidad de acceder directamente al gestor de la misma. 
- Guardar los resultados de una búsqueda para compararlos con los de la búsqueda actual.
- Descargar los resultados en formato de texto.
  
Estas mejoras serían del todo opcionales. Lo que se consideraría realmente útil para la investigación sería la elaboración de una aplicación idéntica que permitiese introducir datos personalizados de fuentes textuales diversas en lugar de basarse en un caso de estudio concreto y una base de datos estática.
