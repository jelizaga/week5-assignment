import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GPPage from './GPPage';

function GPCard({cardId, gp}) {

  const gpName = gp.name;
  const gpId = gp.id;
  const gpAge = gp.age;
  const gpGender = gp.gender;
  const gpSpecies = gp.species;
  const gpPhotos = gp.photos;
  const gpSpecialNeeds = gp.attributes.special_needs;
  const locDistance = gp.distance;
  const imgAlt = `Image of ${gpName}.`;
  const placeholderImgUrl = "https://i.imgur.com/ZCl4qbo.png";

  const specialNeedsClasses =
    gpSpecialNeeds ? "special-needs" : "special-needs hidden"

  let imgSrc = placeholderImgUrl;

  if (!(gpPhotos[0] === undefined) && !(typeof gpPhotos[0] == 'undefined')) {
    imgSrc = gpPhotos[0].medium;
  }
  
  return (
    <Link 
      to={{
        pathname: `/guinea-pigs/${gpId}`
      }}
      element={<GPPage />}
    >
      <div id={cardId} className="gpcard">
        <div className="gpcard-img">
        <img src={imgSrc} alt={imgAlt}/>
        </div>
        <div className="gpcard-details">
          <p className="gpcard-name">
            {gpName}
          </p>
          <p className="gpcard-description">
            {gpAge} {gpGender.toLowerCase()} {gpSpecies.toLowerCase()}
          </p>
          <p className="gpcard-distance">
            {locDistance.toFixed(2)} miles
          </p>
        </div>
      </div>
    </Link>
  );

}

GPCard.propTypes = {
  cardId: PropTypes.string.isRequired,
  gp: PropTypes.object.isRequired
}

export default GPCard;
