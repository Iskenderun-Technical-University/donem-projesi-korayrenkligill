import express from 'express'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'theatres-test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL database connected!');
});

app.post('/theatres/add', (req, res) => {
  const theatre = req.body;

  const sql = `INSERT INTO theatres (name, trailer, price, cast, time, categories, image, sessions) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [theatre.name, theatre.trailer, theatre.price, theatre.cast, theatre.time, 
                  theatre.categories, theatre.image, theatre.sessions];

  connection.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    console.log(`Tiyatro nesnesi başarıyla eklendi: ${result.insertId}`);
    res.send(`Tiyatro nesnesi başarıyla eklendi: ${result.insertId}`);
  });
});

app.get("/theatres", (req,res)=>{
  const sql = `SELECT * FROM theatres`;
  connection.query(sql,(err,result) => {
    if (err) return res.json(err);
    else{
      for(var i = 0; i < result.length; i++){
        result[i].image = result[i].image.toString('binary').toString('base64');
      }
      return res.json(result);
    }
  })
})

app.get('/theatres',(req,res)=>{
    res.json("hello world");
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});