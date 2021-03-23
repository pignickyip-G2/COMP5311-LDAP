$( "#logon-form1" ).submit(function( event ) {
 
	 // Stop form from submitting normally
	event.preventDefault();
	 
	// Get some values from elements on the page:
	let u = $( "#exampleInputUsername" ).val(),
		pwd = $( "#exampleInputPassword1" ).val();
	$.ajax({ 
           url: '/logon',
           type: 'POST',
           cache: false, 
           data: { username: u, pwd: pwd }, 
           success: function(data){
              alert('Success!')
           },
		   error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        })
});       
