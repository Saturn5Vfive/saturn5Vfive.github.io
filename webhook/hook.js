$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avurl').val();
        if (link==null || link=="",content==null || content=="")
        {
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});
      
    });
});
