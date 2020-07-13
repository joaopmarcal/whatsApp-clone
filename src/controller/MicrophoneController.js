export class MicrophoneController {

    constructor() {

        navigator.mediaDevices.getUserMedia({
            audio:true
        }).then(stream => {

            this._stream = stream;

            let audio = new Audio();

            audio.src = URL.createObjectURL(stream);

            audio.play();

        }).catch(err => {
            console.error(err);
        })

    }



}