import { useContext, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { AppContext } from './AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setName('');
        setCost('');
    };

    return (
        <>
            <View>
                <Input
                    placeholder='Name'
                    type='text'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <Input
                    placeholder='Cost'
                    type='number'
                    id='cost'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)} />
            </View>
            <View style={{ margin: 10 }}>
                <Button 
                    title='add'
                    onPress={() => {
                        handleSubmit();
                        resetForm();
                        }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    }
});

export default AddExpenseForm;