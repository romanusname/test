export default function noise(ctx,noise) {

    console.log('NOISE')

    function animate(ctx) {
        const w = ctx.canvas.width,
            h = ctx.canvas.height,
            iData = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(iData.data.buffer),
            len = buffer32.length

        for (let i = 0; i < len; i++)

            if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

        ctx.putImageData(iData, 0, 0);
    }
    (function loop() {
        animate(ctx);
       if(noise.animation!==false) requestAnimationFrame(loop);
    })();
}