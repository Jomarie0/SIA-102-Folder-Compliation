const express = require(`express`);
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id:1, firstName:`Jomarie`,lastName:`Roperez`,section:`Bsit4b`, status: `present`,},
    { id:2, firstName:`Jomaria`,lastName:`Roperez`,section:`Bsit4b`, status: `absent`,},
];

// app.get(`/users`, (req,res) => {
//     res.status(200).json(users);
// });

app.get(`/users`, (req,res) => {
    const {firstName, lastName, section, status} = req.body;
    const userIndex = users.findIndex(user => user.firstName === firstName && usesr.lastName === lastName);

    if (userIndex !== -1) {
        userIndex[userIndex].status = status;
        console.log(`update attendance for ${lastName}, ${firstName} to ${status} `)
        res.status(200).json({message:`Attendance for ${lastName} ${firstName} has been updated to ${status}`});
    }
    else {
        const newUser = {
            id:users.length + 1,
            lastName,
            firstName,
            section,
            status
        };
        user.push(newUser);
        console.log(`New User Added ${lastName} ${firstName} with status ${status}`);
        res.status(201).json({ message: `New Student: ${lastName}, ${firstName} has been added with status ${status}`});
    }
});

app.get(`/users`,(req,res) => {
    res.status(200).json(users);
});

app.get(`/`,(req,res) => {
    res.send(`Server is up and Running!`);
});

app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});