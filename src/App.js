import React, { useEffect, useState } from 'react';
import './App.css';

//const baseUrl = 'https://www.nzkoreapost.com/bbs/board.php?bo_table=market_buynsell&sca=&sop=and&sfl=wr_subject%7C%7Cwr_content&stx=';
// const baseUrl = 'https://www.nzkoreapost.com';
/*
/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users
*/


const url = 'https://jsonplaceholder.typicode.com';

function App() {

  const [data, setData] = useState(null);
  const page = 'users'

  const fetchUrl = (type) => {
    fetch(url + '/' + type)
      .then(res => res.json())
      .then(res => setData(res));
  };

  console.log(data);


  useEffect(() => {
    fetchUrl(page);
  }, [])



  const onClickUsers = () => {
    fetchUrl('users');
  }

  const onClickPosts = () => {
    fetchUrl('posts');
  }
  const onClickTodos = () => {
    fetchUrl('todos');
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
