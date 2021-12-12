$(function(){
    $('#btn').click(function(){
        var link = $('#whurl').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avurl').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});
        
    });
});
