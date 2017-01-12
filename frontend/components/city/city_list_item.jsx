import React from 'react';
import { Link } from 'react-router';

class CityListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {city} = this.props;
    // debugger
    return (
      <li className="city-list-item">
        <div className="city-list-div">
          <Link to={`/city/${city.id}`} >
            <img className="city-img" src={city["background_image_url"]}/>
          </Link>
          <p className="city-name">{city["name"]}</p>
        </div>
      </li>
    );
  }
}

export default CityListItem;
