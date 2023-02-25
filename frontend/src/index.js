import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NewToken from './NewToken';
import TokenFactoryApp from './TokenFactory';
const root = ReactDOM.createRoot(document.getElementById('root'));
const styles = {
  postion: "absolute",
  top: "top",
  left: "left"
}
root.render(

  < React.StrictMode >
    <NewToken />
    <br></br>
    <TokenFactoryApp style={styles} />
  </React.StrictMode >
);


reportWebVitals();
