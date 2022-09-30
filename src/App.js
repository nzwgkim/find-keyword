import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [word, setWord] = useState([]);
  const [input, setInput] = useState('');

  const kopoUrl = 'https://www.nzkoreapost.com/bbs/board.php?bo_table=market_buynsell&sca=&sop=and&sfl=wr_subject%7C%7Cwr_content&stx=';

  //let url = kopoUrl + input;
  let url = kopoUrl + 'TV';
  url = 'https://jsonplaceholder.typicode.com/users';
  console.log(url);

  useEffect(()=>{
    fetch('url')
    .then(res=>res.json())
    .then(res=>console.log(res));
  },[]);

  /*
  fetch('url')
  .then((response)=>(response.json()))
  .then((data)=>console.log(data))
  .catch((error) => console.log("error:", error));
*/



  const clickWord = ()=>{
    setWord((prev)=>[input,...prev]);
  }
  const handleInputChange = (e) =>{
    setInput(e.target.value);
  }
  console.log(word);
  return (
    <div className="App">

      <input type='text' value={input} onChange={handleInputChange}></input>
      <button onClick={clickWord}> Update </button>
      <p>{word.map((w,id)=><p key={id}>{w}</p>)}</p>
    </div>
  );
}

export default App;
