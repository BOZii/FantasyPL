$(document).ready(function() {
	


	$('#example').DataTable( {
        
    } );

    $('.delete').click(function(){
    	var id, status;

    	id = this.id.split('delete_')[1];

    	status = confirm("Are you sure you would like to delete? id: " + id);

    	if(status){
    		formData = {
			        player: id
			    };

			    //alert(JSON.stringify(formData));

			    url = '/api/players/delete/' + id;

			    function successFuncTI(data, status) {
			        alert(data);
			    }
			    function errorFuncTI(jqXHR, textStatus, errorThrown) {
			        alert("Ajax \n status: " + textStatus + "\n error thrown: " + errorThrown);
			    }

		    	$.ajax({
		    	    type: "POST",
		    	    url: url,
		    	    data: JSON.stringify(formData),
		    	    dataType: 'json',
		    	    contentType: "application/json; charset=utf-8",
		    	    async: true,
		    	    success: successFuncTI,
		    	    error: errorFuncTI
		    	});
    	}
    });
    

    $('.update').click( function(){
    	var id, url, formData, Name, Amount, flag;
    	
    	id = this.id.split('update_')[1];
    	Name = $('#Name_' + id).val();
	    Amount = $('#Price_' + id).val();


	    flag = true;
	    if(!id || id == 'undefined'){
	    	alert("Invalid Id");
	    	flag = false;
	    }

	    if(!Name || Name == 'undefined'){
	    	alert("Invalid Name");
	    	flag = false;
	    }

	    if(!Amount || Amount == 'undefined'){
	    	alert("Invalid Amount");
	    	flag = false;
	    }

	    if(flag){
	    
			    formData = {
			        player: id,
			        Name: Last,
			        Price: Amount,
			    };

			    //alert(JSON.stringify(formData));

			    url = '/api/players/update/' + id;

			    function successFuncTI(data, status) {
			        alert(data);
			    }
			    function errorFuncTI(jqXHR, textStatus, errorThrown) {
			        alert("Ajax \n status: " + textStatus + "\n error thrown: " + errorThrown);
			    }

		    	$.ajax({
		    	    type: "POST",
		    	    url: url,
		    	    data: JSON.stringify(formData),
		    	    dataType: 'json',
		    	    contentType: "application/json; charset=utf-8",
		    	    async: true,
		    	    success: successFuncTI,
		    	    error: errorFuncTI
		    	});
	    }
	});


} );
