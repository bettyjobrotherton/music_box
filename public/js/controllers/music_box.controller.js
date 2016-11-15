(function() {

  angular.module('music-box')
         .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['$scope', 'AlbumService'];

  function AlbumController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.createAlbum = createAlbum;

    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums = AlbumService.get();
    });

    function createAlbum(newAlbum){
      AlbumService.create(newAlbum);
      $scope.newAlbum = [];
    }

  }

}());
