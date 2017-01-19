import React from 'react';
import { Link } from 'react-router';

class CityMember extends React.Component {
  convertTimefromX(created_date) {
    let date = created_date;
    let dateIdx = date.indexOf("T");
    let dateArr = date.slice(0, dateIdx).split("-");
    dateArr.push(dateArr.shift());
    return dateArr.join("/");
  }

  render() {
    return (
      <ul className="member-container">
        {this.props.members.map(member => (
          <li className="member-list" key={`member-${member.id}`}>
            <div><Link to={`/users/show/${member.id}`}>{<img className="member-image" src={member.profile_img}></img>}</Link></div>
            <div>
              <Link to={`/users/show/${member.id}`}><h3 className="member-name">{member.name}</h3></Link>
              <p className="member-join-date">Joined by: {this.convertTimefromX(member.created_at)}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CityMember;
