import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './Reader.style';
import FileSystem from '../../utils/FileSystem';
import {grantReadWriteExternalStorage} from '../../utils/permissionManager';
import {observer} from 'mobx-react';
import {action, makeObservable, observable} from 'mobx';

@observer
class Reader extends Component {
  @observable
  fileResult;

  constructor(props) {
    super(props);
    makeObservable(this);
    this.fileSystem = new FileSystem();
  }

  async componentDidMount() {
    await grantReadWriteExternalStorage();
    // await this.fileSystem.writeFile();

    this.fileResult = JSON.stringify(await this.fileSystem.readFile());
    // this.changefileResult();
  }

  @action
  changefileResult = () => {
    console.log('pressed');
    this.fileResult = 'true';
  };
  render() {
    console.log('here' + this.fileResult);
    return (
      <SafeAreaView style={styles.readerContainer}>
        <Text onPress={this.changefileResult}>{this.fileResult}</Text>
      </SafeAreaView>
    );
  }
}

export default Reader;
