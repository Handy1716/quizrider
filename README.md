# QuizRider

## Adatbázis szerkezet:

## Creator:
    id
    name
    email
    password
## Quiz:
    id
    creatorId
    name
    public
    oneRound
## Questions:
    id
    quizId
    text
## Answer:
    id
    questionId
    text
    rightAnswer
## Scoreboard:
    id
    deviceId
    name
    runCodeId
    finishTime
    points
## Tags
    id
    text
## QuizTags
    id
    quizId
    tagsId
## RunCode
    id
    quizId
    runCode
