import { extend } from 'vee-validate';

extend('username', value => {

  var userNameRegex = /^[a-zA-Z0-9]+$/;

  if (!value.match(userNameRegex)) {
    return 'The {_field_} should not have special characaters'
  }
  if ( value.length < 6) {
    return 'The {_field_} must have 6 characters or more'
  }
  return true;
});

extend('fullname', value => {
  var fullNameRegex = /^[a-zA-Z]{10,}(?: [a-zA-Z]+){0,10}$/

  if (value.match(fullNameRegex)) {
    return 'The {_field_} is invalid';
  }
  return true;
})