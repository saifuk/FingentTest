@extends('base')
@section('content')
    <div class="pcoded-main-container">
        <div class="pcoded-content">
            <!-- [ breadcrumb ] start -->
            <div class="page-header">
                <div class="page-block">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            <div class="page-header-title">
                                <h5 class="m-b-10">Student Management</h5>
                            </div>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a></li>
                                <li class="breadcrumb-item"><a href="#!">Student Management</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h4>Edit Student</h4>
                    </div>
                    <div class="pull-right"><a class="btn btn-primary" href="{{ route('students-management.index') }}">
                            Back</a></div>
                </div>
            </div>
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            {!! Form::model($student, ['method' => 'PATCH','route' => ['students-management.update', $student->id],'id' =>'validation-form-student']) !!}
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>Name:</strong>{!! Form::text('name', null, array('placeholder' => 'Name','class' => 'form-control')) !!}
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>Age:</strong>{!! Form::number('age', null, array('placeholder' => 'Age','class' => 'form-control')) !!}
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group"><strong>Gender:</strong>
                        <input type="radio" id="male" name="gender" value="male" {{ ($student->gender=="male")? "checked" : "" }}>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" {{ ($student->gender=="female")? "checked" : "" }}>
                        <label for="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" {{ ($student->gender=="other")? "checked" : "" }}>
                        <label for="other">Other</label>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>Reporting Teacher:</strong>{{ Form::select('teacher', $teachers, $student->teacher, array('class'=>'form-control', 'placeholder'=>'Please select Reporting Teacher')) }}
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            {!! Form::close() !!}
        </div>
    </div>
    <script src="{{ asset('assets/js/pages/student-page.js') }}"></script>
@endsection

