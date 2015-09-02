$(document).ready (function (){
	$("#button1").mousedown(function(){	

		var newItem = $("#additionalitem").val();
		$(".list").prepend("<li>"+ $(newItem).selector +"</li>");
		console.log($(newItem).selector);
		$("#additionalitem").val("");
			/*ask about resetting form*/
			/*ask about .selector*/
	});

	$("input").keydown(function(enter) {
		if (enter.keyCode == 13) {
			addItem();
		}
	})

	function addItem() {
		var newItem = $("#additionalitem").val();
		$(".list").prepend("<li>"+ $(newItem).selector +"</li>")
		$("#additionalitem").val("");
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
	$("ul").on('click','li', function(){

		$(this).toggleClass('clicked');
	})

	$("#reset").mousedown(function(){

		$("li").text("")
	})
});
