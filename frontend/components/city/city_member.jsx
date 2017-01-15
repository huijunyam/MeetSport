import React from 'react';
import { Link } from 'react-router';

class CityMember extends React.Component {
  render() {
    return (
      <ul className="member-container">
        {this.props.members.map(member => (
          <li className="member-list" key={`member-${member.id}`}>
            <div>{<img className="member-image" src={member.profile_img}></img>}</div>
            <Link to={`/users/show/${member.id}`}><h3 className="member-name">{member.name}</h3></Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default CityMember;
