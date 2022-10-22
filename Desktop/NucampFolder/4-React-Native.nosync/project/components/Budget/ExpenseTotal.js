import { useContext } from 'react';
import { Text } from 'react-native-elements';
import { AppContext } from './AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const total = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <Text>Spent so far: ${total}</Text>
    );
};

export default ExpenseTotal;