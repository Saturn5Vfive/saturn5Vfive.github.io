function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", document.getElementById("whurl").value);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
}
