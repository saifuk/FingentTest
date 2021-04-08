<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    //
    protected $fillable = ['student','term','maths','science','history','total_marks'];
}
