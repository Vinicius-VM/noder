
import { Tilt } from 'react-tilt'
import Menu from './components/Menu'

import style from './App.module.css'
import Card from './components/Card'
import img1 from "../imgs/paisagem1.jpg"
import img2 from "../imgs/colombo.webp"

function App() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <>
    <Menu/>
    <div className={style.section01}>
      <Tilt options={defaultOptions} style={{height: 250, width: 250}}>
      <Card 
        title="Paisagem 01"
        image={img1}
        text1="descricao"
        text2="Curtiba/PR"/>
      </Tilt>
      <Tilt options={defaultOptions} style={{height: 250, width: 250}}>
      <Card 
        title="Paisagem 02"
        image={img2}
        text1="descricao"
        text2="Curtiba/PR"/>
      </Tilt>
      <Tilt options={defaultOptions} style={{height: 250, width: 250}}>
      <Card 
        title="Paisagem 01"
        image={img1}
        text1="descricao"
        text2="Curtiba/PR"/>
      </Tilt>
    </div>
    </>
  )
}

export default App
