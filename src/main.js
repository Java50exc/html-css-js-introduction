import {DataForm as Form} from "./ui/input-data-form.js";
import {VideoPlayer as Player} from "./ui/video-player.js";
import { checkPlayingTime } from "./service/checkTime.js";
import { mySleep } from "./utils/sleep.js";

const form = new Form("form-section");
const player = new Player("video-section");

function playVideo(obj) {
    let res = checkPlayingTime(obj.time);

    if (res) {
        return res;
    }
    player.setUrl(obj.video);
    player.start();
    mySleep(player, obj.time).then(() => player.stop()); 
}

form.addHandler(playVideo);



