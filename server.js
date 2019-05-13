let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app/public/')));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });;
  