import './index.css'

const CountryItem = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="list-item">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="text">{countryText}</p>
      ) : (
        <button type="button" className="btn" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountryItem
