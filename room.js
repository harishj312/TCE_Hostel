    var room_numA1=["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"];
    var room_numA2=["A11","A12","A13","A14","A15","A16","A17","A18","A19","A20"];
    var room_numA3=["A21","A22","A23","A24","A25","A26","A27","A28","A29","A30"];
    var room_numB1=["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10"];
    var room_numB2=["B11","B12","B13","B14","B15","B16","B17","B18","B19","B20"];
    var room_numB3=["B21","B22","B23","B24","B25","B26","B27","B28","B29","B30"];
    angular.module("myApp",[])
    .controller("firstCtrl",firstCtrl)
    .controller("secondCtrl",secondCtrl);
    firstCtrl.$inject=['$scope'];
    secondCtrl.$inject=['$scope'];
    function firstCtrl($scope){
        $scope.changeblock=function(block){
            $scope.bl=block;
            if($scope.bl=='A'){
                $scope.changeroom=function(x){
                    $scope.num=x;
                    if($scope.num==0){
                        $scope.room_num=room_numA1;
                    }
                    else if($scope.num==1){
                        $scope.room_num=room_numA2;
                    }
                    else if($scope.num==2){
                        $scope.room_num=room_numA3;
                    }
                }
            }
            else if($scope.bl=='B'){
                $scope.changeroom=function(x){
                    $scope.num=x;
                    if($scope.num==0){
                        $scope.room_num=room_numB1;
                    }
                    else if($scope.num==1){
                        $scope.room_num=room_numB2;
                    }
                    else if($scope.num==2){
                        $scope.room_num=room_numB3;
                    }
                }
            }
        }
    }
    function secondCtrl($scope){
        $scope.addvalue = function(element) {
            $scope.val=5;
            $scope.btnval = element.currentTarget.value;
         };
    }