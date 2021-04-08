<?php

namespace App\Http\Controllers;

use App\Mark;
use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $marks = Mark::join('students', 'marks.student', '=', 'students.id')
            ->select('marks.*', 'students.name as studentName')->paginate(10);
        return view('mark.index', compact('marks'))
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
        $students = Student::pluck('name','id');
        $terms = DB::table('terms')->pluck('name','id');
        return view('mark.create',compact('students','terms'));
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
        $this->validate($request, ['student' => 'required', 'term' => 'required', 'maths' => 'required', 'science' => 'required', 'history' => 'required']);
        $input = $request->all();
        $total = $request->input('maths') + $request->input('science') + $request->input('history');
        $student = Mark::create(['student' => $request->input('student'), 'term' => $request->input('term'), 'maths' => $request->input('maths'),
            'science' => $request->input('science'), 'history' =>$request->input('history'), 'total_marks' => $total]);
        return redirect()
            ->route('marks-management.index')
            ->with('success', 'Marks Saved successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mark  $marks
     * @return \Illuminate\Http\Response
     */
    public function show(Mark $marks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mark  $marks
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $mark = Mark::join('students', 'marks.student', '=', 'students.id')
            ->select('marks.*', 'students.name as studentName')->where('marks.id', $id)->first();
        $students = Student::pluck('name','id');
        $terms = DB::table('terms')->pluck('name','id');
        return view('mark.edit', compact('mark', 'students','terms'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mark  $marks
     * @return \Illuminate\Http\Response
     */
    public function update($id ,Request $request, Mark $marks)
    {
        //
        $this->validate($request, ['student' => 'required', 'term' => 'required', 'maths' => 'required', 'science' => 'required', 'history' => 'required']);
        $input = $request->all();
        $total = $request->input('maths') + $request->input('science') + $request->input('history');
        $mark = Mark::find($id);
        $mark->update(['student' => $request->input('student'), 'term' => $request->input('term'), 'maths' => $request->input('maths'),
            'science' => $request->input('science'), 'history' =>$request->input('history'), 'total_marks' => $total]);

        return redirect()
            ->route('marks-management.index')
            ->with('success', 'Marks Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mark  $marks
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Mark::find($id)->delete();
        return redirect()
            ->route('marks-management.index')
            ->with('success', 'Mark Details deleted successfully');
    }
}
