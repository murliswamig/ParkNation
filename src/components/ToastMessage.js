import { showMessage } from 'react-native-flash-message';
import colors from '../constants/colors';

export function showToast(message, type = 'success', btnText = '') {
  showMessage({
    position: 'top',
    message:'Success',
    icon: 'success',
    description: message,
    duration: 5000,
    type: type,
    textStyle: { marginRight: 10 },
    backgroundColor: colors.green,
    color: '#ffffff',
  });
}

//***** Function for showing long alert messages for 10 sec in whole app */
export function showToastLong(message, type = 'success', btnText = '') {
  showMessage({
    position: 'top',
    message: 'Success',
    icon: 'success',
    description: message,
    duration: 10000,
    type: type,
    textStyle: { marginRight: 10 },
    backgroundColor: colors.primary,
    color: '#ffffff',
  });
}

//***** Function for showing danger(red) alert messages in whole app */
export function showDangerToast(message, type = 'danger', btnText = '') {
  showMessage({
    position: 'top',
    message:'Alert',
    icon: 'danger',
    description: message,
    textStyle: { marginRight: 10 },
    duration: 5000,
    type: type,
  });
}

//***** Function for showing long danger(red) alert messages in whole app */
export function showDangerToastLong(message, type = 'danger', btnText = '') {
  showMessage({
    position: 'top',
    message: 'Alert',
    icon: 'danger',
    description: message,
    duration: 20000,
    type: type,
    textStyle: {
      flex: 1,
      paddingRight: 15,
    },
  });
}

