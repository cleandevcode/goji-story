import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Hint } from 'react-autocomplete-hint';

import { countries } from './countries';
import SearchSVG from '../assets/search.svg';
import "./autoComplete.css";

export const AutoComplete = ({icon}) => {
    const [ candidates, setCandidates ] = useState([]);
    const [ keyword, setKeyword ] = useState("");


    useEffect(() => {
        if (keyword.length > 0) {
            const results = countries.filter(country => country.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
            setCandidates(results);
        } else {
            setCandidates([]);
        }
    }, [keyword])

    return (
        <>
            <div className="input-container">
                {icon &&
                    <img src={SearchSVG} alt="" />
                }
                <Hint options={candidates} allowTabFill>
                    <input type="text"
                        placeholder="Start typing..."
                        className="autocomplete-input"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Hint>
            </div>
            <div className="candidates-container">
                {candidates.length > 0 && candidates.map((candidate, idx) => (
                    <div key={idx} className="option" onClick={() => { setKeyword(candidate); setCandidates([])}} >
                        <span className="option-label">
                        {candidate}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

AutoComplete.propTypes = {
    icon: PropTypes.bool
}