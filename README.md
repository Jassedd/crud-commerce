# Documentación de la API de Comercio

## Introducción
Bienvenido a la documentación de la API de Comercio. Esta API proporciona acceso a diversas funcionalidades para administrar productos, categorías y comentarios en una plataforma de comercio electrónico.

## Ejecución de la API
Antes de comenzar a utilizar la API, asegúrate de que la aplicación esté en ejecución. Para hacerlo, ejecuta el siguiente comando en la raíz de tu proyecto:

- **npm run dev**

Una vez que la aplicación esté en ejecución, puedes probar la funcionalidad de la API utilizando herramientas como Postman o Thunder Client. A continuación, te proporcionamos el enlace base que debes utilizar en estas herramientas:

- **Enlace Base:** http://localhost:9000/

## Usuarios
Esta sección describe cómo trabajar con usuarios en la API.

## Obtener Todos los Usuarios
- **Endpoint:** `/users`
- **Método:** GET
- **Respuesta Exitosa:**
  ```json
  [
    {
      "id": 1,
      "first_name": "Nombre1",
      "last_name": "Apellido1",
      "email": "correo1@ejemplo.com"
    },
    {
      "id": 2,
      "first_name": "Nombre2",
      "last_name": "Apellido2",
      "email": "correo2@ejemplo.com"
    }
  ]


## Obtener un Usuario por su ID
- **Endpoint:** /users/:id
- **Método:** GET
- **Respuesta Exitosa:**
  ```json
  {
  "id": 1,
  "first_name": "Nombre1",
  "last_name": "Apellido1",
  "email": "correo1@ejemplo.com"
  }

## Crear un Nuevo Usuario
- **Endpoint:** /users
- **Método:** POST
- **Cuerpo de la Solicitud:**
  ```json
  {
  "first_name": "NuevoNombre",
  "last_name": "NuevoApellido",
  "email": "nuevo@ejemplo.com",
  "password": "contraseña"
}

- **Respuesta Exitosa:**
  ```json
  {
  "message": "Usuario registrado exitosamente."
  }


## Actualizar un Usuario por su ID
- **Endpoint:** /users/:id
- **Método:** PUT
- **Cuerpo de la Solicitud:**
  ```json
  {
  "first_name": "NuevoNombre",
  "last_name": "NuevoApellido"
  }

- **Respuesta Exitosa:**
  ```json
  {
  "id": 1,
  "first_name": "NuevoNombre",
  "last_name": "NuevoApellido",
  "email": "correo1@ejemplo.com"
  }

## Eliminar un Usuario por su ID (Requiere Autenticación como Administrador)
- **Endpoint:** /users/:id
- **Método:** DELETE
- **Respuesta Exitosa:**
  ```json
  {
  "message": "Usuario eliminado con éxito."
  }

## Categorías
Esta sección describe cómo trabajar con categorías de productos en la API.

# Obtener Todas las Categorías
- **Endpoint:** /categories
- **Método:** GET
- **Respuesta Exitosa:**
  ```json
  [
  {
    "id": 1,
    "title": "Nuevo"
  },
  {
    "id": 2,
    "title": "Usado"
  }
  ]

## Crear una Nueva Categoría (Requiere Autenticación como Administrador)
- **Endpoint:** /categories
- **Método:** POST
- **Cuerpo de la Solicitud:**
  ```json
  {
  "title": "Nueva Categoría"
  }
- **Respuesta Exitosa:**
  ```json
  {
  "id": 3,
  "title": "Nueva Categoría"
  }

## Productos
Esta sección describe cómo trabajar con productos en la API.

# Obtener Todos los Productos
- **Endpoint:** /products
- **Método:** GET
- **Respuesta Exitosa:**
  ```json
  [
  {
    "id": 1,
    "title": "Teléfono",
    "category_id": 1
  },
  {
    "id": 2,
    "title": "Camiseta",
    "category_id": 2
  }
  ]

## Crear un Nuevo Producto (Requiere Autenticación como Administrador)
- **Endpoint:** /products
- **Método:** POST
- **Cuerpo de la Solicitud:**
  ```json
  {
  "title": "Nuevo Producto",
  "category_id": 1
  }
- **Respuesta Exitosa:**
  ```json
  {
  "id": 3,
  "title": "Nuevo Producto",
  "category_id": 1
  }


## Comentarios
Esta sección describe cómo trabajar con comentarios en la API.

# Obtener Comentarios de un Producto Específico
- **Endpoint:** /comments/:product_id
- **Método:** GET
- **Respuesta Exitosa:**
 ```json
 [
  {
    "id": 1,
    "user_name": "Usuario1",
    "comment_commerce": "Excelente producto.",
    "product_id": 1
  },
  {
    "id": 2,
    "user_name": "Usuario2",
    "comment_commerce": "No estoy seguro.",
    "product_id": 1
  }
 ]
