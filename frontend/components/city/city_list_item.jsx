import React from 'react';
import { Link } from 'react-router';

class CityListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {city} = this.props;
    return (
      <li className="city-list-item" >
        <div className="city-list-div">
          <Link to={`/city/${city.id}`} >
            <img className="city-img" src={city["background_image_url"]} />
            <p className="city-name-list">{city["name"]}</p>
          </Link>
        </div>
      </li>
    );
  }
}

export default CityListItem;
