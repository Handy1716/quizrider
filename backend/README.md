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

