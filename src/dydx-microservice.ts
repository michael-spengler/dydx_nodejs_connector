const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getPositions', function (request: any, response: any) {

  return "call getPositions method of dydx-connector.ts"

})

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
