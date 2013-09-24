<?php 
sleep(1);
if(isset($_POST['lista'])){
	$novaLista = trim($_POST['lista']);
	if(!empty($novaLista)){
		$fd = @fopen('../lista.txt', 'w');
		if($fd){
			$enc = mb_detect_encoding($novaLista);
			$data = mb_convert_encoding($novaLista, "UTF-8", $enc);
			fwrite($fd, $novaLista,strlen($novaLista));
			fclose($fd);
			echo "salvo";
		}else{
			echo "erro";
		}
	}else{echo "erro";}
}else{echo "erro";}
?>