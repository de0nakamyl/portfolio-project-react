import { useState, useContext } from 'react';
import { View } from 'react-native';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from './AppContext';

const Budgeting = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <View>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </View>
    );
};

export default Budgeting;