import DS from 'ember-data';

const { attr } = DS;

const schema = {
  firstName: attr('string'),
  lastName: attr('string'),
  description: attr('string'),
  likes: attr('array')
}
export default DS.Model.extend(schema);
