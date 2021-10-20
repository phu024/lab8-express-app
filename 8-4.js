var expressFunction = require('express');
var expressApp = expressFunction();

expressApp.use(expressFunction.json());

const students = [
    { stdid: 'B6220662', name: 'Phuwadon Decharm' },
    { stdid: 'B1234567', name: 'ภูวดล เดชารัมย์' },
];

expressApp.post('/api/resource/students', function(req, res) {
    const stdid = req.body.stdid;
    const name = req.body.name;
    //console.log(stdid, name);
    if (stdid.length == 8) {
        const student = { stdid: stdid, name: name }
        students.push(student)
        res.status(200).send(student)
    } else {
        res.status(400).send('Error cannot add student!');
    }
});

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});