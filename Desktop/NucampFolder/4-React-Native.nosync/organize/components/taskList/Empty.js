import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const Empty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>add task to your to do list</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#EDD2CE',
        opacity: 0.7,
        width: '90%',
    },
    text: {
        color: '#8323B1D',
        fontWeight: 'bold',
        fontSize: 25,
    },
});

export default Empty;