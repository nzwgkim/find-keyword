import React, { useReducer, useState } from 'react';
import './App.css';
import Profile from './component/Profile';

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
      .catch(res => console.log(res));
  };

  function reducer(state, action) {
    switch (action.type) {
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
    dispatch({ type: USERS });
  }
  const onClickPosts = () => {
    dispatch({ type: POSTS });
  }
  const onClickTodos = () => {
    dispatch({ type: TODOS });
  }
  const handleOnClick = e => {
    console.log(e);
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

      <button onClick={handleOnClick}>Click</button>
      <Profile isNew='true' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        title='Engineer' name='Jessi' />
      <Profile image='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        title='Engineer' name='Ian' />
      <Profile image='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        title='Engineer' name='Joseph' />


    </div>
  );
}


export default App;
