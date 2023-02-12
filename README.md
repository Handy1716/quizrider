# QuizRider

## Adatbázis szerkezet:

## creator:
    id
    email
    password
    created
## Quiz:
    id
    creatorId
    name
    public
    oneRound
## Questions:
    id
    quizId
    Text
## Answer:
    id
    questionId
    Text
    RightAnswer
    
