# Backend
## Rest API
### Creator
#### Register
    POST /creator
    {
        name,
        email,
        password
    }
#### Log In
    POST /login
    {
        email,
        password
    }
#### Get
    GET /creator/:id

### Quiz
#### List
    GET /quiz
#### List public
    GET /quiz/public
#### Get
    GET /quiz/:id
#### Quiz (new)
    POST /quiz
    {
        "name":"quiz1",
        "public":true,
        "oneRound":true,
        "questions":[
            {
                "text":"kerdes1",
                "answers":[
                    {
                    "text":"valasz1",
                    "rightAnswer":false
                    },
                    {
                    "text":"valasz2",
                    "rightAnswer":true
                    }
                ]
            }
        ]
    }
### Quiz (modify)
    PUT /quiz
    {
        name,
        public,
        oneRound,
        questions,
            text
        answers,
            text,
            rightAnswer
        tags
    }
### Quiz (delete)
    id
    DELETE /quiz/:id
### RunCode generate
    quizId
    GET /runcode/:quizId
### RunCode play
    runcode
    GET /quiz/play/:runcode
### tags new
    text
    POST /tags
### tags modify
    text
    PUT /tags
### tags delete
    id
    DELETE /tags/:id
### tags list
    quizId
    GET/tags/quizId
