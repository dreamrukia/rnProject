import RNFS from 'react-native-fs';
import {action} from 'mobx';

export default class FileSystem {
  @action
  readFile = async () => {
    const path = RNFS.ExternalStorageDirectoryPath + '/Download/test.txt';

    try {
      let result = await RNFS.readDir(
        RNFS.ExternalStorageDirectoryPath + '/Download',
      );
      console.log(result);

      return result;
    } catch (e) {
      console.log(e);
    }
  };

  @action
  writeFile = async () => {
    const path = RNFS.ExternalStorageDirectoryPath + '/Download/test.txt';
    // write the file
    try {
      await RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8');
    } catch (e) {
      console.log(e);
    }
  };
}
