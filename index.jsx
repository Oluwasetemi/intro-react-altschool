import React from 'react';
import ReactDOM from 'react-dom';

const hello = React.createElement('p', {id: 'hello' }, 'Hello World in react');

const container = React.createElement('div', {id: 'container' }, hello)

const hello2 = <p id="hello">Hello World in react</p>;


let p = document.createElement('p');
p.textContent = 'Hello World';
let app = document.getElementById('root');

app.append(p);


ReactDOM.render(container, app);
