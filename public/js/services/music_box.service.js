(function() {

  angular.module('music-box')
         .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();

    var albums = [];
    var selectedAlbum;

    return {
      get: getAllAlbums,
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

    function getAllAlbums(){
      return albums;
    }

    function getByID(index, album){
      $http.get('/albums/' + album._id)
           .then(function(res){
            selectedAlbum = res.data.albums;
           })
           .catch(function(err){
             console.log(err);
           });
    }
    function create(newAlbum){
      $http.post('/albums', newAlbum)
           .then(function(res){
             albums.push(newAlbum);
           })
           .catch(function(err){
             console.log(err);
           });
    }
    function updateOne(index, updatedAlbum){}
    function deleteOne(index, deletedAlbum){}

  }

}());
