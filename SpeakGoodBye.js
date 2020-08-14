(function(window){
  var byeSpreaker = new Object();
  var speakWord = "Good Bye";

  byeSpreaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  window.helloSpreaker = helloSpreaker;
})(window);
