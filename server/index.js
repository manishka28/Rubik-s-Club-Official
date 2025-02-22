const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'deepu2002',
//   database: 'lab',
// });
// mongoose
//   .connect("mongodb://127.0.0.1:27017")
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((e) => {
//     console.log("DB not Connected : ", e);
//   });

app.use(express.json());

app.get("/", async (req, res) => {
  console.log(req.body, "Body");
  res.send("<h1>Hello World</h1>");
});
app.get("/user", async (req, res) => {
 
  res.json({});
});
app.post("/user", (req, res) => {
   
  res.send("<h1>Data Inserted</h1>");
});

app.get("*",(req,res)=>{
    res.send("Default Root");
})
app.listen(PORT, () => {
  console.log("Listening");
});
