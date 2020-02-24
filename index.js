var cvs, ctx, width, height

function setup() {
    cvs=document.createElement("canvas")
    ctx=cvs.getContext("2d")
    width=cvs.width=window.innerWidth
    height=cvs.height=window.innerHeight
    document.body.appendChild(cvs)
    let text=document.createElement("section")
    text.innerHTML="Hello This is a tutorial page on Raymarching";
    text.style.margin=width/10+"px"
    text.style.width=width/3+"px"
    text.style.color="#fff"
    text.style.fontFamily="Open Sans"
    document.body.appendChild(text)
    fill(255)
    ctx.fillRect(0,0,width,height)
    requestAnimationFrame(draw)
}

function draw() {
    fill(Math.random()*10+40,1)
    ctx.fillRect(0,0,width,height)
    requestAnimationFrame(draw)
}

function fill(r,g,b,a) {
    if(!a){
        if(!b){
            a=g
            g=b=r
        }else{
            a=255
        }
    }
    ctx.fillStyle=`rgba(${r},${g},${b},${a})`
}

function stroke(r,g,b,a) {
    if(!a){
        if(!b){
            a=g
            g=b=r
        }else{
            a=255
        }
    }
    ctx.strokeStyle=`rgba(${r},${g},${b},${a})`
}