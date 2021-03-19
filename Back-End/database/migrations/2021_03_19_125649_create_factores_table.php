<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFactoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factores', function (Blueprint $table) {
            $table->id();

            $table->boolean('embarazo');
            $table->boolean('hepatico');
            $table->boolean('diabetes');
            $table->boolean('cancer');
            $table->boolean('renal_cronico');
            $table->boolean('respiratorio');
            $table->boolean('cardiologico');
            $table->boolean('epoc');
            $table->boolean('inmuno_def');
            $table->boolean('bajas_defensas');
            $table->boolean('esclorosis_mult');
            $table->boolean('hipo_hiper_tir');
            $table->boolean('edad');
            $table->boolean('hipertencion');        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factores');
    }
}
