import React, { useState } from "react";
import "./Customdropdown.css";

const CustomDropdown = ({
  label = "Select an option",
  options = [],
  setFilterValue,
  filterValue,
  dropdownName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (e, optionId) => {
    e.stopPropagation();
    setFilterValue((prevValue) => {
      if (prevValue[dropdownName].includes(optionId)) {
        return {
          ...prevValue,
          [dropdownName]: prevValue[dropdownName].filter(
            (id) => id !== optionId
          ),
        };
      } else {
        return {
          ...prevValue,
          [dropdownName]: [...prevValue[dropdownName], optionId],
        };
      }
    });
  };

  return (
    <div className={`custom-dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header primary-input" onClick={toggleDropdown}>
        <span>{label}</span>
        <span className={`arrow ${isOpen ? "up" : "down"}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="dropdown-options border-primary">
          {options.map((option) => (
            <div key={option.value} className="option d-flex">
              <input
                type="checkbox"
                id={option.value}
                checked={filterValue[dropdownName].includes(option.value)}
                onChange={(e) => handleOptionToggle(e, option.value)}
              />
              <label htmlFor={option.value} className="pointer w-100">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
