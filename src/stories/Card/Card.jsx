import React from 'react';
import PropTypes from 'prop-types';
import "./card.css";
import CheckboxSVG from '../assets/checkbox.svg';

export const Card = ({ footer }) => {
    const title = footer ? 'Card with Footer' : 'Simple Card'
    return (
        <>
        <p className="card-title">{title}</p>
        <div className="card">
            {footer &&
                <div className="card-footer">
                    <div className="card-footer-item">
                        <img src={CheckboxSVG} alt="" />
                        <span>This is an item</span>
                    </div>
                    <div className="card-footer-item">
                        <img src={CheckboxSVG} alt="" />
                        <span>This is another item</span>
                    </div>
                </div>
            }
        </div>
        </>
    )
}

Card.propTypes = {
    footer: PropTypes.bool,
}