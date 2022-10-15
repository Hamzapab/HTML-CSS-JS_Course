
(function(){
  console.log("from speakGoodbye")
  var speakWord = "Good Bye";
  var byeSpeaker = function speak(name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})();

