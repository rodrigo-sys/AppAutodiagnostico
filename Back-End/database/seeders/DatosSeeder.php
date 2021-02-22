<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatosSeeder extends Seeder
{
    
    public function run()
    {
        DB::table('users')->truncate();
        //$this->call(DatosSeeder::class);

        DB::table('users')->insert([
            'name' => str::random(10),
            
            'email' => str::random(10).'@gmail.com',
            'password' => hash::make(10),
            'Fecha_Nacimiento'=> date::random(10),
            'sexo' => str::random(10),
            'Tos_Seca' => true,
            'Fiebre' => true,
            'cansancio' => true,
            'Molestias_Cansancio' => false,
            'Dolor_De_Garganta'=>true,
            'Diarrea' => false,
            'Conjuntivitis' => true,
            'Dolor_De_Cabeza' => true,
            'Pérdida_De_Olfato' => false,
            'Pérdida_De_Gusto' => false,
            'Erupciones_Cutáneas' => true,
            'Pérdida_Del_Control_En_Los_Dedos_De_Las_Manos'=>true,
            'Dificultad_Para_Respirar' => false,
            'Incapacidad_Para_Moverse' => false,
            'Dolor/Presión_En_El_Pecho' => false,
        
        ]);
        //
    }
}
