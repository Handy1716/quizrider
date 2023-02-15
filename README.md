# QuizRider

## Adatbázis szerkezet:

## Creator:
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
## Scoreboard:
    id
    deviceId
    runCodeId
    created
    points
## Tags
    id
    Text
## QuizTags
    quizId
    tagsId
## RunCode
    id
    quizId
    runCode
