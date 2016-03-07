angular.module('comments').factory('Gravatar', function GravatarFactory(){
  var avatarSize = 250;
  var gravatarUrl = 'http://gravatar.com/avatar/';
  return  function(email){
      var hash;
      if (email === void 0) {
          email = '';
      }
      hash = email.trim();
      hash = hash.toLowerCase();
      hash = md5(hash);

      return gravatarUrl + hash + '?s='+avatarSize.toString();
  }
});
