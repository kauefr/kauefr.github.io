import { useEffect, useReducer } from "react"
import { ProgressModel, ProgressView } from "./ProgressModel";
import { State } from "./State";

type TickActionType = "tick";
type ActionType = TickActionType;

type TickAction = {
    type: TickActionType,
    time: number
}

type Action = TickAction;

function reducer(state: State, action: Action): State {
    const deltaT = action.time - state.currentTime;
    const newState = new State(state);
    newState.currentTime = action.time;
    newState.elapsedTime += deltaT;
    newState.progressModel.current = ((state.progressModel.current + 1) % (state.progressModel.target + 1));
    return newState;
}

function tick(): TickAction {
    return { type: 'tick', time: Date.now() }
}

export default function SevenSeasIdle(): JSX.Element {
    useEffect(() => { document.title = "Seven Seas Idle" }, []);
    const [state, dispatch] = useReducer(reducer, new State());
    useEffect(() => {
        const interval = setInterval(() => dispatch(tick()), 1000);
        return () => clearInterval(interval);
    })
    return (<>
        <p>Count</p>
        <p>{state.currentTime}</p>
        <p>{state.elapsedTime}</p>
        <ProgressView model={state.progressModel} />
    </>);
}