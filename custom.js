/*function showStart()
{
	$("#").animate({width:'toggle'},350);


}*/

$(document).ready(function() {
	showStart();
	
});

function showStart()
{
	hideElements();
	$('#startDiv').fadeIn("fast");
}

function showBegagnat()
{
	hideElements();
	$('#begagnatDiv').fadeIn("fast");
}

function showOmOss()
{
	hideInnerOmOss();
	hideElements();
	$('#omOssDiv').fadeIn("slow");
	showOmMaskinPoolen()
}

function hideElements()
{
	$("#startDiv").hide();	
	$("#begagnatDiv").hide();	
	$("#omOssDiv").hide();
}

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

function initialize() {
	var latlng = new google.maps.LatLng(57.437328,14.088593);
    var myOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),
        myOptions);
    
    var marker = new google.maps.Marker({
    		    position: new google.maps.LatLng(57.439522,14.088485),
    		    title: 'Maskinpoolen skillingaryd AB',
    		    map: map
    });
}

function detailMachine(id)
{
	$.ajax({
  		url: 'maskiner/' + id + '&rand=' + Math.floor(Math.random()*10000),
  		success: function(data) {
    	$('#detailDiv').html(data);
    	$('#machineImages').jswitch({
    		auto:false,
			callback:function(jswitch){			
				$('#nextLink').click(function(){
					jswitch.nextImage();				
				});
				
				$('#prevLink').click(function(){
					jswitch.prevImage();				
				});
			}			
		});
    	$('#detailDiv').fadeIn("slow");
  }
	});
}

function hideDetailDiv()
{
	$('#detailDiv').fadeOut("slow");
}

function hideInnerOmOss()
{
	$('#innerAboutDiv').hide();
	$('#outerGoogleDiv').hide();
	$('#innerFinansDiv').hide();

/*
	$('#innerAboutDiv').fadeOut();
	$('#outerGoogleDiv').fadeOut();
	$('#innerFinansDiv').fadeOut();
*/
	
}

function showOmMaskinPoolen()
{	
	hideInnerOmOss();
	/* $('#innerAboutDiv').show('slow'); */
	$('#innerAboutDiv').fadeIn();
}

function showHittaHit()
{
	hideInnerOmOss();
	$('#outerGoogleDiv').fadeIn('slow',function() {
    		initialize();
  		});
}

function showFinansiering()
{
	hideInnerOmOss();
	$('#innerFinansDiv').fadeIn();
}