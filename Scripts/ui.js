$('aside').hover(
	function(){
		$(this).css('background', '#9B2F2B');
		$('.fa-heart').css('color', '#9B2F2B');
	}, function(){
		$(this).css('background', '#D14841');
		$('.fa-heart').css('color', '#D14841');
	}
);

// Add options for every Select element
var selectDay = $('#selectDay');
for (var i = 1; i <= 31 ; i++) {
	selectDay.append("<option value='" + i + "'>" + i + "</option>");
}

var selectMonth = $('#selectMonth');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
for (var i = 0; i < months.length; i++) {
	selectMonth.append("<option value='" + months[i] + "'>" + months[i] + "</option>");
}

// Completar validación de usuarios de 18 años en adelante
var selectYear = $('#selectYear');
var currentYear = new Date().getFullYear();
var firstYear = currentYear - 18;
for (var i = firstYear; i >= 1970 ; i--) {
	selectYear.append("<option value='" + i + "'>" + i + "</option>");
}