const express = require ('express')
const app = express();

const superheroes = [
  {
    name: 'batman',
    powers: ['wealth', 'batsignal']
  },
  {
    name: 'superman',
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
  {
    name: 'hulk',
    powers: ['strength', 'being green']
  }
];

app.get('/superheroes', (req, res) => {
  res.send(superheroes);
});

app.get('/superheroes/:id', (req, res) => {
  const index = req.params.id
  res.send(superheroes[index]);
});



app.listen(3000, () => {
  console.log("here to save the day");
});
