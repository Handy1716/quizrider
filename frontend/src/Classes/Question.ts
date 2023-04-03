import { Answer } from "./Answer";

export class Question {
    private questionText: string;
    private a1: Answer;
    private a2: Answer;
    private a3: Answer;
    private a4: Answer;
    constructor (questionText: string, a1: Answer, a2:Answer, a3: Answer, a4: Answer) {
        this.questionText = questionText;
        this.a1=a1;
        this.a2=a2;
        this.a3=a3;
        this.a4=a4;
    }
}