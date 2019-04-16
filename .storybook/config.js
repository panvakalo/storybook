import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuetify from 'vuetify'
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css'
import '../src/assets/fonts/helvetica.scss'
import '../src/assets/styles/utils.scss'
import '../src/assets/styles/overwrite.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(Vuex)

// Import your custom components.
import MaterialColorSelector from '../src/components/MaterialColorSelector';

// Register custom components.
Vue.component('material-color-selector', MaterialColorSelector);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
