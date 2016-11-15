(function() {

  angular.module('music-box')
         .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();

    var albums = [];

    return {
      get: getAllAlbums,
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

    function getAllAlbums(){
      return albums;
    }

    function getByID(index, album){}
    function create(newAlbum){}
    function updateOne(index, updatedAlbum){}
    function deleteOne(index, deletedAlbum){}

  }

}());
