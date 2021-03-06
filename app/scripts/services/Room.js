(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        return {
            all: rooms,
            addRoom: function(name){
            rooms.$add(name);   
            }    
        };
  }

  angular
    .module('boringChat')
    .factory('Room', ['$firebaseArray', Room]);
})();