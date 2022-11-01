import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { AppProvider } from '../components/Budget/AppContext';
import AddExpenseForm from '../components/Budget/AddExpenseForm';
import Budgeting from '../components/Budget/Budgeting';
import ExpenseTotal from '../components/Budget/ExpenseTotal';
import ExpenseList from '../components/Budget/ExpenseList';
import RemainingBudget from '../components/Budget/Remaining';

const BudgetScreen = () => {
    return (
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}
        >
            <SafeAreaView style={styles.home}>
                <View style={styles.container}>
                    <AppProvider>
                        <Card title='Budget Planner'>
                            <Budgeting />
                            <RemainingBudget />
                            <ExpenseTotal />
                        </Card>
                        <Card title='Expenses'>
                            <ExpenseList />
                            <Text>Add Expense</Text>
                            <AddExpenseForm />
                        </Card>
                    </AppProvider>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    container: {
        width: '85%',
        height: '85%',
        marginTop: 10,
    },
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BudgetScreen;