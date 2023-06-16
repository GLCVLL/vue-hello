console.log('js ok');

console.log('vue ok', Vue);


// estrapolo il metodo createApp
const {createApp} = Vue;

// inizializzo l'app Vue
const app = createApp({
    data() {
        return {
            title: 'Ciao Vue è un piacere conoscerti!',
            imageUrl: 'img/vue-image.webp',
            logo: 'Logo Vue'
        }
    }
});

// la monto nell'elemento HTML radice
app.mount('#root');