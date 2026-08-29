// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n' 

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'; // For the contact & PDF icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fontsource-variable/inter'
import '@fontsource-variable/fira-code'
import './assets/main.css'
import { useTheme } from './composables/useTheme'

library.add(faGithub, faLinkedin, faInstagram, faEnvelope, faFilePdf);

import 'flag-icons/css/flag-icons.min.css'

// Initialize theme preference
useTheme().initTheme()

const app = createApp(App)
// Register the component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
app.use(i18n)

app.mount('#app')