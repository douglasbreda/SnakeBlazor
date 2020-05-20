document.onkeydown = function (event) {
    //console.log(event.keyCode);
    DotNet.invokeMethod("SnakeBlazor", "OnKeyDown", event.keyCode);
}