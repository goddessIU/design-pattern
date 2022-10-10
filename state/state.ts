interface State {}

interface IMario {
    getName(): State;
    obtainMushRoom(fsm: MarioStateMachine);
    obtainFireFlower(fsm: MarioStateMachine);
}

class SmallMario implements IMario {
    private static instance: SmallMario = new SmallMario();
    private constructor() {}
    public static getInstance(): SmallMario {
        return this.instance;
    }

    public getName(): State {
        
    }

    public obtainMushRoom(fsm: MarioStateMachine) {
        fsm.setCurrentState();
        fsm.setScore();
    }
}

class MarioStateMachine {
    private score: number;
    private currentState: IMario;

    constructor() {
        this.score = 0;
        this.currentState = SmallMario.getInstance();
    }

    public getScore(): number {
        return this.score;
    }

    public getCurrentState() {
        return this.currentState;
    }

    public setScore(score: number) {
        this.score = score;
    }

    public setCurrentState(fsm) {
        this.fsm = fsm;
    }

}