import { ProgressModel } from "./ProgressModel";

export class State {
    currentTime: number;
    elapsedTime: number;
    progressModel: ProgressModel
    constructor(from?: State) {
        this.currentTime = from?.currentTime || Date.now();
        this.elapsedTime = from?.elapsedTime || 0;
        this.progressModel = from?.progressModel || { target: 100, current: 0 };
    }
    clone(): State {
        return new State(this);
    }
}