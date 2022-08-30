 
import { useState } from 'react'
import Quotes from "./Componentes/Quotes.json"
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

 const randomQuotes= Math.floor(Math.random() * Quotes.length)
const [ news, setNews] = useState(randomQuotes)

const changeButton = () => {
 const randomFunction = Math.floor(Math.random() * Quotes.length)
 setNews(randomFunction) 

}
 
const eachColors = ["#4476a3", "#c90076", "#cfff66", "#6df9db", "#f570ee", "#00539b", "#4b9cd3"]

const reformColors = Math.floor(Math.random() * eachColors.length)
document.body.style = `background: ${eachColors[reformColors]}`

//  const changeColor = ["#4476a3", "#c90076", "#cfff66", "#6df9db", "#f570ee", "#00539b", "#4b9cd3"]
//  const randomCol = Math.floor(Math.random() * changeColor.length )
//comentario


 return (
   <div className="App">
     <div className='card' style={{color: eachColors[reformColors] }}>
       
     <p> <i class="fa-solid fa-comment-dots"></i> {Quotes[news].quote} </p>
     <h3> {Quotes[news].author} </h3>
     <button onClick={changeButton}><i class="fa-solid fa-angle-right"></i> </button>

     </div>


   </div>
 )
}

export default App
