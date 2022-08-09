const express = require("express")
const app = express()

app.get("/", function(res, req) {
    res.setEncoding("working!!!")
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.listen(process.env.PORT || 5000);