angular.module('generateWordsApp', []).controller(
		'GeneratorController',
		function() {
			var generator = this;
			generator.initials = [ {
				text : "th",
				freq: 1
			}, {
				text : "s",
				freq: 2
			}, {
				text : "t",
				freq: 1
			} ];
			generator.medials = [ {
				text : "a",
				freq: 1
			}, {
				text : "e",
				freq: 3
			} ];
			generator.finals = [ {
				text : "n",
				freq: 1
			}, {
				text : "m",
				freq: 2
			} ];
			generator.words = [];
			generator.numWords = 20;
			generator.minSyll = 1;
			generator.maxSyll = 5;

			generator.addInitial = function() {
				if(!generator.initialText)
					generator.initialText = "*blank*";
				var dupes = $.grep(generator.initials, function(e){ return e.text == generator.initialText; });
				if(dupes.length > 0 && generator.initials.indexOf(dupes[0]) != -1) {
					var index = generator.initials.indexOf(dupes[0]);
					generator.initials[index].freq ++;
				}
				else {
				generator.initials.push({
					text : generator.initialText,
					freq: 1
				});
				}
				generator.initialText = '';
			};

			generator.addMedial = function() {
				if(!generator.medialText)
					generator.medialText = "*blank*";
				var dupes = $.grep(generator.medials, function(e){ return e.text == generator.medialText; });
				if(dupes.length > 0 && generator.medials.indexOf(dupes[0]) != -1) {
					var index = generator.medials.indexOf(dupes[0]);
					generator.medials[index].freq ++;
				}
				else {
				generator.medials.push({
					text : generator.medialText,
					freq: 1
				});
				}
				generator.medialText = '';
			};

			generator.addFinal = function() {
				if(!generator.finalText)
					generator.finalText = "*blank*";
				var dupes = $.grep(generator.finals, function(e){ return e.text == generator.finalText; });
				if(dupes.length > 0 && generator.finals.indexOf(dupes[0]) != -1) {
					var index = generator.finals.indexOf(dupes[0]);
					generator.finals[index].freq ++;
				}
				else {
				generator.finals.push({
					text : generator.finalText,
					freq: 1
				});
				}
				generator.finalText = '';
			};
			
			generator.deleteInitial = function(toDelete) {
				var index = generator.initials.indexOf(toDelete);
				generator.initials.splice(index, 1);
			};
			
			generator.deleteMedial = function(toDelete) {
				var index = generator.medials.indexOf(toDelete);
				generator.medials.splice(index, 1);
			};
			
			generator.deleteFinal = function(toDelete) {
				var index = generator.finals.indexOf(toDelete);
				generator.finals.splice(index, 1);
			};

			generator.generateWords = function() {
				generator.words = [];
				var newInitials = [];
				var newMedials = [];
				var newFinals = [];
				
				for(var i = 0; i < generator.initials.length; i++) {
					for(var j = 0; j < generator.initials[i].freq; j++)
						newInitials.push(generator.initials[i].text);
				}
				for(var i = 0; i < generator.medials.length; i++) {
					for(var j = 0; j < generator.medials[i].freq; j++)
						newMedials.push(generator.medials[i].text);
				}
				for(var i = 0; i < generator.finals.length; i++) {
					for(var j = 0; j < generator.finals[i].freq; j++)
						newFinals.push(generator.finals[i].text);
				}
				for (var i = 0; i < generator.numWords; i++) {
					var word = "";
					var numSyllRand = Math.floor(Math.random() * (generator.maxSyll - generator.minSyll + 1)) + generator.minSyll;
					for (var j = 0; j < numSyllRand; j++) {
						var initialRand = Math.floor(Math.random()
								* newInitials.length);
						var medialRand = Math.floor(Math.random()
								* newMedials.length);
						var finalRand = Math.floor(Math.random()
								* newFinals.length);
						word += (newInitials[initialRand] == "*blank*" ? "" : newInitials[initialRand]) + (newMedials[medialRand] == "*blank*" ? "" : newMedials[medialRand]) + (newFinals[finalRand] == "*blank*" ? "" : newFinals[finalRand]);
					}
					generator.words.push({
						text : word
					});
				}
			};
		});
