import { useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import AddInput from '../components/taskList/AddInput';
import TodoList from '../components/taskList/TodoList';
import Header from '../components/taskList/Header';
import Empty from '../components/taskList/Empty';

const TaskScreen = () => {
    const [data, setData] = useState([]);

    const submitHandler = (value) => {
        setData((prevTodo) => {
            return [
                {
                    value: value,
                    key: Math.random().toString(),
                },
                ...prevTodo,
            ];
        });
    };

    const deleteItem = (key) => {
        setData((prevTodo) => {
            return prevTodo.filter((todo) => todo.key != key);
        });
    };

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.home}>
                <View>
                    <FlatList
                        data={data}
                        ListHeaderComponent={() => <Header />}
                        ListEmptyComponent={() => <Empty />}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <TodoList item={item} deleteItem={deleteItem} />
                        )}
                    />
                    <View>
                        <AddInput submitHandler={submitHandler} />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    home: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TaskScreen;