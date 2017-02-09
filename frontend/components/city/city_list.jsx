import React from 'react';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';
import CityListItem from './city_list_item';

class CityList extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  redirect() {
    this.props.router.push('/cities/search');
  }

  handleChange(e) {
    this.setState({search: e.target.value});
    this.props.fetchSearch((e.target.value).toLowerCase()).then(() => this.redirect());
  }

  handleClick() {
    this.props.fetchSearch(this.state.search.toLowerCase()).then(() => this.redirect());
  }

  render() {
    return (
      <div className="align-footer">
        <div>
          <HeaderContainer />
          <div className="sub-header">
            <h2>Choose a City</h2>

            <p>Explore all the sport events that happen in your city</p>
          </div>
          <form className="search-bar">
            <input type="text"
              placeholder="Search by Sport Category (ex: racquet sport, basketball...)"
              value={this.state.search}
              onChange={this.handleChange}
              className="search-input" />

          </form>
          <div className="search-result">
            {this.props.children}
          </div>
          <div className="city-list-container">
            <ul className="citylist">
              {this.props.cities.map(city => (<CityListItem key={city.id} city={city} />))}
            </ul>
          </div>
          <div className="city-list-footer">
            <h3>Don't see your city?</h3>
            <p>Hang in there! We will get there soon.</p>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default CityList;
