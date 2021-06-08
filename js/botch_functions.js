


// all playlists

var playlist_aed_start = ['beep-00','start-01','start-02',
'silence_1sec',
'removeclothing-01','removeclothing-02',
'silence_1sec',
'peelpad-01','peelpad-03',
'silence_5sec',
'peelpad-05','peelpad-07',
'silence_1min'];

var playlist_aed_pads_bad = [
'silence_5sec','padsloose-01'];

var playlist_aed_shockable = [
'silence_1sec','beep-00','analyzing-01',
'silence_5sec',
'shockadvised-01','silence_5sec',
'presstoshock-01a',
'shocknotdelivered-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min'];


var playlist_aed_notshockable = [
'silence_1sec','beep-00','analyzing-01',
'silence_5sec',
'shocknotadvised-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min'];


var playlist_aed_shocked = [
'shock','shockdelivered-01','safetotouch-01',
'cpr-00',
'silence_1min','silence_1min',
'silence_1sec','beep-00','analyzing-01',
'silence_5sec',
'shockadvised-01','silence_5sec',
'beep-00','shockauto-00','shockauto-01','shockauto-02','shockauto-03'];

var playlist_analysis_fail = ['beep-00','beep-00','analysisfailed-01','silence_5sec'];

var playlist_cancel_shock = [
'shockcancelled-01','safetotouch-01',
'silence_1min','silence_1min'];

var playlist_aed_batterylow = ['beep-00','batterylow',
'silence_1min'];

var playlist_aed_maintenance = ['beep-00','maintenance-01',
'silence_1min'];


var language = "zh-hk";






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
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: false,
		keyEnabled: false,
		//loop: true,
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
	
	
	$('#btn_zhhk').click(function() {
		language = 'zh-hk';
	});
	$('#btn_enus').click(function() {
		language = 'en-us';
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