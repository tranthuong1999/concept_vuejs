
// main.js
import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import FancyButton from "../src/components/FancyButton.vue";
// @ts-ignore
import SubmitButton from "../src/components/SubmitButton.vue";
// @ts-ignore
import BaseLayout from "../src/components/BaseLayout.vue";
// @ts-ignore
import WatchPage from "../src/components/WatchPage.vue";
import Plugin from "../plugin.js";
import router from "./router";
import { createVuetify } from 'vuetify'; // Import createVuetify
import 'vuetify/styles'; // Import global Vuetify styles
import * as components from 'vuetify/components'; // Import Vuetify components
import * as directives from 'vuetify/directives'; // Import Vuetify directives
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// @ts-ignore
import CustomIcon from '../src/components/CustomIcon.vue';


// Add icons to the library
library.add(faCoffee, faHome);

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(Plugin);
app.use(router);
app.use(vuetify); // Use Vuetify instance

app.component('FancyButton', FancyButton);
app.component('SubmitButton', SubmitButton);
app.component('BaseLayout', BaseLayout);
app.component('WatchPage', WatchPage);
app.component('WatchPage', WatchPage);
app.component('CustomIcon', CustomIcon);


app.mount('#app');
