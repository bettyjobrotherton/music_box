(function() {

  angular.module('music-box')
         .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$scope', 'AlbumService'];

  function AlbumController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.createAlbum = createAlbum;
    $scope.editAlbum = editAlbum;
    $scope.updateAlbum = updateAlbum;
    $scope.deleteAlbum = deleteAlbum;
    $scope.goToAlbum = goToAlbum;

    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums = AlbumService.get();
    });

    function createAlbum(newAlbum){
      AlbumService.create(newAlbum);
      AlbumService.get();
      $scope.newAlbum = [];
    }

    function editAlbum(album){
      album.isBeingEdited = true;
    }

    function updateAlbum(index, album){
      AlbumService.update(index, album);
      album.isBeingEdited = false;
    }

    function deleteAlbum(index, album){
      AlbumService.delete(index, album);
    }

    function goToAlbum(index, album){
      AlbumService.getByID(index, album);
    }

  }

}());
