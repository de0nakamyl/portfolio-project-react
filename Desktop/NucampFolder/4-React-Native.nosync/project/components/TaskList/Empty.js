import { StyleSheet, Text, View } from 'react-native';

const Empty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>add tasks to your to do list</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        height: 50,
    },
    text: {
        color: '#808673',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default Empty;