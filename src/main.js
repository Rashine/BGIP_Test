import { createApp } from 'vue'
import App from './App.vue'
createApp(App).config.devtools = true;
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { SetupCalendar,DatePicker } from 'v-calendar';
import "v-calendar/dist/style.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone)
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";

import Loading from "@/components/LoadingComponent.vue";

createApp(App).use(store).use(router).use(SetupCalendar, {}).use(SnackbarService).component('DatePicker', DatePicker).component("vue3-snackbar", Vue3Snackbar).component('font-awesome-icon', FontAwesomeIcon).component('Loading', Loading).mount('#app')

