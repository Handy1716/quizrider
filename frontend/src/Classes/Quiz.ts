import { Question } from "./Question";


export class Quiz {
    private name: string;
    private tags: string[];
    private oneRound: boolean;
    private publicB: boolean;
    private quiestions: Question[];

    constructor(name: string, tags:string[], oneRound: boolean, publicB: boolean, questions: Question[])
    {
        this.name = name;
        this.tags = tags;
        this.oneRound = oneRound;
        this.publicB = publicB;
        this.quiestions = questions;


    }
}