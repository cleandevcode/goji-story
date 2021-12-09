import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./textBox.css";

export const TextBox = ({ placeholder, onChange, text, onKeyDown }) => {
    const [ value, setValue ] = useState();

    useEffect(() => {
        setValue(text)
    }, [ text ])
    
    const handleChange = e => {
        const _value = e.target.value
        setValue(_value);
        onChange(_value)
    }

    return (
        <input type="text" placeholder={placeholder} value={value} className="text-box" onChange={handleChange} onKeyDown={onKeyDown} />
    )
}

TextBox.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func
}