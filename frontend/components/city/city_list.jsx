import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import CityListItem from './city_list_item';
import SearchBar from '../search/search_container';

class CityList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="sub-header">
          <h2>Choose a City</h2>

          <p>Explore all the sport events that happen in your city</p>
        </div>
        <div className="search-bar">
          
        </div>
        <div className="city-list-container">
          <ul className="citylist">
            {this.props.cities.map(city => (<CityListItem key={city.id} city={city} />))}
          </ul>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default CityList;
