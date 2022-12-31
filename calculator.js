const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmi.html")
})
app.post('/bmicalculator', (req, res) => {
    var wg=parseFloat(req.body.wg);
    var hg=parseFloat(req.body.hg);
    var total = wg/(hg*hg);
    res.send("Your BMI is : " + total + " Its Your Height Plus Weight input previously")
})
app.post('/', (req, res) => {
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    total = num1+num2;
    res.send("The result of the calculation is " + total);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})