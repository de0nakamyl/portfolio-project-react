import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderTask = ({ task }) => {
    if (task) {
        return (
            <Card containerStyle={{ padding: 0}}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text
                        style={{
                            color: '#32031F',
                            textAlign: 'center',
                            fontsize: 20
                        }}
                    >
                        {task.name}
                    </Text>
                </View>
            </Card>
        )
    }
    return <View />;
};

export default RenderTask;