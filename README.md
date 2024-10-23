# mytinerary-back-LuisZamorano

Cargar una ciudad (POST): http://localhost:8080/api/city/CreateCity
Obtener todas las ciudades (GET): http://localhost:8080/api/city/AllCities
Obtener una ciudad por ID (GET): http://localhost:8080/api/city/CityByID/{id}
Modificar una ciudad (PUT): http://localhost:8080/api/city/UpdateCity/{id}
Borrar una ciudad (DELETE): http://localhost:8080/api/city/DeleteCity/{id}



// $eq es una igualdad
        // $ne buscar todo lo que sea distinto a ejemplo tokyo
        // $in: [1, 2, 3] el dat que ser le pase este dentro del rango que se estipula
        // $nin: [1, 2, 3] el dat que se le pase este fuera del rango estipulado
        // $gte: dato1, $lte: dato2 traer todo lo que este entre dato1 y dato2
        // $exists : true si existe o no un dato
        // $size valida el tamano del array