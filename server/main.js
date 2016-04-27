import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    getMyIp: function()
    {
        return HTTP.get("http://ipinfo.io/ip/").content;
    }
})