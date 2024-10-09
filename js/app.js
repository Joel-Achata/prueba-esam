const Boton = {
    props: ['title', 'image'],  // title para el texto e image para la URL de la imagen
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

const app = Vue.createApp({
    components: {
        Boton
    }
});

app.mount('#app');
