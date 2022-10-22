import { Button, Text, View } from 'react-native-elements';

const ViewBudget = (props) => {
    return (
        <View>
            <Text>Budget: ${props.budget}</Text>
            <Button onClick={props.handleEditClick}>Edit</Button>
        </View>
    );
};

export default ViewBudget;