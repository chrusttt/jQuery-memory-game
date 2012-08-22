/* Author:
Artur Chruszcz
*/




// memory card pics
var memo_cards = new Array('<img src="img/blue1.jpg" alt="azul">',
	'<img src="img/blue2.jpg" alt="azul">',
	'<img src="img/gray1.jpg" alt="cinza">',
	'<img src="img/gray2.jpg" alt="cinza">',
	'<img src="img/sun1.jpg" alt="sol">',
	'<img src="img/sun2.jpg" alt="sol">',
	'<img src="img/eye1.jpg" alt="olho">',
	'<img src="img/eye2.jpg" alt="olho">',
	'<img src="img/football1.jpg" alt="football">',
	'<img src="img/football2.jpg" alt="football">',
	'<img src="img/door1.jpg" alt="door">',
	'<img src="img/door2.jpg" alt="door">',
	'<img src="img/hat1.jpg" alt="hat">',
	'<img src="img/hat2.jpg" alt="hat">',
	'<img src="img/hair1.jpg" alt="hair">',
	'<img src="img/hair2.jpg" alt="hair">',
	'<img src="img/pool1.jpg" alt="pool">',
	'<img src="img/pool2.jpg" alt="pool">',
	'<img src="img/car1.jpg" alt="cat">',
	'<img src="img/cat2.jpg" alt="cat">'
)
var flipped = 0;
var points = 0;

// random order array
shuffle = function(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

Array.remove = function(array, from, to) {
  var rest = array.slice((to || from) + 1 || array.length);
  array.length = from < 0 ? array.length + from : from;
  return array.push.apply(array, rest);
};



/// main
$(function(){
	memo_cards = shuffle(memo_cards);
	
	for(i=1; i<22; i++){
		var card = "#card" + i +" .back";
		$(card).html(memo_cards[i-1]);}


		$('.card').click(function(){
			if($(this).attr('id') == 'flip1' || $(this).attr('id') == 'flip2' || $(this).hasClass('good')){
					// to do, click again on flipped card
			}
			else{
				$(this).toggleClass('flip');
					flipped = flipped + 1;
						if(flipped === 1){
							$('#flip1').removeAttr('id', 'flip1');
							$('#flip2').removeAttr('id', 'flip2');
							$(this).attr('id', 'flip1');
							}
						else if(flipped === 2){
							$(this).attr('id', 'flip2');
						if($(this).children('.back').children('img').attr('alt') === $('#flip1').children('.back').children('img').attr('alt')){
							$(this).addClass('good');
							$('#flip1').addClass('good');
							points++;
						}
						if(points === 10){
							$('body').css('opacity', '50%');
							confirm("you made it baby");
							document.location.reload();
						}
						flipped = 0;
						}
			}
});


	

});

