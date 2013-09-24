<?php 
$fd = @fopen('../lista.txt', 'rb');
if($fd){
	$arrayLista = file('../lista.txt');
	fclose($fd);
	$enc = mb_detect_encoding($lista);
	$data = mb_convert_encoding($lista, "UTF-8", $enc);
	foreach ($arrayLista as $lista){
		echo $lista;
	}
}else{echo "ERRO: O arquivo lista.txt nao existe!";}
?>