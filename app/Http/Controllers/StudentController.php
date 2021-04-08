<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        
        $students = Student::join('teachers', 'students.teacher', '=', 'teachers.id')
            ->select('students.*', 'teachers.name as teacherName')->paginate(10);
        return view('student.index', compact('students'))
            ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $teachers = DB::table('teachers')->pluck('name','id');
        return view('student.create',compact('teachers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate($request, ['name' => 'required', 'age' => 'required', 'gender' => 'required', 'teacher' => 'required']);
        $input = $request->all();
        $student = Student::create($input);
        return redirect()
            ->route('students-management.index')
            ->with('success', 'Student created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $students
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $student = Student::join('teachers', 'students.teacher', '=', 'teachers.id')
            ->select('students.*', 'teachers.name as teacherName')->where('students.id', $id)->first();
        return view('student.show', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $students
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $student = Student::join('teachers', 'students.teacher', '=', 'teachers.id')
            ->select('students.*', 'teachers.name as teacherName')->where('students.id', $id)->first();
        $teachers = DB::table('teachers')->pluck('name','id');

        return view('student.edit', compact('student', 'teachers'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $students
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $this->validate($request, ['name' => 'required', 'age' => 'required', 'gender' => 'required', 'teacher' => 'required']);
        $input = $request->all();
        $student = Student::find($id);
        $student->update($input);

        return redirect()
            ->route('students-management.index')
            ->with('success', 'Student updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $students
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Student::find($id)->delete();
        return redirect()
            ->route('students-management.index')
            ->with('success', 'Student record deleted successfully');
    }
}
