import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    let today = new Date().toISOString().slice(0, 10);

    return (
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
        marginTop: 20,
    },
    date: {
        color: '#323B1D',
        fontSize: 20,
        fontStyle: 'italic',
        marginRight: 20,
    },
    header: {
        color: '#808673',
        paddingHorizontal: 5,
        paddingVertical: -1,
        fontSize: 40,
        fontWeight: '500',
        marginLeft: '34%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;