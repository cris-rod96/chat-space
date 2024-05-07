import app from './src/server.js'
import { sequelize } from './src/database/db.js'

const PORT = process.env.PORT ?? 3000

sequelize
  .sync({ logging: false, force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening in PORT: http://localhost:${PORT}`)
    })
    console.log('Database connected')
  })
  .catch((err) => console.log(`Error en la conexion: ${err.message}`))
