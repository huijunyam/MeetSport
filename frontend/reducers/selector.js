export const checkMembership = (members, currentUser) => {
  // debugger;
  for (let i = 0; i < members.length; i++) {
    if (members[i].username === currentUser.username) {
      return true;
    }
  }
  return false;
};
