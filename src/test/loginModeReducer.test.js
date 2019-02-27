import loginMode from '../redux/reducers/loginModeReducer';

test('should have its correct initial state', () => {

  let action = {};
  let state = undefined;

  expect(loginMode(state, action)).toBe('login');
})

test('should have register mode when SET_TO_REGISTER_MODE', () => {

  let action = {type: 'SET_TO_REGISTER_MODE'};
  let state = 'login'

  expect(loginMode(state, action)).toBe('register');

})