# Agenda

## Requisitos

- Crear una clase `Usuario` que contenga lo siguiente
  - Propiedades
    - id
    - nombres
    - apellidos
    - telefono
  - Metodos:
    - traerNombres
    - traerApellidos
    - traerTelefono
- Funcion de `agregar`
  - Al presionar al boton de `Agregar` se debera crear un nuevo objeto de `Usuario`
  - Agregar al objecto el id generado
  - Verificar que ningun campo este vacio
  - Actualizar al arreglo de `agenda`
- Funcion `eliminar`
  - Buscar y eliminar el elemento el cual se le presiono el icono de eliminar
- Funcion `editar`
  - Rellenar los inputs con el elemento presionado
- Funcion de `actualizar`
  - Presionar el boton de `Actulizar` y actualizar el objeto del arreglo de `agenda`
  - Verificar que ningun campo este vacio
  - Actualizar tabla con los nuevos datos

Las siguientes funciones les serviran como auxiliares:

- `traerDatosTr`
  - Al presionar el icono de `editar/eliminar` esta se traera los datos de la fila
- `traerDatosInputs`
  - Traera los datos que actualmente estan en los inputs
- `limpiarInputs`
  - Limipiara todo el formulario
- `rellenarInputs`
  - Llenara los inputs con la informacion proporcionada
- `popularTabla`
  - Llenara la tabla con el arreglos que se le proporciona, recordar que cada elemento del arreglo debe ser un `User`
- `generarId`
  - Genera un id aleatorio
