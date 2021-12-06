import React from 'react';
import PropTypes from 'prop-types';
import './color.css';

export const Color = ({ color, mode, label, ...props }) => {
    const classes = color + "-" + mode;

    return (
        <>
            <h2>{label}</h2>
            <div className={"color-container " + classes} {...props}>
            </div>
        </>
    )
}

Color.propTypes = {
    color: PropTypes.string,
    mode: PropTypes.oneOf(['strong', 'normal', 'light']),
    label: PropTypes.string
}
