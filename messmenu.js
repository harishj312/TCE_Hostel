!(function () {
    angular
      .module("hms", [])
      .controller("controller1", function ($scope) {
        $scope.food = [
          { Day: "Monday", Breakfast: "Idli", Lunch:"Sambar Rice",Dinner:"Dosa" },
          { Day: "Tuesday", Breakfast: "Poori", Lunch:"Briyani",Dinner:"Dosa" },
          { Day: "Wednesday", Breakfast: "Idli", Lunch:"Vegetable Rice",Dinner:"Chappathi" },
          { Day: "Thursday", Breakfast: "Pongal", Lunch:"Mushroom Briyani",Dinner:"Parotta" },
          { Day: "Friday", Breakfast: "Idli", Lunch:"Sambar Rice",Dinner:"Idli" },
          { Day: "Saturday", Breakfast: "Idli", Lunch:"Tomato Rice",Dinner:"Dosa" },
          { Day: "Sunday", Breakfast: "Idli", Lunch:"Sambar Rice",Dinner:"Dosa" },
        ];
      })
  })();
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  