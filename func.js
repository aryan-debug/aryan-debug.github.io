function move()
{
    document.getElementById("button2").style.marginTop = Math.floor(Math.random() * window.innerHeight - 60).toString() + 'px';
    document.getElementById("button2").style.marginLeft = Math.floor(Math.random() * window.innerWidth - 60).toString() + 'px';
}