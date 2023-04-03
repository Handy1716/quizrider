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
### Quiz (new)
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
