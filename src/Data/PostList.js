import userslist from "UsersList";
let postslist = {
  "V.K@vstu.by": [
    {
      dataTime: new Date(2018, 12, 15, 16, 31, 20),
      user: userslist["V.K@vstu.by"],
      likes: {
        "I.I@vstu.by": userslist["I.I@vstu.by"]
      },
      content: "Admin is heer",
      pic: ""
    },
    {
      dataTime: new Date(2018, 12, 15, 16, 36, 20),
      user: userslist["V.K@vstu.by"],
      likes: {
        "I.I@vstu.by": userslist["I.I@vstu.by"]
      },
      content: "Admin`s first post",
      pic: "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
    }
  ],
  "I.I@vstu.by": [
    {
      dataTime: new Date(2018, 12, 15, 16, 31, 20),
      user: userslist["I.I@vstu.by"],
      likes: {},
      content: "I am heer",
      pic: ""
    },
    {
      dataTime: new Date(2018, 12, 15, 16, 36, 20),
      user: userslist["I.I@vstu.by"],
      likes: {
        "V.K@vstu.by": userslist["V.K@vstu.by"]
      },
      content: "Ivan`s first post",
      pic: "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
    }
  ]
};
export default postslist;
