import Earth from "../assets/images/earth-vector.png"

export default function Navbar () {
  return (
    <nav className="navbar">
      <img className="navbar--icon" src={Earth} />
      <p className="navbar--title">my travel journal.</p>
    </nav>
  )
}