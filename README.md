# OmniShop

Prueba tecnica.

## Instalacion

Descargar el proyecto y correr el siguiente comando:

```bash
  yarn install
```

## Run project

Despues de finalizar la instalacion correr el siguiente comando:

```bash
  yarn dev
```

## Notas

- En los modulos ingreso y login solo se validaron los errores mostrados en el flujo del diseño, ya que no contaba con los copies de los otros posibles errores de los inputs y no queria manipular el diseño con errores no contemplados en este, todo esto teniendo en cuenta que se podian hacer diferentes validacines como por ejemplo el correo o la contraseña.
- Se almaceno la contraseña en el localStorage para poder compararla con la ingresada en el login y asi poder simular el error de contraseña incorrecta, teniendo en cuenta que esto es una mala practica ya que este es un dato sencible por lo tanto no deberia estar almacenado en ese lugar.
- Para entrar a la ruta privada "/product" debe estar logueado previamente, ya que el **Guard** valida si existe un token almacenado en el local storage.
- Para simular el error de contraseña incorrecta se debe crear un usuario con la contraseña "123123"
- En los datos del producto en la pagina /product se redondearon los 2 bordes superiores, ya que en el diseño se muestra redondeado solo el borde superior izquierdo, pero en los estilos se muestra como si se deseara tener ambos bordes superiores redondeados.
