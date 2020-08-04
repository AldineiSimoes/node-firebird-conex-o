const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname,'users.json')

const getUser = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (user) => fs.writeFileSync(filePath, JSON.stringify(user, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUser()
            res.send([users])
        })
        .post((req, res) =>{
            const users = getUser()
            users.push(req.body)
            saveUser(users)
            res.status(200).send('ok')
        })
        .put((req, res) => {
            const users = getUser();

            saveUser(users.map(user => {
                if(user.id == req.params.id) {
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user;
            }))

            res.status(200).send('ok');
        })
        .delete((req,res) => {
            const users = getUser();

            saveUser(users.filter(user => user.id !== req.params.id))

            res.status(200).send('0k');
        })
}

module.exports = userRoute