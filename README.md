# ScrollApp

Es una aplicacion que simula un escroll "infito" para un listado de productos.
Para tener en cuenta, los datos que se muestran en pantalla estan generados por un generador de Json, no tiene relacion imagen - producto - descripcion.


## Instalacion

Paso previo: 
Para correr el proyecto, se necesita tener el server con la informacion mockeada, este server hay que levantarlo en "localhost:3000".

Para correr el server:
```bash
  cd InfiniteScroll
  cd jsonserver-items
  npm install
  npm run server
```
*El server por defecto levanta en http://localhost:3000/

*El server cuenta con un aproximado de 200 elementos.

Para correr la applicacion:
```bash
  cd InfiniteScroll
  cd infinite-scroll
  npm install
  npm run dev
```
*La aplicacion por defecto levanta en http://localhost:5173/

*Si el server no esta corriendo puede que la applicacion muestre un 404.

## Test

Para correr los test:
```bash
  npm run test
```
