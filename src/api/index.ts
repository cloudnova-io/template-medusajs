import { Router } from 'express'

export default (_rootDirectory, _pluginOptions) => {
    const router = Router()
    router.get('/', (_req, res) => void res.send('🛍 Medusa API'))
    return router
}
