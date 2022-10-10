import React from 'react';
import ReactDOM from 'react-dom/client';
//app
import App from './App';
//components
import Wrapper from './components/Wrapper/Wrapper';
import InputForm from './components/InputForm/WishListInputForm';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <Wrapper>
      <InputForm />
      <App />
    </Wrapper>
  </React.StrictMode>
);