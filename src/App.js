import React, { useReducer, useState } from 'react';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com';

const USERS = 'users';
const POSTS = 'posts';
const TODOS = 'todos';
const initialState = USERS;


function App() {
    const [data, setData] = useState(null);

    const fetchUrl = (type) => {
      console.log(url + '/' + type);
        fetch(url + '/' + type)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(res=>console.log(res));
    };
    
   function reducer(state, action){    
    switch(action.type){
      case USERS:
      case POSTS:
      case TODOS:
        console.log(state, action.type);
        console.log(url + '/' + action.type);
        fetchUrl(action.type);
        return action.type;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
    
  const onClickUsers = () => {
    dispatch({type:USERS});
  }
  const onClickPosts = () => {
    dispatch({type:POSTS});
  }
  const onClickTodos = () => {
    dispatch({type:TODOS});
  }
  return (
    <div id='useFetch'>
      <h1>useFetch</h1>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickPosts}>posts</button>
      <button onClick={onClickTodos}>todos</button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

    </div>
  );
}


export default App;
