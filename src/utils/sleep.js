import { VideoPlayer } from "../ui/video-player.js";

export function sleep(timeout) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timeout)
    })
}

export function mySleep(player, timeout) {
    return new Promise(resolve => {
        const startTime = player.getPlayingTime();
        setInterval(() => {
            if (player.getPlayingTime() >= timeout + startTime || 
            player.getPlayingTime == player.getDuration()) {
                    resolve();
            }
        }, 100);   
    });
}