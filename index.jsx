import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

let app = document.getElementById('root');

// const Hello = () => <p>Hello World</p>;

// mk('p', null, 'Hello World')
React.createElement('p', null, 'Hello World');

let odlObj = { className: 'class', id: 'hello', children: 'Hello World' };
let newObj = { ...odlObj, children: '6' };

// function FirstComponent(props) {
//   console.log(props);
//   return <p {...props}>{props.children}</p>;
// }

// desctructuring
function FirstComponent({ children, ...rest }) {
  // console.log(props);
  // const {children, ...rest} = props;
  return <p {...rest}>{children}</p>;
}

{
  /* <FirstComponent className="class" id="hello" children='Hello World' /> */
}
// FirstComponent({ className: 'class', id: 'hello', children: 'Hello World' })
// <FirstComponent className="class" id="hello" children='Hello World'></FirstComponent>

function App() {
  return (
    <Fragment>
      <FirstComponent
        id="hello1"
        className="class"
        style={{ color: 'red' }}
        children="Hello World"
      ></FirstComponent>
      <FirstComponent
        id="hello2"
        className="class"
        style={{ color: 'red' }}
        children="Hello World"
      ></FirstComponent>
      <FirstComponent
        id="hello3"
        className="class"
        style={{ color: 'red' }}
        children="Hello World"
      ></FirstComponent>
    </Fragment>
  );
}

// ReactDOM.render(<App />, app)

const root = createRoot(app);

root.render(<App />);
