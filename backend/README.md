# Backend
## Creator
### Register
    POST /creator
    {
        name,
        email,
        password,
        quizzes: []
    }
### Log In
    POST /login
    {
        email,
        password
    }
### Get
    GET /creator/:id

## Quiz
### List
    GET /quiz
### List public
    GET /quiz/public
### Get
    GET /quiz/:id
### Quiz (new)
    POST /quiz
    {
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
        ]
    }
## Quiz (modify)
    PUT /quiz
    {
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
        ]
    }
## Quiz (delete)
    DELETE /quiz/:id
## RunCode generate
    GET /runcode/:quizId
## RunCode play
    GET /play/:runcode
## Tags (new)
    POST /tags
    {
        text
    }
## Tags (modify)
    PUT /tags
    {
        text
    }
## Tags (delete)
    DELETE /tags/:id
## Tags list
    GET /tags/quizId
