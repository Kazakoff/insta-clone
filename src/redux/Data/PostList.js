import userslist from './UsersList';

const postslist = {
  'V.K@vstu.by': [
    {
      dataTime: new Date(2018, 12, 15, 16, 31, 20),
      user: userslist['V.K@vstu.by'],
      likes: {
        'I.I@vstu.by': userslist['I.I@vstu.by']
      },
      content: { ddd: 'Admin is heer' },
      pic: 'http://isap.vstu.by/application/files/6915/4356/5692/kazakov.JPG'
    },
    {
      dataTime: new Date(2018, 12, 15, 16, 36, 20),
      user: userslist['V.K@vstu.by'],
      likes: {
        'I.I@vstu.by': userslist['I.I@vstu.by']
      },
      content: 'Admin`s first post',
      pic: 'http://isap.vstu.by/application/files/5015/4537/3353/153_1.jpg'
    }
  ],
  'I.I@vstu.by': [
    {
      dataTime: new Date(2018, 12, 15, 16, 31, 20),
      user: userslist['I.I@vstu.by'],
      likes: {},
      content: 'I am heer',
      pic: ''
    },
    {
      dataTime: new Date(2018, 12, 15, 16, 36, 20),
      user: userslist['I.I@vstu.by'],
      likes: {
        'V.K@vstu.by': userslist['V.K@vstu.by']
      },
      content: 'Ivan`s first post',
      pic: 'http://isap.vstu.by/application/files/2015/4582/2666/news.JPG'
    }
  ]
};
export default postslist;
