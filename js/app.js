(function($) {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);


$(document).ready(function(){

$('body').on('submit', '#forminline', function (e) {  

 		e.preventDefault();
 		e.stopPropagation();
	console.log('You have clicked the link.');

	var field1 = $("#inlineFormInputName").val();
  var field2 = $("#inlineFormInputEmail").val();

		var $button = $(this).find('button');
		$button.attr('disabled', 'disabled').text('Отправляем');
		// var xhr = new XMLHttpRequest();
		// xhr.open(method, url, true);
		// xhr.setRequestHeader('Access-Control-Allow-Headers', '*');

       $.ajax({
						url: "../redirect.php",
						data: {"entry.703792878": field1, "entry.1331950411": field2},
            type: "POST",
            dataType: "jsonp",
            crossDomain: true,
            beforeSend: function(xhr){
                xhr.withCredentials = true;
          },
            success: function(d)
					{
						$button.attr('disabled', 'disabled').text('Отправл');
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
return true;
            
    }); //submit

}); //window load

})

(jQuery);

