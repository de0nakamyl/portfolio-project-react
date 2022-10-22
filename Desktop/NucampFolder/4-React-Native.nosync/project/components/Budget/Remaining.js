import { useContext } from 'react';
import { Text, View } from 'react-native-elements';
import { AppContext } from './AppContext';

const RemainingBudget = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'negative' : 'positive';
    
    return (
        <View style={`${alertType}`}>
            <Text>Remaining: ${budget - totalExpenses}</Text>
        </View>
    );
};

export default RemainingBudget;