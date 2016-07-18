import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')
});
