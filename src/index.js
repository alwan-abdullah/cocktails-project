import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header/header';
import Section1 from './body/section1';
import Section2 from './body/section2';
import Section3 from './body/section3';
import Section4 from './body/section4';
import Section5 from './body/section5';
import Section6 from './body/section6';
import Section7 from './body/section7';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  <Header/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <Section7/>
</React.StrictMode>,
);
// ReactDOM.render(<App/>, document.getElementById('root2'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
