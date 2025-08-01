export class ScreenShake{
    constructor(options={}){
        const{
            intensity = 10,
            duration = 200
        } = options;
        this.intensity = intensity;
        this.duration = duration;
        this.screenShake();
    };
    screenShake(){
        let startTime = performance.now();

        const maxShakeOffset = this.intensity; // Maximum shake intensity
        const duration = this.duration;

        function shake() {
            let elapsedTime = performance.now() - startTime;
            if (elapsedTime > duration) {
                document.body.style.transform = ''; // Reset position
                return;
            }

            let shakeX = (Math.random() * maxShakeOffset * 2) - maxShakeOffset;
            let shakeY = (Math.random() * maxShakeOffset * 2) - maxShakeOffset;

            document.body.style.transform = `translate(${shakeX}px, ${shakeY}px)`;

            requestAnimationFrame(shake);
        }

        shake(); // Start shaking
        }
}
export function screenShake(duration = 200) {
    let startTime = performance.now();
    let maxShakeOffset = 10; // Maximum shake intensity

    function shake() {
        let elapsedTime = performance.now() - startTime;
        if (elapsedTime > duration) {
            document.body.style.transform = ''; // Reset position
            return;
        }

        let shakeX = (Math.random() * maxShakeOffset * 2) - maxShakeOffset;
        let shakeY = (Math.random() * maxShakeOffset * 2) - maxShakeOffset;

        document.body.style.transform = `translate(${shakeX}px, ${shakeY}px)`;

        requestAnimationFrame(shake);
    }

    shake(); // Start shaking
}