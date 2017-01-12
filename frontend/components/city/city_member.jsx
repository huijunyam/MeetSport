import React from 'react';

class CityMember extends React.Component {
  render() {
    return (
      <ul className="member-container">
        {this.props.members.map(member => (
          <li className="member-list" key={`member-${member.id}`}>
            <div>{<img className="member-image" src={member.profile_img}></img>}</div>
            {<h3>{member.name}</h3>}
          </li>
        ))}
      </ul>
    );
  }
}

export default CityMember;
