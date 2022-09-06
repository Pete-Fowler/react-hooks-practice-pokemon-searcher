import React, { useState } from "react";

function Search({ searchList }) {
  const [ inputValue, setInputValue ] = useState('');
  
  function handleChange(e) {
    setInputValue(e.target.value);
    searchList(inputValue);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={inputValue} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
