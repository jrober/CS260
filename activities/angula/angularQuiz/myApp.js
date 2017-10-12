var app = angular.module("famHist",[]);
			app.controller('famHistCtrl',function($scope){
				$scope.famHistList = [];
				$scope.remove = function(){
					var oldlist = $scope.famHistList;
					$scope.famHistList = [];
					angular.forEach(oldlist,function(x){
						if(!x.done){
							$scope.famHistList.push(x);
						}
					});
				}
				$scope.famHistAdd = function() {
					var famObject = {
						famHistPerson: $scope.inputPerson,
						famHistFather: $scope.inputFather,
						famHistMother: $scope.inputMother,
						done:false
					}
					console.log(famObject);
					$scope.famHistList.push(famObject);
					$scope.inputPerson = '';
					$scope.inputFather = '';
					$scope.inputMother = '';
				}


			});
