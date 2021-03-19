<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSintomasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sintomas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();

            $table->boolean('personal_salud');
            $table->boolean('contacto_covid');
            $table->boolean('fiebre');
            $table->boolean('tos_seca');
            $table->boolean('dif_respirar');
            $table->boolean('vomito');
            $table->boolean('dolor_gargana');
            $table->boolean('diarrea');
            $table->boolean('perdida_olfato');
            $table->boolean('perdida_gusto');
            $table->boolean('dolor_cabeza');
            $table->boolean('dolor_muscular');
            $table->date('fecha_eval');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sintomas');
    }
}
