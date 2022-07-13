const express = require('express');

const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

let currentUser = {
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
};

let users = [{
  id: '01',
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  id: '02',
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  id: '03',
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  id: "01",
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  id: "02",
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  id: "03",
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

app.get('/current-user', (req, res) => {
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map(user => user.id === id ? updatedUser : user);

  res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});