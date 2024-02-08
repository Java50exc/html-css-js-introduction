import {videoConfig as config} from "../config/video_config.js";

export class DataForm {
    #parentElem;
    #inputElements;
    #formElem;

    constructor(parentElement) {
        this.#parentElem = document.getElementById(parentElement);

        if (!this.#parentElem) {
            throw `${parentElement} not found`;
        }

        this.#parentElem.innerHTML = `
        <form id="video-form">
            <input required name="time" placeholder="enter duration" class="form-input" type="number">
            <div id="select-video-group">
                <label>Select Video</label>
                <select name="video" id="videos" class="form-select">
                    ${this.#addOptions()}  
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>`;

        this.#formElem = this.#parentElem.querySelector("#video-form");
        this.#inputElements = this.#formElem.querySelectorAll("[name]");
    }

    #addOptions() {
        return config.videoLinks.map((e, i) => `<option value="${i}">${i}</option>`).join('');
    }

    addHandler(handlerFn) {
        this.#formElem.addEventListener("submit", async (event) => {
            event.preventDefault();

            const inpObj = Array.from(this.#inputElements).reduce((obj, inputElem) => 
                (obj[inputElem.name] = +inputElem.value, obj), {});

                const message =  await handlerFn(inpObj);
                message ? alert(message) : this.#formElem.reset();
        });


    }
}