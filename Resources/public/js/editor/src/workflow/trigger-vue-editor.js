import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import MultiSelect from 'vue-multiselect';
import {actions as commonActions, mutations as commonMutations, getters as commonGetters} from 'vue-editor-commons';
import workflowEditor from './components/editor.vue';
import workflowGetters from './store/getters.js';
import workflowMutations from './store/mutations.js';
import workflowActions from './store/actions.js';

/**
 * Trigger the Vue editor.
 *
 * @param {(string|Object)} element - The DOM element to trigger the editor.
 * @param {Object} configuration - The editor configuration.
 */
function triggerVueEditor(element, configuration) {

  Vue.component('workflow-editor', workflowEditor);
  Vue.use(Vuex);
  Vue.use(VueResource);
  Vue.use(MultiSelect);

  var store = new Vuex.Store({
    state: {
      configuration: configuration,
      actions: [],
      apiCache: {},
      data: {
        actions: [],
        workflow: {
          name: "",
          first_action_name: "",
          flows: {}
        }
      }
    },

    getters: Object.assign(
      workflowGetters,
      commonGetters
    ),

    mutations: Object.assign(
        workflowMutations,
        commonMutations
    ),

    actions: Object.assign(
        workflowActions,
        commonActions
    )
  });

  /**
   * The app
   */
  new Vue({
    el: element,

    beforeCreate: function () {
      store.dispatch('setActions', this.$http);

      let workflowConfiguration = JSON.parse(configuration.form.value);

      for (let key in workflowConfiguration.actions) {
          store.dispatch('setActionParameters', { http: this.$http, service: workflowConfiguration.actions[key].service });
      }
    },

    created: function () {
      store.commit('initializeWorkflowData');
    },

    store: store
  });
}

export { triggerVueEditor }