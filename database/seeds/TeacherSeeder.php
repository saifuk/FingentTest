<?php

use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('teachers')->insert([
            ['id' => 1, 'name' => 'Reily Smith'],
            ['id' => 2, 'name' => 'Lopez Mason'],
            ['id' => 3, 'name' => 'Irwin Jones'],
            ['id' => 4, 'name' => 'Clark Davis'],
            ['id' => 5, 'name' => 'Frank Ghosh'],
            ['id' => 6, 'name' => 'Yakub Zafar'],
        ]);
    }
}
