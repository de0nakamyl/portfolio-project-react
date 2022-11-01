import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

const TodoList = ({ item, deleteItem }) => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <View style={styles.icon}>
                    <Icon
                        name='square-o'
                        type='font-awesome'
                        size={20}
                        color='#323B1D'
                    />
                </View>
                <View>
                    <Text style={styles.item}> {item.value}</Text>
                </View>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => deleteItem(item.key)}
                >
                    <Icon
                        name='trash-o'
                        type='font-awesome'
                        size={24}
                        color='#323B1D'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    square: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'auto',
        width: 'auto',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        height: 40,
        borderRadius: 10,
        paddingLeft: 5,
    },
    item: {
        color: '#323B1D',
        width: 260,
        height: 'auto',
        fontSize: 20,
        marginTop: 5,
        marginRight: 20,
        paddingBottom: 10,
    },
    list: {
        borderColor: '#808673',
        borderWidth: 2,
        backgroundColor: '#EFF2E6',
        height: 'auto',
        width: 350,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TodoList;