


// all playlists

var playlist_aed_start = ['beep-00','start-01','start-02',
'silence_1sec',
'removeclothing-01',
'silence_1sec',
'peelpad-01','peelpad-03',
'peelpad-05','peelpad-07',
'silence_1min'];

var playlist_aed_pads_bad = [
'silence_1sec','padsloose-01'];

var playlist_aed_shockable = [
'beep-00','analyzing-01',
'silence_1sec',
'shockadvised-01','silence_1sec',
'presstoshock-01a','presstoshock-01a',
'shocknotdelivered-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min'];


var playlist_aed_notshockable = [
'beep-00','analyzing-01',
'silence_1sec',
'shocknotadvised-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min'];


var playlist_aed_shocked = [
'shock','shockdelivered-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min',
'silence_1sec','beep-00','analyzing-01',
'silence_1sec',
'shockadvised-01','silence_1sec',
'beep-00','shockauto-00','shockauto-01','shockauto-02','shockauto-03'];

var playlist_analysis_fail = ['beep-00','beep-00','analysisfailed-01','silence_5sec'];

var playlist_cancel_shock = [
'shockcancelled-01','safetotouch-01','cpr-01',
'silence_1min','silence_1min'];

var playlist_aed_batterylow = ['beep-00','batterylow',
'silence_1min'];

var playlist_aed_maintenance = ['beep-00','maintenance-01',
'silence_1min'];


var language = "yue-hk";






$(document).ready(function(){
	

	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [
	
	], {
		playlistOptions: {
			autoPlay: true,
			enableRemoveControls: false
		},
		swfPath: "dist/jplayer",
		supplied: "webmv, ogv, m4v, oga, mp3",
		loop: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: false,
		keyEnabled: false,
		audioFullScreen: false
	});
	$('.jp-repeat').click();
	$('.jp-volume-max').click();

	function setplaylist(listarray) {
		var tempplaylist = [];
		listarray.forEach(element => tempplaylist.push({
			mp3: 'sounds/'+language+'/'+element+'.mp3'
		}));
		myPlaylist.setPlaylist(tempplaylist);
	}


	function addplaylist(listarray) {
		var tempplaylist = [];
		listarray.forEach(element => tempplaylist.push({
			mp3: 'sounds/'+language+'/'+element+'.mp3'
		}));
		myPlaylist.add(tempplaylist,true);
	}
	
	
	
	$('#aed_model').change(function() {
		language = $( "#aed_model" ).val();
		$('#language').html('目前機種：'+$( "#aed_model" ).val());
	});
	
	$('#btn_power_on').click(function() {
		setplaylist(playlist_aed_start);
	});
	
	$('#btn_batterylow').click(function() {
		setplaylist(playlist_aed_batterylow);
	});
	
	$('#btn_repair').click(function() {
		setplaylist(playlist_aed_maintenance);
	});
	
	$('#btn_pads_bad').click(function() {
		setplaylist(playlist_aed_pads_bad);
	});
	
	$('#btn_shockable').click(function() {
		setplaylist(playlist_aed_shockable);
	});
	
	$('#btn_notshockable').click(function() {
		setplaylist(playlist_aed_notshockable);
	});
	
	$('#btn_shock').click(function() {
		setplaylist(playlist_aed_shocked);
	});
	
	$('#btn_shockcancel').click(function() {
		setplaylist(playlist_cancel_shock);
	});
	
	$('#btn_interrupt').click(function() {
		setplaylist(playlist_analysis_fail);
	});


});