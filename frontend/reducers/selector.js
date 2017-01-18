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

export const checkHost = (host, currentUser) => {
  if (currentUser === null) {
    return false;
  }
  return currentUser.username === host.username;
};

export const checkMember = (members, currentUser) => {
  if (currentUser === null) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (currentUser.username === members[i].username) {
      return true;
    }
  }
  return false;
};

export const convertDateTime = (date, time) => {
  let dateArr = date.split("/");
  let year = dateArr.pop();
  dateArr.unshift(year);

  for (let i = 0; i < dateArr.length; i++) {
    if (dateArr[i].length < 2) {
      dateArr[i] = "0" + dateArr[i];
    }
  }

  let dateStr = dateArr.join("-");
  dateStr = dateStr + "T";
  let timeArr = time.split(" ");
  let hour = timeArr[0].split(":");
  if (timeArr[1] === "PM") {
    dateStr = dateStr + ((parseInt(hour[0]) + 12).toString()) + ":" + (hour[1]) + ":00.000Z";
  } else {
    if (hour[0].length === 1) {
      dateStr = dateStr + "0" + hour[0] + ":" + hour[1] + ":00.000Z";
    } else {
      dateStr = dateStr + hour[0] + ":" + hour[1] + ":00.000Z";
    }
  }
  return dateStr;
};
