#  Simpsons App - React + Vite

##  Descripción
Esta aplicación web fue desarrollada con React y Vite como parte de un trabajo práctico.
Permite visualizar una lista de personajes de Los Simpsons obtenidos desde una API pública.
Además, incluye un buscador que permite filtrar los personajes por nombre.

## Objetivos del proyecto
* Practicar el uso de **componentes funcionales*** Utilizar los hooks:
  * useState
  * useEffect
* Consumir datos desde una **API pública**
* Renderizar información de forma dinámica
* Implementar una funcionalidad de búsqueda

## Tecnologías utilizadas
* React
* Vite
* TypeScript
* CSS básico

## API utilizada
Se utilizó la siguiente API pública:
https://api.sampleapis.com/simpsons/characters

##  Funcionamiento
* Al cargar la aplicación, se realiza una petición a la API utilizando `useEffect`.
* Los datos obtenidos se almacenan en un estado (`useState`).
* Se filtran los personajes para mostrar solo algunos válidos.
* Se renderiza una lista con:
  * Nombre del personaje
  * Género (si está disponible)
  * Ocupación (si está disponible)
  * Imagen (fija, para evitar errores de la API)
* El usuario puede buscar personajes mediante un input.

## Funcionalidad de búsqueda
El buscador permite filtrar los personajes en tiempo real según lo que el usuario escribe.

## Cómo ejecutar el proyecto
1. Clonar el repositorio o descargar el proyecto
2. Instalar dependencias:
 npm install
3. Ejecutar el servidor:
npm run dev
4. Abrir en el navegador:
http://localhost:5173/

## Notas
* Algunas imágenes de la API no funcionan correctamente, por lo que se utiliza una imagen fija para mantener la consistencia visual.
* Se filtraron personajes para evitar datos incorrectos o irreales.

## Autora

Proyecto realizado por Juliana Pontacq estudiante de Desarrollo Web Full Stack.
