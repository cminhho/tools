 var iframe = document.getElementById('iframe');
      var angularapp = angular.module('myApp', ['ngSanitize']);
      angularapp.controller('FieldCtrl', function ($scope, $sce) {
        var iframeclass = '';
        $scope.loadTemplate = function() {
          if ($scope.template.length > 0) {
            // add iframe classs
            iframeclass = $scope.template.split('.')[0];
            iframe.classList.add(iframeclass);
            $scope.activeTemplate = $sce.trustAsResourceUrl($scope.template);
          } else {
            iframe.classList.remove(iframeclass);
          };
        };
      });
      // custom directive
      angularapp.directive('myChange', function() {
        return function(scope, element) {
          element.bind('input', function() {
            // the iframe function
            iframe.contentWindow.update({
              name: element[0].name,
              value: element[0].value
            });
          });
        };
      });