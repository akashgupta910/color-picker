let clip = document.getElementById("clip");

function CopyToClipboard (clicked_id) {
    const el = document.createElement('textarea');
    el.value = clicked_id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    clip.style.display = "block";    
    setTimeout(function () {
        clip.style.display = "none";
    }, 3000);
}
