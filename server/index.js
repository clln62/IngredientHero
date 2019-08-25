const dotenv = require('dotenv').config({path: ('../.env')});
const express = require('express');
const app = express();
const db = require('./database/database.js')

//app.use(express.static(path.join(__dirname + './client/public')));
app.get('/', function(req,res) {
  res.send(express.static(__dirname + './client/public'));
})
//app.use(bodyParser.json());

// app.use( '../client/public', (res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
/**********************************************************************************/
//This should be an object with the username and password
/* A function will need to be built in the database that will use a query string 
that gains all of the user information that matches the username and password.
Upon receiving this information back from the database, the server will send the
user information back to the client in an array of objects that will be sent to 
the pantry page for use. */
app.get('/mylogin', (req, res) => {
  let profile = req.body
  db.accessUser(profile, (err, data) => {
    if (err) {
        res.end();
    }
    res.send(data);
  });
});
/**********************************************************************************/
//This should be an object with a name, email, username, and password
/* A function will need to be built in the database that will use a query string 
to create a new user with the information from the req.body. The server doesn't
need to send back any information, except for maybe a success message. */
app.post('/mysignup', (req, res) => {
  let newUser = req.body
  db.addNewUser(newUser, (err, data) => {
    if (err) {
      res.end();
    }
    res.send()
  })
});
/**********************************************************************************/
//This should have the user id, item, and expiration date
/* Given the information from req.body, a function will need to be built in the 
database that will use a query string to add the item and expiration date to the 
users id. The server should only send a success message back to the client, but
the item should reflect on the page for the user. */
app.post('/addingtopantry', (req, res) => {
    let pantryItem = req.body
    db.addFoodToPantry(pantryItem, (err, data) => {
      if(err) {
        res.end();
      }
      res.send()
    }) 
});
/**********************************************************************************/
//This should allow the user to delete the consumed or expired food item
/* Given the information from req.body.id, a function will need to be build in the database that will use a query string to
remove an item from the users id. The server should only send a successful message back to the client, but the item should no
longer reflect on the page for the user. */
app.delete('/removefrompantry', (req, res) => {
  const trash = req.body.id;
  db.removePantryItem(trash, (err, data) => {
      if (err) {
          res.end();
      }
  });
});
/**********************************************************************************/




app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
