var app = angular.module("loveCalc",[]);
			app.controller('loveCalcCtrl',function($scope, $http){
				$scope.famHistList = [];
				$scope.submit = function() {
					var person1 = $scope.inputPerson1;
					var person2 = $scope.inputPerson2;
					var url = "https://love-calculator.p.mashape.com/getPercentage?fname="+person1+"&sname="+person2;
					console.log(url); 
                    $http.get(url, {headers: {'X-Mashape-Key' : 'IuxvfEDS1hmsh76W0o1MUGx80TAqp1PjolSjsnBqVhQyZMRVmI'}}).then(function (response) {
                        console.log(response); 
                        $scope.fname = response.data.fname.toUpperCase();
                        $scope.sname = response.data.sname.toUpperCase();
                        $scope.percentage = "Compatability: "+response.data.percentage+ " %";
                        console.log(response.data.percentage);
                        if(parseInt(response.data.percentage) > 50){
                        	$scope.status = "loves";
                        } else{
                        	$scope.status = "doesn't love";
                        }
                        $scope.result = response.data.result;
                    });
					$scope.inputPerson1 = '';
					$scope.inputPerson2 = '';
				}


			});
