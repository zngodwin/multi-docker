import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    //Returns click events from user
    //Restructured because ref.current evaluates to null
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)){
                return;
            } 
            setOpen(false);
          };
          document.body.addEventListener('click', onBodyClick, { capture: 
            true});

          //clean up function is also invoked when dropdown component is removed
          return () => {
              document.body.removeEventListener('click', onBodyClick, {
                  capture: true,
              });
          };
        }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null;
        }

        return (
            <div 
            key={option.value} 
            className="item"
            onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    }); 
   
    return (
    <div ref={ref} className="ui form container">
        <div className="field">
            <label className="label">{label}</label>
            <div 
                onClick={() => setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            >
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${ open ? 'visible transition' : ''}`}>{renderedOptions}
                </div>
            </div>
        </div>
      </div>
    );
};

export default Dropdown;

