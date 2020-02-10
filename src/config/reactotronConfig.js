import { NativeModules } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

let scriptHostname;
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  // eslint-disable-next-line prefer-destructuring
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const tron = Reactotron.configure({ host: scriptHostname })
  .useReactNative()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

console.tron = tron;
tron.clear();
