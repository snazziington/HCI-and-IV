import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    <MyList />
    
  </React.StrictMode>
);

function MyButton() {
  function handleClick() {
    console.log('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function MyList(){
  return(
    <ul style={{backgroundColor:'#d1d1d1ff'}}>
  <li><a href="#library"><box-icon name="book"></box-icon></a></li>
  <li><a href="#quiz"><box-icon name="note"></box-icon></a></li>
  <li><a href="#help"><box-icon name="info-circle"></box-icon></a></li>
</ul>
  )
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
