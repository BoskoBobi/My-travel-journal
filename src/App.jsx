import Navbar from "./components/Navbar"
import Card from "./components/Card"
import "./styles/General.css"
import "./styles/NavStyle.css"
import "./styles/CardStyle.css"
import data from "./assets/data"

export default function App () {
  const cards = data.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  }
  )
  
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}