var expressFunction = require('express');
var expressApp = expressFunction();

const students = [
    { stdid: 'B6220662', name: 'Phuwadon Decharm' },
    { stdid: 'B1234567', name: 'ภูวดล เดชารัมย์' },
];

expressApp.get('/api/resource/students/:stdid', function(req, res) {
    const stdid = req.params.stdid;
    console.log(stdid);
    if (stdid == 'B6220662') {
        res.status(200).send(students[0])
    } else if (stdid == 'B1234567') {
        res.status(200).send(students[1])
    } else {
        res.status(404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});