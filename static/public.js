var canvas = document.getElementById('canvas'),
gd = canvas.getContext('2d'),
timer = undefined,
nowTime = undefined,
time = undefined,
hour = undefined,
minute = undefined,
second = undefined;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onload = function(){
	clearInterval( timer );
	timer = setInterval( function(){
		update();
		draw();
	}, 1000 );
}

if( sessionStorage[name] === password ){
	
}else{ 
	document.getElementsByTagName('html')[0].removeChild( document.getElementsByTagName('body')[0] );
	document.getElementsByTagName('html')[0].appendChild( body = document.createElement("body") );
	body.innerHTML = "<h1 align='center' style='color:#F00'>你没有从开始界面打开!</h1>";
};

document.querySelector("#quit").onclick = function(){
	sessionStorage.clear();
}

window.onclose = function(){
	sessionStorage.clear();
}

function draw(){
	gd.clearRect( 0, 0, canvas.width, canvas.height );
	gd.beginPath();
	gd.fillStyle = '#FFF';
	gd.textAlign = 'left';
	gd.textBaseline = 'top';
	gd.font = "bold " + ( window.innerWidth / 2 / 15 ) + "px Consolas";
	gd.fillText( title, canvas.width / 10, canvas.height / 5 );
	gd.beginPath();
	gd.fillStyle = '#F55';
	gd.textAlign = 'center';
	gd.textBaseline = 'middle';
	gd.font = "bold " + ( font = window.innerWidth / 10 ) + "px Consolas";
	gd.fillText( hour + "时" + minute + "分" + second + "秒", canvas.width / 2, canvas.height / 2 );
	if( nowTime >= endTime ){
		clearInterval( timer );
		gd.clearRect( 0, 0, canvas.width, canvas.height );
		gd.beginPath();
		gd.fillStyle = '#F55';
		gd.textAlign = 'center';
		gd.textBaseline = 'middle';
		gd.font = "bold " + ( font = window.innerWidth / 10 ) + "px Consolas";
		gd.fillText( "计时时间已到", canvas.width / 2, canvas.height / 2 );
	}
}

function update(){
	nowTime = new Date();
	time = endTime - nowTime;
	hour = time / 1000 / 3600;
	minute = ( hour - Math.floor( hour ) ) * 60;
	second = ( minute - Math.floor( minute ) ) * 60;
	hour = Math.floor( hour );
	minute = Math.floor( minute );
	second = Math.floor( second );
	if( hour.toString().length == 1 ) hour = "0" + hour;
	if( minute.toString().length == 1 ) minute = "0" + minute;
	if( second.toString().length == 1 ) second = "0" + second;
}