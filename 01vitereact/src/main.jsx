import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return (
      <>
    <h1>
      hia !2121
    </h1>
  </>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }
const username = "Yashu 123"

const anotherElement =(  
<a href ="https://google.com" target = "_blank">Visit the google website anotherElement</a>
)
const ReactElement = React.createElement(
   'a',
   {
      href: 'https://google.com',
      target: '_blank',
  },
  'Click me to visit !@# google ReactElement',
  username // jab sara tre ban jata hai to username store hota hai 
  // object me condition nahi hoti hai

)


function htmlToReact(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const element = doc.body.firstChild;

  if (element) {
    const { tagName, attributes, textContent } = element;
    const props = {};

    for (let i = 0; i < attributes.length; i++) {
      const { name, value } = attributes[i];
      props[name] = value;
    }

    return React.createElement(tagName, props, textContent);
  }

  return null;
}

// Usage
const htmlString = '<a href="https://google.com" target="_blank">Click me to visit google 123 </a>';
const reactElement = htmlToReact(htmlString);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  // <Myapp/>
  // Myapp()
  //  <reactElement/>
  //  <ReactElement/>
  // ReactElement()
  //anotherElement
    ReactElement
 // anotherElement,
  // 
  
  //<App/>
)
