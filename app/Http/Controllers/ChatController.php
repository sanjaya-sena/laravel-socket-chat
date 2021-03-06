<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{


    /**
     * ChatController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function chat(){
        return view('chat');
    }

    public function send(Request $request){
        $user = User::find(Auth::id());
        event(new ChatEvent($request->message,$user));
    }
//    public function send(){
//        $user = User::find(Auth::id());
//        event(new ChatEvent('sdfsdf',$user));
//    }
}
