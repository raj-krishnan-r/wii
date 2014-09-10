<?php
include("pon.php");
$name=$_POST['name'];
echo $name;
$rand=rand(200,10000);
$exist=200;
$sql=mysql_query("insert into you values ('$name',0)")or die(mysql_error());
$expire=time()+60*60*24*30;
setcookie("name", $name, $expire);
?>