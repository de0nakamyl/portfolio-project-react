import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <View>
                <Text>Home Screen</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    }
});

export default HomeScreen;