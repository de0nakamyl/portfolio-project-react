import { useState } from 'react';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    
    return (
        <>
            <Input 
                required='required'
                type='number'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Button 
                onClick={() => props.handleSaveClick(value)}
            >
                Save
            </Button>
        </>
    );
};

export default EditBudget;