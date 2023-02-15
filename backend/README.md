# Backend
## Rest API plan
### Register
    email
    password
    POST /creator
### Log In
    email
    password
    POST /login
### Quiz list
    GET /quiz
    GET /quiz/public
### Quiz get
    id
    GET /quiz/:id
### Quiz (new)
    name
    public
    oneRound
    questions
        text
        answers
            text
            rightAnswer
    tags
    POST /quiz
### Quiz (modify)
    name
    public
    oneRound
    questions
        text
        answers
            text
            rightAnswer
    tags
    PUT /quiz
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
