(function() {

  angular.module('musicBox')
         .factory('albumService', albumService);

  albumService.$inject = ['$http'];

  function albumService($http){
    init();

    var albums = [];

    return {
      get: getAll,
      select: getByID,
      create: create,
      update: updateOne,
      delete: deleteOne
    };

    function init(){
      $http.get('/albums')
           .then(function(response){
             albums = response.data.albums;
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getAll(){}
    function getByID(index, album){}
    function create(newAlbum){}
    function updateOne(index, updatedAlbum){}
    function deleteOne(index, deletedAlbum){}

  }

}());
