const request = require('superagent');
// const config = require('../config');
const debug = require('debug')('notification');
class Notification {
  constructor (config = {}) {
    const { urlNotification } = config;
    this.baseUrl = urlNotification;
  }

  send ({ client, receiver = [], sender, types = [], title, message, url, token }) {
    if (!Array.isArray(types)) {
      types = [types];
    }

    if (!Array.isArray(receiver)) {
      receiver = [receiver];
    }
    try {
      types.forEach(type => {
        receiver.forEach(receive => {
          debug({ client, receiver: receive, sender, types: type, title, message, url, token });
          const req = request.post(`${this.baseUrl}/api/action`);
          if (token) {
            req.set('Authorization', `Bearer ${token}`);
          }
          req.send({ client, receiver: receive, sender, types: type, title, message, url })
            .then(res => {
              debug('success', res);
            }).catch(e => {
              debug('error', e);
            });
        });
      });
    } catch (e) {
      console.error(e);
      return false;
    }

    return true;
  }
}

module.exports = Notification;
module.exports.notification = new Notification();
