import React, {useState} from 'react';
import axios from 'axios'


function Search(props) {

    const [input, setInput] = useState(" ");

    const onChangeInput = e => {
        setInput(e.target.value)
    }

    const handleButton = () => { callApi(input); }
    
  
  
    const callApi = query =>
     { axios("http://localhost:4000/movie", {
        headers: {
          Accept: "application/json"
        },
        params: { 
          query,
          display: "4"
         }
      }).then(res => {console.log(res.data)} )
      .catch(err => {console.log(err)});
      }
    return (
        <div>
           <input onChange={onChangeInput}/>
           <button onClick={handleButton}>버튼</button>
        </div>
    );
}

export default Search;

