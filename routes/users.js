const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render(`users/list`, { users: users });
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "" });
});

router.post("/", (req, res) => {
  // res.send('Creating a new user');
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const gender = req.body.gender;

  const isValid = firstName !== "" && lastName;
  if (isValid) {
    console.log(`Adding User: ${firstName}`);
    users.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
    });

    console.log(`New Set of Users: ${users}`);
    res.send("Success!");

  } else {
    console.log("Invalid User Data");
    res.render("users/new", { firstName: firstName });
  }
});

// router.get('/:ide', (req, res) => {
//     res.send(`Getting User data: ${req.params.id}`);
// });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Getting User Data: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleting User data: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updating User data: ${req.params.id}`);
  });

const users = [];

router.param("id", (req, res, next, id) => {
  console.log(`Accessing user: #${id}`);
  next();
});
module.exports = router;
