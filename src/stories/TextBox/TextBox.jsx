import React from 'react';
import PropTypes from 'prop-types';
import "./textBox.css";

export const TextBox = ({placeholder, text}) => {
    return (
        <input type="text" placeholder={placeholder} value={text} className="text-box" />
    )
}

TextBox.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string
}