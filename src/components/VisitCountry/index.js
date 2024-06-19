import './index.css'

const VisitCountry = props => {
  const {visitCountryDetails, deleteVisitCountry} = props
  const {id, name, imageUrl} = visitCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visit-countries-list-item">
      <div className="visit-countries-container">
        <img src={imageUrl} alt="thumbnail" className="img" />
        <div className="details-section">
          <p className="name">{name}</p>
          <button
            type="button"
            className="btn"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitCountry
