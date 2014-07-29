$(document).ready(function(){
    var dt = {
	status :"online"
    };
    $('.btn').click(function(e){
	$.ajax({
	    url:  '/api/setStatus',
	    data: dt,
	    type: 'POST',
	    sucess:App.fn.logger,
	    error: App.fn.logger,
	    dataType: 'JSON'
	});
    });

    var App = App || {};
    App.fn = App.fn || {};
    App.fn.logger = function (data,status,xhr){

	console.log(data);
    };

});
