<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./imgfares/favicon.png" type="image/png" sizes="16x16">
    <title>Inventario-Fares</title>
    <link rel="stylesheet" type="text/css" href="Css/Diseñocssf.css">
    <link rel="stylesheet" type="text/css" href="Css/dcoloresf.css">
    <script src="./JScript/acciones_script.js"></script>
<body>
</head>
<header id="titulo1">
    <h1>Ediciones Fares</h1>
</header>    
<nav class="fcolor-l4">
<nav>
    <ul>
        <li> <a href="#">Principal</a></li>
        <li><a href="#">Libros</a></li>
        <nav class="f-desplegable">
    <li>
        <a href="#" class="btndesplegable">Inventario</a>

        <div class="cont-desplegable">
            <a href="cproductos.php">Crear producto</a>
            <a href="cproductos.php">Consultar producto</a>
        </div>        
    </li>
    <li><a href="#">Contacto</a></li>
    </ul>
    </nav>
    <section class="fcolor-l1">
        <div>
        </head>
<section class="fcolor-l1 section-form">
    <div class="s-encabezado">
        <h2>Inventario<h2>
</div>
<form class="fcolor-15" action="guardar.php" method="post"
enctype="multipart/form-data" autocomplete="off">
<div id="codnom">
<label class="codnom1">Codigo: <input type="text" name="codigo" id="codigo"
pattern="[0-9]{3,}"  placeholder="Ingresar solo numeros" size="12"
autofocus required> </label>
<label class="codnom1">Producto: <input type="text" class="campof"
name="nproducto" id="nproducto" pattern="^[a-zA-Z\s]+{3,100}"
placeholder="Ingresar solo letras" size="50" autofocus required></label>
</div>
<div id="cospor">
<label class="codnom1">Costo: <input type="text" class="campof"
name="costop" id="costop" pattern="[0-9]+([,\.][0-9]+)?"> </label>
<label class="codnom1">Porcentaje de venta: <input type="text" 
class="campof" name="porcentajev" id="porcentajev" maxlength="3" size="4"> </label>
</div>
<div id="prefecha">
<label class="codnom1">Precio de venta:<input type="text" 
class="campof" name="pventa" id="pventa" readonly></label>
<label class="codnom1"> Fecha: <input type="text" class="campof"
name="fecha_creacion" id="fecha_creacion"></label>
</div>
<div id="csimagen">
<img src="" width="200px" alt="Imagen del producto...">
</div>
<div id="botonimg">
<input type="file" class="campof" name="simagen" id="simagen">
</div>
<input type="submit" value="Guardar">
</form>
</section>
    <footer class= "fcolor-d5">
        
        <p>Derechos Reservados &copy; 2004-2023</p>
    </footer>
</body>
</html>