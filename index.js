const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.use('/', (req, res, next) => {
  res.send('<p>容器化Express应用!!</p>')
})
app.listen(PORT, () => console.log(`Server listening on port ${PORT}! http://localhost:8000`))