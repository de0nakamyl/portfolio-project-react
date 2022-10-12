import { FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const RenderDirectoryItem = ({ item: toDo }) => {
        return (
            <ListItem onPress={() => props.onPress(toDo.id)}>
                <ListItem.Content>
                    <ListItem.Title>{toDo.task}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList 
            data={props.toDo}
            renderItem={RenderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;