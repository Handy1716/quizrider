

export class QuizElement {
    name: string;
    creatorName: string;
    popularity: number;
    scoreboard: string;

    constructor(name: string, creatorName: string, popularity: number, scoreboard: string) {
        this.name = name;
        this.creatorName = creatorName ;
        this.popularity = popularity;
        this.scoreboard= scoreboard;
    }
  }