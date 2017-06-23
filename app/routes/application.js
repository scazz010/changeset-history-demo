import Ember from 'ember';
import ChangesetHistory from 'ember-changeset-history';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('user')
  },

  setupController(controller, model) {
    controller.set('changeset', new ChangesetHistory(model));
  }

});
