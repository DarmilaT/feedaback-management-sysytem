import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Home from './components/home';

//import Auth from './components/auth';
//import Database from './components/databse';
import CategoriesComponent from './components/CategoriesComponent';
import QuestionsComponent from './components/QuestionsComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<QuestionsComponent/>
   <CategoriesComponent/>
   

  
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals