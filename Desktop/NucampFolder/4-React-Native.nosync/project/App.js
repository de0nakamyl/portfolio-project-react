import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Main from './screens/Main';

const App = () => {
  return (
    <Main style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
