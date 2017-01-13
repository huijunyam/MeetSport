export const checkMembership = (members, currentUser) => {
  if (currentUser === null) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (members[i].username === currentUser.username) {
      return true;
    }
  }
  return false;
};

export const getMembershipId = ({cityDetail}, currentUser, id) => {
  if (currentUser === null) {
    return null;
  }

  for (let i = 0; i < cityDetail.memberships.length; i++) {
    if (currentUser.id === cityDetail.memberships[i].member_id) {
      return cityDetail.memberships[i];
    }
  }
  return null;
};

export const getAttendeeId = ({eventDetail}, currentUser, id) => {
  if (currentUser === null) {
    return null;
  }

  for (let i = 0; i < eventDetail.attendees.length; i++) {
    if (currentUser.id === eventDetail.attendees[i].attendee_id) {
      return eventDetail.attendees[i];
    }
  }
  return null;
};

export const checkAttendee = (attendees, currentUser) => {
  if (currentUser === null) {
    return false;
  }

  for (let i = 0; i < attendees.length; i++) {
    if (attendees[i].username === currentUser.username) {
      return true;
    }
  }
  return false;
};
