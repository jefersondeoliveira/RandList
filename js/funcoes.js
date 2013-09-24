$(document).ready(function() {	
	//modal
	$('.editar').click(function (e) {
		
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		$('#mask').fadeIn(); 
	
		var winH = $(window).height();
		var winW = $(window).width();
              
		$('.box_editar').css('top',  winH/2-$('.box_editar').height()/2);
		$('.box_editar').css('left', winW/2-$('.box_editar').width()/2);
	
		$('.box_editar').fadeIn(); 
	});			

	$('.box_editar .fechar').click(function (e) {
		e.preventDefault();
		$('#mask').fadeOut();
		$('.box_editar').fadeOut();
	});
	
	$('#mask').click(function () {
		$(this).fadeOut();
		$('.box_editar').fadeOut();
	});			
	
	//GERANDO RAND
	$('body').keypress(function(e){
		if( $('.box_editar').is(':visible') ) {
		}else{	
		var tecla = (e.keyCode?e.keyCode:e.which);
		if(tecla == 13){
		$.ajax
		({
			type:"POST",
			url:"func/gerar_nome.php",
			data:{},
			success: function(result)
			{
				$('.gerar').css({'background-position':'top'});
				$('.box_result').animate({'top':'-135'},{duration:300});
				setTimeout(function(){
					$('.box_result span').html(result);
					$('.box_result').animate({'top':'0'},{duration:300});
					$('.gerar').css({'background-position':'bottom'});
				},500);
			}
		});
		}
		}
	});		
	$('.gerar').click(function(){
		$.ajax
		({
			type:"POST",
			url:"func/gerar_nome.php",
			data:{},
			success: function(result)
			{
				$('.gerar').css({'background-position':'top'});
				$('.box_result').animate({'top':'-135'},{duration:300});
				setTimeout(function(){
					$('.box_result span').html(result);
					$('.box_result').animate({'top':'0'},{duration:300});
					$('.gerar').css({'background-position':'bottom'});
				},500);
			}
		});
		return false;
	});
	
	//EDITANDO LISTA
	$('.box_editar textarea').load("func/listar_nome.php");
	
	//SALVANDO LISTA
	$('.box_editar .salvar').click(function(){
		var novaLista = $('.box_editar textarea').val();
		$.ajax
		({
			type:"POST",
			url:"func/salvar_nome.php",
			data:{lista:novaLista},
			beforeSend: function()
			{
				$('.box_editar').find('img').attr({src: 'img/loading.gif'}).fadeIn('slow');
			},
			success: function(result)
			{
				$('.box_editar').find('img').hide();
				if(result != 'erro'){
					$('.box_editar').find('img').attr({src: 'img/icon_approve.png'}).fadeIn('slow');
				}else{
					$('.box_editar').find('img').attr({src: 'img/icon_missing.png'}).fadeIn('slow');
				}
				setTimeout(function(){
					$('.box_editar').find('img').fadeOut('slow');
				},1000);	
			}
		});
		return false;
	});
});










