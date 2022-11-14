import Location from "../assets/images/location-icon.png"

export default function Card (props) {
  return (
    <main className="card">
      <img className="card--photo" src={props.item.imageUrl}/>
      <div className="card--right--section">
        <div className="card--flex">
        <img className="card--location--icon" src={Location} />
        <h3 className="card--location">{props.item.location}</h3>
        <a className="card--map_link" href={props.item.googleMapsUrl}
        target="_blank">
          View on Google Maps
        </a>
        </div>
      <h1 className="card--title">{props.item.title}</h1>
      <p className="card--start">{props.item.startDate}</p>
      <p className="card--end">{props.item.endDate}</p>
      <p className="card--description">{props.item.description}</p>
      </div>
    </main>
  )
}