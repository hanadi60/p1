$(function(){
	'use strict';
	//alert("welcome to js backend")
//Hide placeholder
$('[placeholder]').focus(function(){
//alert("welcome to js backend")
$(this).attr('data-text',$(this).attr('placeholder'));
$(this).attr('placeholder','');
//view placeholder
}).blur(function(){

$(this).attr('placeholder',$(this).attr('data-text'));
});

// ASTRIC
	$('input').each(function(){
		//alert("jhgfjhjhfjhjhgf");
		if($(this).attr('required')=='required'){

			$(this).after('<span class="ASTRIC">*</span>');
		}


	});

	
	// convert password to be shown
	var passField=$('.password');

	$('.showpass').hover(function(){

		passField.attr('type','text');

	},function(){

		passField.attr('type','password');
	});
// confirm delete
$('.confirm').click(function(){

	return confirm("Are You Sure");

});

$('.FULL').click(function(){
	//$('.Classic').removeClass('active');
			$('.FULL').addClass('activeFull');

			$('.full-view').fadeIn(200);
			});

			$('.Classic').click(function(){
			//$('.FULL').removeClass('active');
			$('.Classic').addClass('activeFull');

			$('.full-view').fadeOut(200);

});

// file to upload on change get full path
//$('input[type=file]').change(function (event) {
// $('#fileToUpload').change(function (event) {
// 	var tmppath = URL.createObjectURL(event.target.files[0]);
// 	alert(tmppath);
// 	alert(event.target.files[0]);
//    // $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
//     $('#fileFullpath').val(tmppath);
// });
			//dashboard page

$('#showinfo').click(function(){

	 $(this).toggleClass('selected').parent().next('.ss').fadeToggle(100);

if($(this).hasClass('selected')){
	$(this).html('<i class="fa fa-plus"></i>');
}else{
	$(this).html('<i class="fa fa-minus"></i>');
}
//$('.ss').fadeToogle(100);
});
$('#showinfo2').click(function(){

	 $(this).toggleClass('selected').parent().next('.ss').fadeToggle(100);

if($(this).hasClass('selected')){
	$(this).html('<i class="fa fa-plus"></i>');
}else{
	$(this).html('<i class="fa fa-minus"></i>');
}
//$('.ss').fadeToogle(100);
});
$('#showinfo3').click(function(){

	 $(this).toggleClass('selected').parent().next('.ss').fadeToggle(100);

if($(this).hasClass('selected')){
	$(this).html('<i class="fa fa-plus"></i>');
}else{
	$(this).html('<i class="fa fa-minus"></i>');
}
//$('.ss').fadeToogle(100);
});

// button order 
$('#btnOrder').click(function(){

document.getElementById('ActiveOrder').style.color('Red');


});

});


function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function displayGroupMembers() {
    var groupMembersList = document.getElementById('members');
    var members = groupMembersList.children;
    var numMembers = members.length;

    for (var i = numMembers - 1; i > 0; i--) {
        var randomIndex = getRandomIndex(i + 1);
        groupMembersList.appendChild(members[randomIndex]);
    }
}

displayGroupMembers();
