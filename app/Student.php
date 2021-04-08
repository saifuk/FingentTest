<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $fillable = ['name','age','gender','teacher','status'];

    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }
    public function marks()
    {
        return $this->hasMany('App\Mark', 'student');
    }
}
