(function() {

  angular.module('music-box')
         .controller('AlbumDetailController', AlbumDetailController);

  AlbumDetailController.$inject = ['$scope', 'AlbumService'];

  function AlbumDetailController($scope, AlbumService){
    $scope.album = AlbumService.select();

  }

}());
