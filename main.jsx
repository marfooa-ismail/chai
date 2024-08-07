import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
  return(
     <div>
      <h1>custom app!</h1>
  </div>
  )
}
// const reactElement={
// type:'a',
// props:{
//     href:'https://google.com',
//     target:'_blank'
// },
// children:'click me to visit google'

// }
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google </a>
)
const anotheruser="cgai and code"
const reactElement=React.createElement(
  'a',// elements
  {

    href:"https://google.com" ,target:'_blank'},// attruibates proptey
    'click me to visit google', // children(head,par)
    anotheruser// evalutled expression
   
)





ReactDOM.createRoot(document.getElementById('root')).
render (
      
        // reactElement
        <App />
         
        


)

