(function() {

  angular.module('music-box')
         .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
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
           .then(function(res){
             albums = res.data.albums;
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getAll(){
      return albums;
    }

    function getByID(index, album){}
    function create(newAlbum){}
    function updateOne(index, updatedAlbum){}
    function deleteOne(index, deletedAlbum){}

  }

}());
