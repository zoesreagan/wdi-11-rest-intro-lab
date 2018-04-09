const express = require ('express')
const app = express();

const superheroes = ['batman', 'superman', 'hulk']

app.get('/superheroes', (req, res) => {
  res.send(superheroes);
})



app.listen(3000, () => {
  console.log("here to save the day");
});
