!(function () {
    angular.module("hms", [])
      .controller("breakfast", function (mess) {
        var breakfast=this;
        breakfast.food=[{Day:'Monday',food:'Idli'},
        {Day:'Tuesday',food:'Idli'},
        {Day:'Wednesday',food:'Idli'},
        {Day:'Thursday',food:'Idli'},
        {Day:'Friday',food:'Idli'},
        {Day:'Saturday',food:'Idli'},
        {Day:'Sunday',food:'Idli'},
      ];
        breakfast.value=true;
        breakfast.change=function(){
          window.alert('Hi');
          mess.show(breakfast.value);
        }
      })
      .controller("lunch", function (mess) {
        var lunch=this;
        lunch.food=[{Day:'Monday',food:'Idli'},
        {Day:'Tuesday',food:'Idli'},
        {Day:'Wednesday',food:'Idli'},
        {Day:'Thursday',food:'Idli'},
        {Day:'Friday',food:'Idli'},
        {Day:'Saturday',food:'Idli'},
        {Day:'Sunday',food:'Idli'},
      ];
        lunch.value=true;
        lunch.change=function(){
          window.alert('Hi');
          mess.show(lunch.value);
          
        }
      })
      .controller("dinner", function (mess) {
        var dinner=this;
        dinner.food=[{Day:'Monday',food:'Idli'},
        {Day:'Tuesday',food:'Idli'},
        {Day:'Wednesday',food:'Idli'},
        {Day:'Thursday',food:'Idli'},
        {Day:'Friday',food:'Idli'},
        {Day:'Saturday',food:'Idli'},
        {Day:'Sunday',food:'Idli'},
      ];
        dinner.value=true;
        dinner.change=function(){
          window.alert('Hi');
          mess.show(dinner.value);
          
        }
      })
      .service('mess',function(){
          var service=this;
          service.show=function(value){
            value=!value;
          };
      })
  })();
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  