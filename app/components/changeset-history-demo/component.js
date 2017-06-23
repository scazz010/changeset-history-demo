import Ember from 'ember';

export default Ember.Component.extend({
  // Params
  changeset: null,

  canUndo: Ember.computed.oneWay('changeset.canUndo'),
  canRedo: Ember.computed.oneWay('changeset.canRedo'),

  actions: {
    validateProperty(property) {
      return this.get('changeset').validate(property);
    },
    undo() {
      this.get('changeset').undo();
    },
    redo() {
      this.get('changeset').redo();
    },
    customSetter(propertyPath, newValue) {
      console.log(`Setting ${propertyPath} to ${newValue}`);
      this.set(propertyPath, newValue);
    }
  }

});
