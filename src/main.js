import { createApp } from 'vue'
import App from './App.vue';
import FancyButton from "../src/components/FancyButton.vue"
import SubmitButton from "../src/components/SubmitButton.vue"
import BaseLayout from "../src/components/BaseLayout.vue"
// import ChildBind from "../src/components/ChildBind.vue"


const app = createApp(App);

app.component('FancyButton', FancyButton);
app.component('SubmitButton', SubmitButton);
app.component('BaseLayout', BaseLayout);
// app.component('ChildBind', ChildBind);



app.mount('#app');
