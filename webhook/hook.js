function fireserver(){
    var link = document.getElementById("whurl").value;
    var username = document.getElementById("username").value;
    var content = document.getElementById("content").value;
    var avatar = document.getElementById("avurl").value;
    postData(link, {"content": content, "username": username, "avatar_url": avatar});
}


function postData(link, obj) {
    fetch(link, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(obj),
        mode: "no-cors"
    })
}
