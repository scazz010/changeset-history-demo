import Ember from 'ember';
import ChangesetHistory from 'ember-changeset-history';
  import { validatePresence, validateLength } from 'ember-changeset-validations/validators';
import lookupValidator from 'ember-changeset-validations';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('user')
  },

  setupController(controller, model) {
    controller.set('changeset', new ChangesetHistory(model, lookupValidator({
      firstName: [validatePresence(true), validateLength({min: 2})]
    }), {}, {maxHistoryLength: 3}));
  }

});
