import {PermissionsAndroid} from 'react-native';

const grantReadWriteExternalStorage = async () => {
  try {
    let granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log(granted);
    } else {
      console.log(granted);
    }
  } catch (err) {
    console.warn(err);
  }
};

export {grantReadWriteExternalStorage};
