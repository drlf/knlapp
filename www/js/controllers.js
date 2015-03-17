"use strict";

angular.module('starter.controllers', ['lbServices'])

.controller('FilelistsCtrl', function($scope, $stateParams, File) {
	var filePath = $stateParams.path;
	$scope.fileList = [];
	$scope.curPath = (typeof filePath == 'undefined')? "/" : filePath;
	
	//设置文件目录列表显示内容
    var getFileList = function ( path ){
        File.list({path: path})
        .$promise
        .then(function (results) {
            $scope.fileList = results.nodes;
            //$scope.curPath = path;
        });
    };
  getFileList($scope.curPath);
  
})

.controller('FileviewCtrl', function($scope, $stateParams, File) {
	$scope.fileContent = '';
	$scope.fileName = '';
	var filePath = $stateParams.path;
	$scope.fileName = getFileName(filePath);
	loadFile(filePath);
	//从服务器获取文件内容，放入$scope.fileContent
    function loadFile(filePath){
        //console.log();
        File.get({file: {path: filePath, type: 'html'}})
        .$promise
        .then(function (results) {
            $scope.fileContent = results.file.content;
            
        });
    };
  //从目录中获取文件名
    function getFileName(path){
        if(path == '/')return '/';
        var index = path.lastIndexOf('/');
        if(index<=0)return '/'
         return path.substr(index +1, path.length);
    }
});
