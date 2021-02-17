<?php

use App\Http\Controllers\PersonaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('todo', 'PersonaController@index');

Route::get('probame', 'PersonaController@anda');
Route::get('apellido', 'PersonaController@apellido');
Route::get('sintomas', 'PersonaController@sintomas');
Route::get('datos', 'PersonaController@datos');
Route::get('/mostrar/{id}', 'PersonaController@mostrarDatosPersonas');




// Esto esta relacionado con los TEST
Route::get('datos/{name}', function ($name) {

    echo "Nombre: ", $name;

});