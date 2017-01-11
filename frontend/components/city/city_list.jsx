import React from 'react';
import CityListContainer from './city_list_container';
import HeaderContainer from '../layout/header_container';
import FooterContainer from '../layout/footer_container';

class CityIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
        <FooterContainer />
      </div>
    );
  }
}

export default CityIndex;
