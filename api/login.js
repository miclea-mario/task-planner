import { store } from '@auth';
import { axios, router, toaster } from '@lib';
import { decode } from 'jsonwebtoken';

const login = async (ref, data) => {
  try {
    // execute google recaptcha
    data['g-recaptcha-response'] = await ref.current.executeAsync();

    const { token, message } = await axios.post('login', data);
    if (!decode(token)) {
      throw new Error('Error! We cannot log you in at the moment');
    }
    store.dispatch({ type: 'SET', jwt: token });

    // Decode token to get user role
    const { role } = decode(token) || {};
    if (!role) {
      throw new Error('Error! We cannot log you in at the moment');
    }

    // Notify user and other actions
    toaster.success(message);
    router.push(`/${role}`);
  } catch (err) {
    toaster.error(err.message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default login;
