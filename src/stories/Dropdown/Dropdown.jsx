import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./dropdown.css";
import Select, {components} from 'react-select';
import SearchSVG from '../assets/search.svg';

const options = [
    {
        value: 'list1',
        label: 'This is a list item 1'
    },
    {
        value: 'list2',
        label: 'This is a list item 2'
    },
    {
        value: 'list3',
        label: 'This is a list item 3'
    },
    {
        value: 'list4',
        label: 'This is a list item 4'
    },
    {
        value: 'list5',
        label: 'This is a list item 5'
    },
]

const customStyles = {
    control: (base, state) => ({
      ...base,

      // Overwrittes the different states of border
      borderColor: "unset",
      fontFamily: "'Roboto', sans-serif;",
      borderWidth: 0,
      // Removes weird border around container
      boxShadow: null,
      paddingLeft: 10,
      fontSize: 14,
      "&:hover": {
        boxShadow: "0px 0px 15px 1px rgba(228, 228, 228)",
      }
      
  }),
  menuList: (base, state) => ({
    ...base,
  }),
  menu: (base, state) => ({
    ...base,
    marginTop: 'unset',
    border: 0,
    boxShadow: "0px 0px 15px 1px rgba(228, 228, 228, 0.25)",
    borderColor: 'transparent',
    borderTop: '1px solid #f5f5f5',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderRadius: 0,
    fontFamily: "'Roboto', sans-serif;"
  }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: '#C6CDD7',
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)'
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      display: "none",
    }),
    input: (base, state) => ({
      ...base,
      fontFamily: "'Roboto', sans-serif;",
  }),
  placeholder: (base, state) => ({
    ...base,
    color: '#c6cdd7',
    fontFamily: "'Roboto', sans-serif;",
    }),
    option: (base, state) => ({
      ...base,
      "&:hover": {
        backgroundColor: '#F5F5F5'
      },
      backgroundColor: state.isSelected ? '#F5F5F5' : 'white',
      color: 'black',
      ":active": {
        backgroundColor: state.isSelected ? '#F5F5F5' : 'white',
      }
  }),
  

};


const Control = ({ children, ...props }) => {

  return (
    <components.Control {...props}>
      <img src={SearchSVG} alt="" />
      {children}
    </components.Control>
  );
};
  
export const Dropdown = ({ dynamic }) => {
    const placeholder = dynamic ? 'Start typing...' : 'Choose an item...'
    const [ selected, setSelected ] = useState();
    const [keyword, setKeyword] = useState("")
    const handleChange = (e) => {
        setSelected(e)
    }

  return (
        <>
      <Select
        value={selected}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        className="dropDown"
        placeholder={placeholder}
        onInputChange={(e) => setKeyword(e)}
        components={dynamic && {  Control }}
        isSearchable={dynamic && true}
        // isClearable
      />
        {selected &&
        <p className="dropdown-label">Selected Values: <span className="dropdown-text">{selected.value}</span></p>
        }
        </>
    )
}

Dropdown.propTypes = {
  dynamic: PropTypes.bool
}