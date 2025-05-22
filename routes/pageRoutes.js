const express = require('express');
const router = express.Router();
const data = require('../data.json');

// Home
router.get('/', (req, res) => {
  res.render('home', {
    layout: 'main',
    title: 'Home Page',
    welcomeMessage: 'Welcome to the Handlebars Lab!',
    people: data.people,
    showImage: true
  });
});

// About
router.get('/about', (req, res) => {
  res.render('home', {
    layout: 'main',
    title: 'About Us',
    welcomeMessage: 'Learn more about us!',
    people: [],
    showImage: false
  });
});

// Items List
router.get('/items', (req, res) => {
  res.render('home', {
    layout: 'main',
    title: 'Item List',
    items: data.items,
    showImage: false
  });
});

// Item Detail
router.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.items.find(i => i.id === id);
  if (item) {
    res.render('home', {
      layout: 'main',
      title: `Item ${id}`,
      item,
      showImage: false
    });
  } else {
    res.status(404).render('home', {
      layout: 'main',
      title: 'Item Not Found',
      errorMessage: 'Sorry, that item does not exist.',
      showImage: false
    });
  }
});

module.exports = router;