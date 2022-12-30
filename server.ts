import app from './index'
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.SERVER_PORT 
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))