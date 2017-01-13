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
