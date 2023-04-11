"use client";
import gsap from 'gsap'
export default function noise(ctx,noise) {

    player()
    player()

    function player(){
        function getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }

        let pos = {x:200,y:200}
        let direction = 1
        setInterval(()=>{
            direction = getRandom(1,4)
        },1000)
        gsap.ticker.add(render);

        function render() {
            // let direction = getRandom(1,4)
            if(direction==1) pos.x+=1
            if(direction==2) pos.x+=-1
            if(direction==3) pos.y+=1
            if(direction==4) pos.y+=-1

            ctx.clearRect(0, 0, 800, 500);
            ctx.fillStyle = "black";
            ctx.fillRect(pos.x, pos.y, 50, 50);
        }
    }




}







/*
"use client";
import gsap from 'gsap'
export default function noise(ctx,noise) {

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    let pos = {x:200,y:200}
    let direction = 1
    setInterval(()=>{
        direction = getRandom(1,4)
    },1000)


    gsap.ticker.add(render);

    function render() {
       // let direction = getRandom(1,4)
        if(direction==1) pos.x+=1
        if(direction==2) pos.x+=-1
        if(direction==3) pos.y+=1
        if(direction==4) pos.y+=-1

        ctx.clearRect(0, 0, 800, 500);
        ctx.fillStyle = "black";
        ctx.fillRect(pos.x, pos.y, 50, 50);
    }

}*/
