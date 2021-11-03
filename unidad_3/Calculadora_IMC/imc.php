<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Calculadora IMC</title>
    </head>
    <body>

        <?php
            $img = "fig/";
            $peso = $_POST["peso"];
            $altura = $_POST["altura"];
            $imc = $peso / ($altura * $altura);

            function classificaIMC($imc) {
                if ($imc < 18.5) {
                    return "flaco";
                } else if (imc < 25){
                    return "normal";
                }
                else if (imc < 30){
                    return "sobrepeso";
                } else if (imc < 35){
                    return "obesidad";
                } else{
                    return "obesidad_severa";
                }
            }

            $type = classificaIMC($imc);
        ?>
        <h1>IMC:</h1>
        <div id="wrapper">
            <div id="data">
            <?php
                echo "IMC: $imc";
            ?>
            <div id="img">
                <img src="<?php echo $img . $type . ".jpeg"; ?>" alt="<?php echo $type; ?>">
            </div>
            </div>
        </div>
    </body>
</html>