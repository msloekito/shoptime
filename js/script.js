$(document).ready (function (){

	$("#button1").mousedown(function(e){			
		var newItem = $("#additionalitem").val();
		
		if ($("#additionalitem").val()==="") {
			console.log("no entry");
			return false;}
		else
			{
				$(".list").prepend("<p class='hvr-icon-fade'>"+ newItem +"</p>");
				$(".list").fadeIn();
				console.log(newItem);
				$("#additionalitem").val("");
			}
		})
	

	$("input").keydown(function(enter) {
		if (enter.keyCode == 13) {
			addItem();
		}
	})

	function addItem() {

		if ($("#additionalitem").val()==="") {
			console.log("no entry");
			return false;}
		else
			{
				var newItem = $("#additionalitem").val();
				$(".list").prepend("<p class='hvr-icon-fade'>"+ newItem +"</p>")
				$("#additionalitem").val("");
			}
	}
	
	//$("input").keypress(function(e){	

		/*if (e.keycode == 13) 
		{
			var newItem = $("input:text").val();
			$(".list").append("<li>"+ $(newItem).selector +"</li>");
			console.log($(newItem).selector);
			$("#additionalitem").get(0).reset();
			/*ask about resetting form*/
			/*ask about .selector*/
		/*}
		else {}
	});*/
	$(".list").on('click','p', function(){

		$(this).toggleClass('clicked');
	})

	$("#reset").mousedown(function(){
		$(".clicked").fadeOut("500")
	})

})