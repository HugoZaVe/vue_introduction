<?php

function dance(){
    echo "Do something";
}

function singStrong(){
    echo "Some";
}

function singAndCry(){
    echo "Some";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pelicula = $_POST['pelicula'];
    if(!empty($pelicula)){
        switch ($pelicula) {
            case "La sirenita":
                echo "";
            break;
            case "Frozen":
                echo "¿Y si hacemos un muñeco? Ven, vamos a jugar";
            break;
            case "Mulan":
                echo "Hoy la lucha empieza, esa es la misión";
            break;
        }
    }
}

?>