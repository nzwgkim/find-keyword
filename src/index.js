import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSearch from './basic/AppSearch';
// import AppMentors from './basic/AppMentors';
// import AppMentorsImmer from './basic/AppMentorsImmer';
// import AppXY from './basic/AppXY';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppCounter from './AppCounter';
// import AppProducts from './AppProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppSearch />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
