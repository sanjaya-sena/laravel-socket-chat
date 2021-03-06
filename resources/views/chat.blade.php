<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <style>
        .list-group{
            overflow-y: scroll;
            height: 200px;
        }
    </style>
</head>
<body>

    <div class="container" id="app">
        <div class="row">
            <div class="offset-4 col-4 col-sm-8 offset-sm-2">
                <li class="list-group-item active">Chat Room</li>
                <ul class="list-group" v-chat-scroll>
                    <message
                            v-for="value, index in chat.message"
                            :key="value.index"
                            :color=chat.color[index]
                            :user=chat.user[index]
                    >
                        @{{ value }}
                    </message>
                </ul>
                <small>@{{ typing }}</small>
                <input type="text" class="form-control" placeholder="Type your message here..." v-model="message" @keyup.enter="send">
            </div>
        </div>
    </div>

<script src="{{asset('js/app.js')}}"></script>
</body>
</html>