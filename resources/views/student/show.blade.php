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
                                <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Student Management</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h4> Show User</h4>
                    </div>
                    <div class="pull-right"><a class="btn btn-primary"
                                               href="{{ route('students-management.index') }}"> Back</a></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group"><strong>Name:</strong>{{ $student->name }}</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group"><strong>Age:</strong>{{ $student->age }}</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group"><strong>Gender:</strong>{{ $student->gender }}</div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group"><strong>Reporting Teacher:</strong>{{ $student->teacherName }}</div>
                </div>
            </div>
        </div>
    </div>
@endsection

