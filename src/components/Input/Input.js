import React from 'react';

function Input(props) {
    const { value, onChangeInput, name, placeholder, type, error } = props;

    const getClassName = () => {
        let className = "Input InputElement";
        if (error.status && error.isTouch) {
            className = "Invalid " + className;
        }
        return className;
    };

    return (
        <>
            <input
                className={getClassName()}
                value={value}
                onChange={onChangeInput}
                type={type ? type : "text"}
                name={name}
                placeholder={placeholder} />
            <p className="ErrorMessage">{error.message}</p>
        </>
    );
}

export default Input;
