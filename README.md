# movie-app

Esta aplicacion tiene como funcionalidad obtener una cantidad de peliculas de the movie DB Api, y poder mostrarlas en la pantalla principal, utiliza los hooks clasisos de react y algunas librerias adicionales para el routing,
ademas entre los componentes se tiene una pantalla donde se visualiza el detalle de una pelicula y su descripcion.

## Instalación

Primero descargamos las dependecias con el comando:
- npm i

## Uso
Esta app esta creada con expo, podemos ejecutar en nuestro telefono o en un simulador. Para ello ejecutamos el comando:
- npx expo start

## Estructura del Proyecto

La estrutura del proyecto esta centralizada en la carpeta src, esta carpeta contiene cada una de las carpetas que van a ser utilizadas de manera conjunta para su correcta ejecucion, se listan las siguientes carpetas:

- components -> componentes especificos para su reutilizacion cuando se requiera.
- config -> aqui tenemos la configuracion de credenciales y url para consultar a nuestra API
- routes -> Estaremos trabajando con dos pantallas, una Home y la otra MovieDetail
- types -> Aqui tenemos las interfaces para mapear los datos que nos llegan de la API
- utils -> Aqui tenemos la funcion para obtener nuestras peliculas.
- views -> Aqui tenemos nuestros componentes que se visualizaran como pantallas completas.


## Autor

Jhon Roy Oquendo Vizcarra

## Notas

Ya que en el .gitignore esta la carpeta config debemos hacer lo siguiente: 
Para poder ejecutar el proyecto, dentro de la carpeta src crear una carpeta llamada config/config.ts y agregar el siguiente codigo:

```
export default {
    API_KEY: '8f6ac44cf1e5987a234187eeaf0311d5',
    BASE_URL: 'https://api.themoviedb.org/3/movie/popular',
    BASE_URL_IMG: 'https://image.tmdb.org/t/p/original'
};
```