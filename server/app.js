import cors from 'cors';
import express from 'express'
import fs from 'fs';
import * as pg from 'pg';

const app = express();

const userJSON = 'assets/users.json'
const PORT = 8082;

const { Client } = pg.default;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432
});

app.use(express.json());
app.use(cors());

let universitiesJSON; 

const connectFetchData = async () => {
  try {
    await client.connect();
    const query = 'SELECT * from universities';
    const result = await client.query(query);
    universitiesJSON = result.rows;
  } catch (err) {
    console.log(err)
  } finally {
    await client.end();
  }
}

const fetchUserTable = () => {
  const rawData = fs.readFileSync(userJSON)
  const data = JSON.parse(rawData)
  return data
}

const findUserDataIndex = (username) => {
  const data = fetchUserTable()
  const index = data.user_list.findIndex(x => x.username === username)
  return index
}

const findUserProfile = (username) => {
  const data = fetchUserTable()
  const index = findUserDataIndex(username)
  return data.user_list[index]
}

const fetchUniversitiesTable = (continent, major) => {
  let filteredData = []
  const rawData = universitiesJSON

  if (!continent && !major) {
    return rawData
  }
  if (continent && major) {
    filteredData = rawData.filter(item => item.continent === continent && item.popular_major === major)
    return filteredData
  } else if (continent) {
    filteredData = rawData.filter(item => item.continent === continent)
    return filteredData
  } else {
    filteredData =  rawData.filter(item => item.popular_major === major)
    return filteredData
  }
}

// -------------------GET-------------------
app.get('/api/user_list', (req, res) => {
  try {
    const data = fetchUserTable()
    res.status(200).json(data.user_list)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

app.get('/api/user_profile', (req, res) => {
  try {
    const data = findUserProfile(req.query.username)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
})

app.get('/api/universities_list', (req, res) => {
  try {
    const { continent, major } = req.query
    const data = fetchUniversitiesTable(continent, major)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
})

// -------------------PATCH-------------------
app.patch('/api/user_profile', (req, res) => {
  try {
    const allData = fetchUserTable()
    const profileIndex = findUserDataIndex(req.body.username)
    const data = findUserProfile(req.body.username)
    data.full_name = req.body.full_name
    data.nationality = req.body.nationality
    data.residence = req.body.residence

    allData.user_list[profileIndex] = data

    const newData = JSON.stringify(allData)
    fs.writeFile(userJSON, newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});

app.patch('/api/subscribe_newsletter', (req, res) => {
  try {
    const allData = fetchUserTable()
    const profileIndex = findUserDataIndex(req.body.username)
    const data = findUserProfile(req.body.username)
    data.subscribe_newsletter = req.body.subscribe_newsletter

    allData.user_list[profileIndex] = data

    const newData = JSON.stringify(allData)
    fs.writeFile(userJSON, newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});

app.patch('/api/fav_universities', (req, res) => {
  try {
    const allData = fetchUserTable()
    const profileIndex = findUserDataIndex(req.body.username)
    const data = findUserProfile(req.body.username)

    let newEntry = data.fav_universities
    newEntry.push(req.body.fav_universities)

    data.fav_universities = newEntry
    allData.user_list[profileIndex] = data

    const newData = JSON.stringify(allData)
    fs.writeFile(userJSON, newData, function (err, result) {
      if (err) console.log('error', err)
    })
    res.status(200).json(data)
  } catch (error) {
      res.status(400).json({ success: false, error });
  }
});
  
app.listen(PORT, () => {
  console.log(`Connecting to DB`);
  connectFetchData();
  console.log(`Server Listening on ${PORT}`);
});
