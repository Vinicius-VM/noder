
import './App.css'
import Card from './components/Card'
import img1 from "../imgs/paisagem1.jpg"
import img2 from "../imgs/colombo.webp"

function App() {

  return (
    <>
      <Card 
        title="Paisagem 01"
        image={img1}
        text1="descricao"
        text2="Curtiba/PR"/>
      <Card 
        title="Paisagem 02"
        image={img2}
        text1="descricao"
        text2="Curtiba/PR"/>
      <Card 
        title="Paisagem 03"
        image={img1}
        text1="descricao"
        text2="Curtiba/PR"/>
    </>
  )
}

export default App
