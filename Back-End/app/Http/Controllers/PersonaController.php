<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persona;
Use Illuminate\Support\Facades\DB;

class PersonaController extends Controller
{

    public function index(){
        //Selecciona todo lo que haya en la tabla persona y despues se muestra con el return
        $persona = Persona::all();
        return $persona;
        
    }

    function apellido(){

        //Selecciona lo que hay en apellido y lo obtiene, despues se muestra con el return
        $apellidoP = DB::table('personas')->select('apellido')->get();
        return $apellidoP;

    }
    function sintomas(){

        //Selecciona lo que hay en sintomas y lo obtiene, despues se muestra con el return
        $sintomasP = DB::table('personas')->select('sintomas')->get();
        return $sintomasP;

    }
    function datos(){

        $datoN = DB::table('personas')->select('nombre')->get();
        $datoA = DB::table('personas')->select('apellido')->get();
        echo "$datoN";
        echo "$datoA";
    }
    

 
}






