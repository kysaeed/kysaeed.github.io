
import "core-js/stable";
import "regenerator-runtime/runtime";

if (!window.Symbol) {
    window.Symbol = require('core-js/modules/es.symbol');
}

if (!window.Promise) {
    window.Promise = require("core-js/modules/es.promise");
}


require('./bootstrap');



import Vue from 'vue';

// import 'vue-awesome/icons'; //all 

import 'vue-awesome/icons/bold';
import 'vue-awesome/icons/smile';
import 'vue-awesome/icons/link';
import 'vue-awesome/icons/table';
import 'vue-awesome/icons/list';
import 'vue-awesome/icons/list-ol';
import 'vue-awesome/icons/image';
import 'vue-awesome/icons/undo';
import 'vue-awesome/icons/redo';

import 'vue-awesome/icons/trash';

import 'vue-awesome/icons/desktop';
import 'vue-awesome/icons/mobile-alt';
import 'vue-awesome/icons/file';
import 'vue-awesome/icons/file-invoice';

import Icon from 'vue-awesome/components/Icon';
Vue.component('v-icon', Icon);

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);


import XdMailEditor from './components/XdMailEditor.vue';
import XdResizableContainer from './components/XdResizableContainer.vue';

new Vue({
    el: '#app',

    mounted: function() {
        console.log('xxxxxxxxx')
    },
    data: function() {
        return {
        };
    },
    components: {
        'xd-mail-editor': XdMailEditor,
        'xd-resizable-container': XdResizableContainer,
    },
});

