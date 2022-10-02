

// const nodemailer = require('nodemailer');
// const Photo = require('../models/Photo');
// const User = require('../models/User');

// exports.getIndexPage = async (req, res) => {
//   res.status(200).render('index', {
//     page_name: 'index',
//   });
// };
exports.getAboutPage = async (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
exports.getAddPage = async (req, res) => {
  res.status(200).render('add', {
    page_name: 'add',
  });
};