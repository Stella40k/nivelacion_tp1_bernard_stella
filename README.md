# nivelacion_tp1_bernard_stella
Implementación 2: Servidor Web con Node.js y Express
Descripción Técnica
Esta implementación traslada la lógica de la aplicación a una arquitectura de red local. Se utiliza Node.js como entorno de ejecución y Express.js como framework minimalista para la gestión de peticiones HTTP. El servidor actúa como un despachador de archivos estáticos, permitiendo que el navegador acceda al recurso a través del protocolo TCP/IP en lugar del sistema de archivos local (file://).

Especificaciones de la Estructura
servidor.js: Script de entrada del backend. Configura el middleware express.static para la entrega de activos.

index.html: Documento de estructura del DOM.

style.css: Hoja de estilos externa para la gestión de estados visuales.

package.json: Manifiesto del proyecto y registro de dependencias.

Procedimiento de Despliegue Local
Requisitos Previos
Motor de ejecución Node.js (versión LTS recomendada).

Gestor de paquetes npm (incluido con Node.js).

Instalación
Acceder mediante terminal al directorio raíz del proyecto:

Bash
cd ruta/hacia/tu/carpeta
Inicializar las dependencias del proyecto:

Bash
npm install express
Ejecución
Levantar el proceso del servidor mediante el siguiente comando:

Bash
node servidor.js
Acceso
Una vez confirmado el levantamiento del listener en la terminal, el servicio estará disponible en la interfaz de bucle de retorno (loopback) mediante la siguiente URL:
http://localhost:3000