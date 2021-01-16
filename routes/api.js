import authController from '../app/http/controllers/authContoller.js'

const initRoutes = (app) => {
    app.post('/api/register', authController().register)
}

export default initRoutes