$ ("document").ready(function () {
	var words = ["testje","test2","test3","test4"], i = 0; 



	// $('#imageFade').hide().fadeIn(2000);
	// $('#welcomeText').hide().delay(2000).fadeIn(1800);
	
	



$('.scrollspy').scrollSpy();

}); 

(function(){
    var words = [
        'Velkommen',
        'Bienvenue',
        'Welkom',
        'Wilkommen',
        'bienvenida',
        '歡迎'
        ], i = 0;
    setInterval(function(){
        $('#changeWords').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2000);
})();