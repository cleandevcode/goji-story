import React from 'react';
import PropTypes from 'prop-types';
import './text.css';

export const Text = ({ mode, label }) => {
    const classes = mode === 'regular' ? 'text-regular' : mode === 'main_heading' ? 'text-main-heading' : mode === 'sub_heading' ? 'text-sub-heading' : 'label';
    return (
        <span className={classes}>{label}</span>
    )
}

Text.prototype = {
    mode: PropTypes.oneOfType([ 'regular', 'main_heading', 'sub_heading', 'label' ]),
    label: PropTypes.string
}
