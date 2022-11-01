import { Button, Text, View } from 'react-native';

const ViewBudget = (props) => {
    return (
        <View>
            <Text>Budget: ${props.budget}</Text>
            <Button title='Edit' onClick={props.handleEditClick}>Edit</Button>
        </View>
    );
};

export default ViewBudget;