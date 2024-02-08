import { videoConfig as config } from "../config/video_config.js";

export class VideoPlayer {
    #parentElem;
    #videoElem;

    constructor(parentElement) {
        this.#parentElem = document.getElementById(parentElement);

        if (!this.#parentElem) {
            throw `parent element ${parentElement} not found`;
        }

        this.#parentElem.innerHTML = '<video id="video" src="" controls hidden></video>';
        this.#videoElem = this.#parentElem.querySelector("video");
    }

    setUrl(url) {
        if (config.videoLinks[url] != this.#videoElem.src) {
            this.#videoElem.src = config.videoLinks[url];
        }
        
        this.#videoElem.removeAttribute('hidden');
    }

    start() {
        this.#videoElem.play();
    }

    stop() {
        this.#videoElem.pause();
    }

    getPlayingTime() {
        return this.#videoElem.currentTime;
    }

    getDuration() {
        return this.#videoElem.duration;
    }


}