import React from 'react';
import { Link } from 'react-router';

class CityListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { hoverClass: "hidden" };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hoverClass: "showCity" });
  }

  handleMouseLeave() {
    this.setState({ hoverClass: "hidden" });
  }

  render() {
    const {city} = this.props;
    return (
      <li className="city-list-item">
        <div className="city-list-div">
          <Link to={`/city/${city.id}/event`} >
            <img className="city-img" src={city["background_image_url"]}
              onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
            <p className={this.state.hoverClass}>{city["name"]}</p>
          </Link>
        </div>
      </li>
    );
  }
}

export default CityListItem;
