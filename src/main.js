// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto';
import BootstrapVue from 'bootstrap-vue';
import './assets/styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faTrophy,
    faRss,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
    faVuejs,
    faJava,
} from '@fortawesome/free-brands-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(
    faGithub,
    faTwitter,
    faFacebook,
    faLinkedin,
    faTrophy,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
    faSass,
    faLess,
    faWordpress,
    faGulp,
    faGrunt,
    faNpm,
    faRss,
    faCheck,
    faVuejs,
    faJava,
);

export default function (Vue, { head }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
  });
}
