export class Question {
    private questionText: string;
    private a1: string;
    private a2: string;
    private a3: string;
    private a4: string;
    constructor (questionText: string, a1: string, a2:string, a3: string, a4: string) {
        this.questionText = questionText;
        this.a1=a1;
        this.a2=a2;
        this.a3=a3;
        this.a4=a4;
    }
}