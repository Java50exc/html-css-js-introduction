import {videoConfig as config} from "../config/video_config.js";


export function checkPlayingTime(time) {
    return time >= config.minTime && time <= config.maxTime ? 
        '' : `time must be in the range [${config.minTime}-${config.maxTime}]`;

}