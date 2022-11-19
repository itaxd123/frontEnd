# Store_FrontEnd

_Proyecto desarrollado en PHP como backend y Javascript para consumir las apis creadas, se utilizamos estos lenguajes ya que son sencillo de implementar y desplegar_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_Cualquier servidor de Apache_

```
Laragon, XAMPP, entre otros.
```

### Instalación 🔧

_Descargar este proyecto, ya que contiene el Backend y https://github.com/itaxd123/frontEnd (Que vendria a ser el FrontEnd)_

_Al descargar los 2 juntos puedes levantar el proyecto, cabe mencionar que la BD es online_

## Funcionalidad 

### GET Obtener todos los Productos

Parametros: 
```
* URL: italogchumbile.tk
* controlador: producto
* accion: getAll
```
Demostación: 

![image](https://user-images.githubusercontent.com/29291465/201018059-f5866ca6-061d-4c1f-a2bc-14a6633d6128.png)

Responde: 

![image](https://user-images.githubusercontent.com/29291465/201018521-c20967d7-ff46-46dc-8222-d7795d4cfe58.png)


###  GET Buscar productos

Parametros:
```
* URL: italogchumbile.tk
* controlador: producto
* accion: findProduct
* text: 'string'
```
_* text, colocamos las siglas de cualquier nombre de producto_

Demostación: 

![image](https://user-images.githubusercontent.com/29291465/201018373-e21cccfe-3259-4529-8189-74e0b91717ed.png)

Responde:

![image](https://user-images.githubusercontent.com/29291465/201018442-1e678134-f077-48fc-b1b8-187f2792da6e.png)

Categoria

### GET Obtener Categorias

Parametros
```
* URL: italogchumbile.tk
* controlador: categoria
* accion: getAll
```
Demostración:

![image](https://user-images.githubusercontent.com/29291465/201018916-d94384b4-83c0-402c-a565-59baa57c0cad.png)

Respuesta:

![image](https://user-images.githubusercontent.com/29291465/201018982-eb261686-5f3b-43f0-aff8-13984a753b60.png)


### GET Obtener Producto por Categoria

Parametros
```
* URL: italogchumbile.tk
* controlador: categoria
* accion: getProductforCategory
* id: number
```

_*id, se coloca el id de la categoria_

Demostración:

![image](https://user-images.githubusercontent.com/29291465/201019282-f1094d59-c5a7-4587-856f-fd783378e9da.png)

Respuesta:

![image](https://user-images.githubusercontent.com/29291465/201019374-f9c6ac16-4702-48c4-a198-283fc0818463.png)


## Despliegue 📦

_En esta ocacion se ha levantado el proyecto en italogchumbile.tk_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [PHP](https://www.php.net/) - El lenguaje mas usado
* [Javascript](https://developer.mozilla.org/) - Para consumir Apis

## Autores ✒️

* **Italo Garcia Chumbile** - *Todo* - [itaxd123 ](https://github.com/itaxd123/)


