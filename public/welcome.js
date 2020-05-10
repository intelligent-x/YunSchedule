var canvas = document.querySelector("#canvas");
var gd = canvas.getContext("2d");
var timer = null;
var ball = {
	x : 0,
	y : 0,
	r : 2,
	vx : 0,
	vy : 0
};
var balls = [];
var mouse = {
	x : undefined,
	y : undefined
}

document.body.style.width = window.innerWidth + "px";
document.body.style.height = window.innerHeight + "px";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for( let i = 0 ; i < canvas.width / 12 ; i ++ ){
	ball.x = getRandom( ball.r, canvas.width - ball.r );
	ball.y = getRandom( ball.r, canvas.height - ball.r );
	ball.vx = getRandomVector( -3, 3 );
	ball.vy = getRandomVector( -3, 3 );
	balls.push( { ... ball } );
}

document.querySelector("#start").onclick = function(){
	this.style.backgroundColor = "#FFF";
	this.style.color = "#68C";
	setTimeout( function(){;
		window.open( "Schedule.html", target = "_self" );
	}, 500 );
}
document.addEventListener( "mousemove", function( e ){
	mouse.x = e.pageX;
	mouse.y = e.pageY;
} );
window.onload = function(){
	timer = setInterval( function(){
		draw();
		update();
	}, 10 );
}

function draw(){
	gd.clearRect( 0, 0, canvas.width, canvas.height );
	for( let i = 0 ; i < balls.length ; i ++ ){
		gd.beginPath();
		gd.fillStyle = '#79D';
		gd.arc( balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2 );
		gd.fill();
		for( let j = 0 ; j < balls.length ; j ++ ){
			if( getLength( balls[i], balls[j] ) < canvas.width / 10 ){
				drawLine( balls[i], balls[j] );
			}
		}
		if( getLength( balls[i], mouse ) < canvas.width / 8 ){
			drawLine( balls[i], mouse );
		}
	}
}
function update(){
	for( let i = 0 ; i < balls.length ; i ++ ){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		if( balls[i].x < balls[i].r || balls[i].x > canvas.width - balls[i].r ) balls[i].vx = -balls[i].vx;
		if( balls[i].y < balls[i].r || balls[i].y > canvas.height - balls[i].r ) balls[i].vy = -balls[i].vy;
	}
}

function getRandom( min, max ){
	return Math.floor( Math.random() * ( max - min ) ) + min;
}
function getRandomVector( min, max ){
	const num = ( Math.floor( Math.random() * ( max - min ) ) + min ) * ( Math.random() / 2 - Math.random() );
	if( num === 0 ) return;
	return num;
}
function drawLine( obj1, obj2 ){
	gd.beginPath();
	gd.strokeStyle = "#79D";
	gd.moveTo( obj1.x, obj1.y );
	gd.lineTo( obj2.x, obj2.y );
	gd.lineWidth = canvas.width / 12 / getLength( obj1, obj2 );
	gd.stroke();
}
function getLength( obj1, obj2 ){
	return Math.sqrt( ( obj1.x - obj2.x ) * ( obj1.x - obj2.x ) + ( obj1.y - obj2.y ) * ( obj1.y - obj2.y ) );
}