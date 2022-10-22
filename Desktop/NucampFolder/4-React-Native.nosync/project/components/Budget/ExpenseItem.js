import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AppContext } from './AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    return (
        <View>
            <Text>{props.name}</Text>
            <Text>${props.cost}</Text>
            <Button onclick={handleDeleteExpense}>Delete</Button>
        </View>
    );
};

export default ExpenseItem;