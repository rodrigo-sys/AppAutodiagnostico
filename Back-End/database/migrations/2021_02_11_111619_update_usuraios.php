<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsuraios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::table('users', function (Blueprint $table) 
            {
                $table->year('birth_year');
                $table->boolean('Tos_seca');
                $table->boolean('Fiebre');
            });
  
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        schema::table('users', function (Blueprint $table)
        {
            $table->dropColum('birth_year');
            $table->dropColum('Tos_seca');
            $table->dropColum('Fiebre');
        });        //
    }
}
