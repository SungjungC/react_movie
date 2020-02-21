import React from 'react';


const Search = ({handleChange, input, handleButton})  => {

  
    return (
        <div>
           <input name={input} onChange={handleChange}/>
           <button onClick={handleButton}>버튼</button>
        </div>
    );
}

export default Search;

