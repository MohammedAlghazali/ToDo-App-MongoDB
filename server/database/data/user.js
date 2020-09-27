const User = require('../models/user');

module.exports = async () => {
  const user = [
    {
      name: 'mohammed',
      email: 'mohammedEmail',
      password: 'mohammedPassword',
      todo: [
        {
          title: 'mohammedTitle01',
          description: 'mohammedDescription01',
        },
        {
          title: 'mohammedTitle02',
          description: 'mohammedDescription02',
        },
        {
          title: 'mohammedTitle03',
          description: 'mohammedDescription03',
        },
      ],
    },
    {
      name: 'mohammed1',
      email: 'mohammedEmail1',
      password: 'mohammedPassword1',
      todo: [
        {
          title: 'mohammedTitle11',
          description: 'mohammedDescription11',
        },
        {
          title: 'mohammedTitle12',
          description: 'mohammedDescription12',
        },
        {
          title: 'mohammedTitle13',
          description: 'mohammedDescription13',
        },
      ],
    },
  ];
  await User.create(user);
};
