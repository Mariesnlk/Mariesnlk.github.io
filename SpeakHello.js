(function(window){
  var helloSpreaker = new Object();
  var speakWord = "Hello";

  helloSpreaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  window.helloSpreaker = helloSpreaker;
})(window);
