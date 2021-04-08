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
                                <h5 class="m-b-10">Mark Management</h5>
                            </div>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Mark Management</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- [ breadcrumb ] end -->
            <!-- [ Main Content ] start -->
            <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h4></h4>
                    </div>
                    <div class="pull-right"><a class="btn btn-success"
                                               href="{{ route('marks-management.create') }}">
                            Enter Mark Details</a></div>
                </div>
            </div>
            @if ($message = Session::get('success'))
                <div class="alert alert-success">
                    <p>{{ $message }}</p>
                </div>
            @endif
            <div class="row">
                <!-- Zero config table start -->
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Students</h5>
                        </div>
                        <div class="card-body">
                            <div class="dt-responsive table-responsive">
                                <table id="simpletable" class="table table-striped table-bordered nowrap">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Maths</th>
                                        <th>Science</th>
                                        <th>History</th>
                                        <th>Term</th>
                                        <th>Total Marks</th>
                                        <th>Created On</th>
                                        <th width="280px">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($marks as $key => $mark)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            <td>{{ $mark->studentName }}</td>
                                            <td>{{ $mark->maths }}</td>
                                            <td>{{ $mark->science }}</td>
                                            <td>{{ $mark->history }}</td>
                                            <td>{{ $mark->term }}</td>
                                            <td>{{ $mark->total_marks }}</td>
                                            <td>{{ $mark->created_at->format('F d Y H') }}PM</td>
                                            <td><a class="btn btn-primary"
                                                   href="{{ route('marks-management.edit',$mark->id) }}">Edit</a>
                                                {!! Form::open(['method' => 'DELETE','route' => ['marks-management.destroy', $mark->id],'style'=>'display:inline']) !!}
                                                {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}{!! Form::close() !!}
                                            </td>
                                        </tr>
                                    @endforeach

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
