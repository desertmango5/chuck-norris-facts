/*

Random quote generator. Maybe a Chuck Norris Random Joke Generator??

*/


$(document).ready(function() {

	var quote = {

		setup: function() {
			$.getJSON('https://api.icndb.com/jokes/random/', function(data) {
					var quoteData = data.value.joke;
					$('#quote').html(quoteData);
					
					var hashtags = "&hashtags=ChuckNorrisFacts,FCC";
					var tweetURL = "https://twitter.com/intent/tweet?text=" + quoteData + hashtags;

					$('#tweet').attr("href", tweetURL);
	  	});
		},
		random: function() {
			this.setup();
		}		
	};

	$('#random').on('click', function() {
			quote.random();
		});

	quote.random();	



});


// var tweetURL = "https://twitter.com/intent/tweet?text=" + quoteData + "?hashtags=chuchnorrisfacts"

 // var tweetURL = `'https://twitter.com/intent/tweet?text=${quoteData}?hashtags=chuchnorrisfacts'`

console.log()

