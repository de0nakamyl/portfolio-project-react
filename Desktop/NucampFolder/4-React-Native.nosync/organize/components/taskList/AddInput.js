import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddInput = ({ submitHandler }) => {
    const [value, setValue] = useState('');

    const onChangeText = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <TextInput
                    style={styles.input}
                    placeholder='add task...'
                    onChangeText={onChangeText}
                />
            </View>
            <TouchableOpacity
                style={styles.submit}
                onPress={() => {
                    setValue(submitHandler(value));
                }}
            >
                <AntDesign name='plus' size={24} color='#323B1D' />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    field: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#323B1D',
    },
    input: {
        fontSize: 20,
        backgroundColor: 'white',
        width: 300,
        marginRight: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    submit: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFC899',
        marginBottom: 10,
        borderRadius: 50,
    },
});

export default AddInput;