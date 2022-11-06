import { ImageBackground, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Main from './screens/Main';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/images/bg.png')}
      style={styles.background}
    >
      <Main style={styles.container} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;