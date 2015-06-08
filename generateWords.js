
angular.module('generateWordsApp', [])
  .controller('GeneratorController', function() {
    var generator = this;
    generator.initials = [{text: "th"}, {text: "s"}, {text: "t"}];
    generator.medials = [{text: "a"}, {text: "e"}];
    generator.finals = [{text: "n"}, {text: "m"}];
    generator.words = [];
 
    generator.addInitial = function() {
        generator.initials.push({text:generator.initialText});
        generator.initialText = '';
    };
    
    generator.addMedial = function() {
    	generator.medials.push({text:generator.medialText});
        generator.medialText = '';
    };
    
    generator.addFinal = function() {
    	generator.finals.push({text:generator.finalText});
        generator.finalText = '';
    };
    
    generator.generateWords = function() {
    	for(var i = 0; i < 20; i++) {
    		var initialRand = Math.floor(Math.random() * generator.initials.length); 
    		var medialRand = Math.floor(Math.random() * generator.medials.length); 
    		var finalRand = Math.floor(Math.random() * generator.finals.length);
    		var word = generator.initials[initialRand].text + generator.medials[medialRand].text + generator.finals[finalRand].text;
    		generator.words.push({text: word});
    	}
    	console.log(generator.words);
    };
  });

