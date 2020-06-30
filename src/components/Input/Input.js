import React from 'react';

function Input(props) {
    const { value, onChangeInput, name, placeholder, type } = props;

    return (
        <input
            className="Input InputElement"
            value={value}
            onChange={onChangeInput}
            type={type ? type : "text"}
            name={name}
            placeholder={placeholder} />
    );
}

export default Input;
