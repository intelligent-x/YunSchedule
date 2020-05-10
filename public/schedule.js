document.body.style.width = window.innerWidth + "px";
document.body.style.height = window.innerHeight + "px";
var lis = document.getElementsByClassName("database");
var ul = document.getElementById('databases');

let WebSQL = openDatabase( "Databases", "1.0", "Databases Center", 2 * 1024 * 1024 );

function create(){
	var name = prompt("数据库名称: ");
	var vesion = "1.0";
	var profile = prompt("数据库说明: ");
	var weight = 2 * 1024 * 1024;
	WebSQL.transaction( function( tx ){
		tx.executeSql("INSERT INTO DBS (name,profile) VALUES (\"" + name + "\",\"" + profile + "\");");
		alert("----- 添加成功 -----");	
		let ele = "<li class=\"database\">";
		ele += name;
		ele += "</li>"	
	} );
}

function _delete(){}