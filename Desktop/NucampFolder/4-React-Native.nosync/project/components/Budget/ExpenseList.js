import { useContext, useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Input } from 'react-native-elements';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) => 
            filteredExpense.name.toLowerCase().includes(event.target.value)
        );
        setFilteredExpenses(searchResults);
    };

    return (
        <View>
            <Input
                type='text'
                placeholder='Type to search...'
                onChange={handleChange}
            />
            <FlatList>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </FlatList>
        </View>
    );
};

export default ExpenseList;