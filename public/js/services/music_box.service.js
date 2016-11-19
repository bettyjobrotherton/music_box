(function() {

  angular.module('music-box')
         .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();

    var albums = [];
    var selectedAlbum = [];

    return {
      get: getAllAlbums,
      getOne: getByID,
      select: select,
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
            selectedAlbum = res.data.album;
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function select(){
      return selectedAlbum;
    }

    function create(newAlbum){
      $http.post('/albums', newAlbum)
           .then(function(){
             albums.push(newAlbum);
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function updateOne(index, updatedAlbum){
      $http.put('/albums/' + updatedAlbum._id, updatedAlbum)
           .then(function(){
             albums.splice(index, 1, updatedAlbum);
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function deleteOne(index, deletedAlbum){
      $http.delete('/albums/' + deletedAlbum._id)
           .then(function(){
             albums.splice(index, 1);
           })
           .catch(function(err){
             console.log(err);
           });
    }

  }

}());
