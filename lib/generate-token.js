const uuid = require('uuid/v4');
module.exports = function generateToken (session, user) {
  const expireddate = new Date();
  expireddate.setHours(expireddate.getHours() + 2);
  const data = {
    username: user.username,
    token: uuid(),
    expired: expireddate,
    status: true,
  };

  return session.factory('token').insert(data).save();
};
