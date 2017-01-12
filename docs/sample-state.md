```
{
  session: {
    currentUser: {
      id: 1,
      username: "guest",
      name: "guest",
      emailAddress: "guest@gmail.com",
      profile_pic ="profile_pic_url"
    },
    errors: ["Password is invalid"]
  },
  cities: {
    1: {
      id: 1,
      name: "San Francisco",
      background_image_url: "background_url",
      members: [
        1: {
          userId: 8,
          username: "johnny",
          name: "Johnny Hill",
          emailAddress: "johnnyhill@yahoo.com"
          profile_pic ="profile_pic_url1"
        },
        2: {
          userId: 10,
          username: "sarah",
          name: "Sarah Melon",
          emailAddress: "sarahmelon@gmail.com"
          profile_pic ="profile_pic_url2"
        }
      ],
      events: {
        1: {
          eventId: 1,
          name: "Basketball 3 v 3",
          city: "San Francisco",
          location: "Mission Creek Park, 401 Berry St",
          category: "basketball",
          level: "intermediate",
          date: "Jan 11, 2017",
          startTime: "4:00 PM",
          endTime:  "6:00 PM",
          host: {
            userId: 8
          },
          description: "Come join us in playing 3 v 3 basketball",
          attendeesNum: 10,
          attending: {
            1: {
              userId: 10
            },
            2: {
              userId: 1
            }
          }
        }
      }
    },
    2: {
      id: 2,
      name: "Los Angeles",
      background_image_url: "background_url2"
    }
  },
  cityDetail: {
    membershipId: 1,
    name: "San Francisco",
    background_image_url: "background_url",
    members: [
      1: {
        userId: 8,
        username: "johnny",
        name: "Johnny Hill",
        emailAddress: "johnnyhill@yahoo.com"
        profile_pic ="profile_pic_url1"
      },
      2: {
        userId: 10,
        username: "sarah",
        name: "Sarah Melon",
        emailAddress: "sarahmelon@gmail.com"
        profile_pic ="profile_pic_url2"
      }
    ],
    events: {
      1: {
        eventId: 1,
        name: "Basketball 3 v 3",
        city: "San Francisco",
        location: "Mission Creek Park, 401 Berry St",
        category: "basketball",
        level: "intermediate",
        date: "Jan 11, 2017",
        startTime: "4:00 PM",
        endTime:  "6:00 PM",
        host: {
          userId: 8
        },
        description: "Come join us in playing 3 v 3 basketball",
        attendeesNum: 10,
        attending: {
          1: {
            userId: 10
          },
          2: {
            userId: 1
          }
        }
      }
    }
  }
}
```
