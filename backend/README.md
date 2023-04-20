# Backend REST API

## Creator

### Register
    POST /creator
    {
        name,
        email,
        password
    }
### Log In
    POST /login
    {
        email,
        password
    }
### Profile
    GET /creator/me

## Quiz

### List own
    GET /quiz/me
### List public
    GET /quiz/public
### Get
    GET /quiz/:id
### Quiz save
    POST /quiz
    {
        id?,
        name,
        public,
        oneRound,
        questions: [
            {
                text,
                answers: [
                    {
                        text,
                        rightAnswer
                    }
                ]
            }
        ],
        tags: [
            {
                text
            }
        ]
    }
### Quiz (delete)
    DELETE /quiz/:id

## Runcode

### RunCode generate
    GET /runcode/:quizId
### RunCode play
    GET /play/:runcode

## Tags

### Tags list
    GET /tag/top

## Scoreboard

### Scoreboard
    POST /scoreboard
    {
        runCode,
        deviceId,
        name,
        answers: [
            {
                questionId,
                answerId,
                time
            }
        ]
    }
