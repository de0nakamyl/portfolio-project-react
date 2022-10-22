import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';
import RenderTask from '../features/todo/RenderTask';

const TaskScreen = (props) => {
    return (
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}
        >
            <SafeAreaView style={styles.home}>
                <Text>To Do Screen</Text>
                <RenderTask task={props.task} />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TaskScreen;