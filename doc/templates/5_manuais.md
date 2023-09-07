## Manual técnico

### Instalación:

La aplicación se encuentra acutalmente desplegada mediante un host gratuito de _000WebHost_ desde el que se puede acceder a través de [aquí](https://osirisspellingsoftware.000webhostapp.com/src/index.html).

En caso de que el servidor no se encuentre disponible, deberá seguir las siguientes indicaciones para desplegar la aplicación localmente. 

##### _Requerimientos técnicos:_

_Hardware:_

- 250 Mb de espacio en el disco duro.
- Procesador Pentium o superior.
- Compatible con Windows, macOS y Linux.

_Software:_

- Docker Compose (para Linux). _Recomendamos v2.20.0 o superior_.
- XAMPP (para Windows o macOS). _Recomendamos v8.2.0 o superior_.

##### _Instalación:_

__*Linux:*__

1. Acceder a la carpeta del proyecto (donde se contiene el _docker-compose.yml_ y _Dockerfile_) y ejecutar el siguiente comando:

```bash
docker-compose up -d
```
2. Acceder a la ruta de phpmyadmin (http://localhost:8000/).
```bash
Servidor: 
Usuario: root
Contraseña: root
```
3. Importar script de /OsirisSpellingSoftware/db/osiris.sql dentro de una base de datos de nombre __"osiris"__.
4. Acceder a la página a través del servidor (http://localhost:8080/src/index.html)

__*Windows y macOS:*__

1. Arrancar Apache y MySQL con XAMPP.
2. Acceder a phpmyadmin mediante el administrador.
3. Importar script de /OsirisSpellingSoftware/db/osiris.sql dentro de una base de datos de nombre __"osiris"__.
4. Introducir en contenido de la carpeta /OsirisSpellingSoftware en la raiz del servidor apache.
5. Acceder a través del navegador (__*ruta raiz*__/src/index.html)

## Mantenimiennto del sistema

Los errores en el sistema serán corregidos de inmediato en la versión desplegada y en el repositorio de forma inmediata y a medida que se vayan encontrando.

No se esperan nuevas funcionalidades o actualizaciones.

Asegurate de contar con la última versión.


## Gestión de incidencias

La gestión de incidencias, tanto de sistema como de software serán notificadas a través de cualquiera de los canales de comunicación:

- Github: https://github.com/csrgrr
- Correo: guerramendezcesar@gmail.com

## Política de privacidad

La aplicación no guarda información personal de ningún usuario. Está desarrollado de acuerdo a las leyes de protección de datos de carácter persoal:

- [Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDPGDD)](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)
- [General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)

## Manual de usuario

La aplicación es sencilla y no requiere formación de usuarios.

En caso de duda, se puede revisar la presentación del proyecto en el [II Congreso Iberoamericano de Jovenes Investigadores en Egiptología (2023)](https://youtu.be/Fc_JeVuyeCw), donde se hace un repaso a las funcionalidades de la aplicación.

#### FAQ

- ¿La aplicación guarda mis datos?
_*No.*_
- ¿Cual es el rango temporal que cubre la aplicación?
_*Unicamente cubre aquellos datos contenidos en los Coffin Texts o Textos de los Ataudes*_, comprendidos principalemente a finales del I Periodo Intermedio hasta finales del Reino Medio.
- ¿Puedo utilizar la aplicación para comprobar mis propios datos?
_*Por desgracia, la aplicación está construida para ajustarse a las necesidades del corpus escogido, por lo que no sería compatible con datos que no se corresponadan a los establecidos en la base de datos.*_
- ¿Hay planes de actualización de la aplicación?
_*No, las actualizaciones se limitarán a la reparación de errores, pero es probable que esta aplicación se use como modelo para realizar una que permita usar datos de corpus ajenos.*_

