import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const device_id = DeviceInfo.getUniqueId()
export const hasNotch = DeviceInfo.hasNotch()

export const device_type = Platform.OS === 'ios' ? 2 : 1;
