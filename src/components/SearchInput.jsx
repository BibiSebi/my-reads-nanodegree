import PropTypes from "prop-types";
import React, { useState } from "react";

const SearchInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (value) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={inputValue}
      onChange={(event) => onChangeInput(event.target.value)}
    />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
