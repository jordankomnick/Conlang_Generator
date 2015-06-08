angular.module('generateWordsApp', []).controller(
		'GeneratorController',
		function() {
			var generator = this;
			generator.initials = [ {
				text : "th"
			}, {
				text : "s"
			}, {
				text : "t"
			} ];
			generator.medials = [ {
				text : "a"
			}, {
				text : "e"
			} ];
			generator.finals = [ {
				text : "n"
			}, {
				text : "m"
			} ];
			generator.words = [];
			generator.numWords = 20;
			generator.minSyll = 1;
			generator.maxSyll = 5;

			generator.addInitial = function() {
				generator.initials.push({
					text : generator.initialText
				});
				generator.initialText = '';
			};

			generator.addMedial = function() {
				generator.medials.push({
					text : generator.medialText
				});
				generator.medialText = '';
			};

			generator.addFinal = function() {
				generator.finals.push({
					text : generator.finalText
				});
				generator.finalText = '';
			};

			generator.generateWords = function() {
				for (var i = 0; i < generator.numWords; i++) {
					var word = "";
					var numSyllRand = Math.floor(Math.random() * (generator.maxSyll - generator.minSyll + 1)) + generator.minSyll;
					console.log(numSyllRand);
					for (var j = 0; j < numSyllRand; j++) {
						var initialRand = Math.floor(Math.random()
								* generator.initials.length);
						var medialRand = Math.floor(Math.random()
								* generator.medials.length);
						var finalRand = Math.floor(Math.random()
								* generator.finals.length);
						word += generator.initials[initialRand].text + generator.medials[medialRand].text + generator.finals[finalRand].text;
					}
					generator.words.push({
						text : word
					});
				}
			};
		});
