function playNew() {
	var url ='/android_asset/audio/inception.mp3';
	// Play the audio file at url
	    var my_media = new Media(url,
	        // success callback
	        function() {
	            console.log("playAudio():Audio Success");
	        },
	        // error callback
	        function(err) {
	            console.log("playAudio():Audio Error: "+err);
	    });
	
	    // Play audio
	   // navigator.notification.vibrate(1600);
	    my_media.play();
	   
	    
}

function im(element, image) {
	element.src=image
}