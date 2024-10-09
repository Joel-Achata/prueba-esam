# Prueba Técnica ESAM - Asistente de TI

Este proyecto es una prueba técnica para la evaluación del puesto de Asistente de TI en ESAM, desarrollada utilizando **Vue 3** para la creación de un componente reutilizable que representa un botón.

## Descripción del Proyecto

El proyecto consiste en la creación de un Web Component reutilizable que acepta dos propiedades: 
- **Título**: El texto que se mostrará dentro del botón.
- **Imagen**: Un ícono o imagen que aparecerá en el centro del botón.

El componente es totalmente reutilizable en cualquier parte de la página y mantiene el estilo visual definido en los archivos CSS proporcionados.

### Estructura del Proyecto

El proyecto contiene los siguientes archivos y carpetas principales:

- `index.html`: Página principal que muestra los botones utilizando el componente `Boton`.
- `js/app.js`: Archivo JavaScript donde se define el componente `Boton` en Vue 3.
- `css/`: Carpeta que contiene los archivos CSS para los estilos.
- `img/`: Carpeta que contiene las imágenes utilizadas en los botones.

### Requisitos

Para ejecutar el proyecto localmente, necesitas tener:
- Un navegador moderno (Chrome, Firefox, Edge, etc.).
- Conexión a internet para cargar Vue desde un CDN.

### Instalación y Uso

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/prueba-tecnica-ESAM.git
    ```

2. Abre el archivo `index.html` en tu navegador para ver el resultado de la prueba.

### Estructura del Componente

El componente `Boton` está ubicado en el archivo `app.js` y tiene la siguiente estructura:

```javascript
const Boton = {
    props: ['title', 'image'],
    template: `
        <div class="v-col">
            <button type="button"
                class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--variant-elevated button-style"
                style="height: 330px; width: 330px;">
                <span class="v-btn__overlay"></span>
                <span class="v-btn__underlay"></span>
                <span class="v-btn__content" data-no-activator>
                    <img :src="image" alt="Imagen"
                         style="font-size: 200px; height: 200px; width: 200px; object-fit: cover;" />
                    <h3 class="text-position">{{ title }}</h3>
                </span>
            </button>
        </div>
    `
};
Cómo Probar el Componente
En el archivo index.html, puedes reutilizar el componente Boton para diferentes secciones de la página pasando las propiedades title e image como en el siguiente ejemplo:
<div id="app">
    <Boton title="Perfil Personal" image="img/perfil_personal.png"></Boton>
    <Boton title="Registro de Programas" image="img/registro_programas.png"></Boton>
</div>
Autor
Joel Elias Achata Lapaca
