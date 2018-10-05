'use strict';
var date = new Date();
var day = date.getDay();

var week = ['','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (var i = 1; i < 8; i++) {
	if (i == day && i < 6) {
		document.write('<i>' + week[i] + '</i>' + '<br>');
	} else if (i < 6 ) {
		document.write(week[i] + '<br>');
	} else if (i == day && i > 5)  {
		document.write('<i><b style="font-weight: bolt; ">' + week[i] + '<br>' + '</b></i>');
	} else if (day < 1 && i > 6) {
			document.write('<i><b style="font-weight: bolt; ">' + week[i] + '<br>' + '</b></i>');
	} else {
		document.write('<b style="font-weight: bolt; ">' + week[i] + '<br>' + '</b>');
	}
}


 var arr = ['3466','134','7990','232','3457','987','753']
 for (var i = 0; i < arr.length; i++) {
 	if (arr[i][0] == '3' || arr[i][0] == '7' ) {
 		console.log(arr[i]);
 	}
 }
 