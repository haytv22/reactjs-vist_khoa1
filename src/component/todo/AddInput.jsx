import { useState } from 'react';
const AddInput = (props) => {
    const [valueInput, setValueInput] = useState('vui');
    const handelClick = () => {
        console.log(valueInput);
    }
    const getValue = (value) => {
        setValueInput(value);
    }

    return (
        <div className='todo-input'>
            <input onChange={(e) => getValue(e.target.value)} type="text" />
            <button onClick={handelClick}>Add</button>
            <div className="value">input value = {valueInput} </div>
        </div>
    );
};

export default AddInput;