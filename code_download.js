
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("download").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var html = document.getElementById("html");
        var css = document.getElementById("css");
        var js = document.getElementById("js");
    var text =html.value +
    "<style type='text/css'>" +
    css.value +
    "</style>" +
    "<script type='text/javascript'>" +
    js.value +
    "</script>" + "</html>";
    var filename=document.getElementById("form3").value;
    
    download(filename, text);
}, false);
