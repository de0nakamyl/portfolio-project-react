import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    let today = new Date().toISOString().slice(0, 10);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>To Do</Text>
            <Text style={styles.date}>{today}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
    date: {
        color: '#323B1D',
        fontSize: 20,
        marginRight: 20,
    },
    header: {
        color: '#323B1D',
        backgroundColor: 'white',
        borderColor: '#E8CBB3',
        borderWidth: 2,
        padding: 5,
        fontSize: 30,
    },
});

export default Header;