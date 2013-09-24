<?php 
$fd = @fopen('../lista.txt', 'rb');
if($fd){
	$arrayLista = file('../lista.txt');
	fclose($fd);
	$count = count($arrayLista);
	if($count > 0){
		$escolhido = array_rand($arrayLista);
		$enc = mb_detect_encoding($arrayLista[$escolhido]);
		$data = mb_convert_encoding($arrayLista[$escolhido], "UTF-8", $enc);
		$nome = trim($arrayLista[$escolhido]);
		while(empty($nome)){
				$escolhido = array_rand($arrayLista);
				$enc = mb_detect_encoding($arrayLista[$escolhido]);
				$data = mb_convert_encoding($arrayLista[$escolhido], "UTF-8", $enc);
				$nome = trim($arrayLista[$escolhido]);
		}
		echo $nome;
	}else{
		$msg = "Não existe nenhum registro na lista.";
		echo utf8_encode($msg);
	}
}else{echo "ERRO: O arquivo lista.txt nao existe!";}
?>