// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 5001;
app.use(express.json());
app.use(cors());
// MongoDB connection setup (replace 'yourMongoDBConnectionURL' with your MongoDB connection URL)
mongoose.connect('mongodb://127.0.0.1:27017/assign2', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// MongoDB schema and model
const internshipSchema = new mongoose.Schema({
  companyName: String,
  rollNumber: String,
  studentName: String,
  projectTitle: String,
  yearSemester: String,
  startDate: Date,
  endDate: Date,
  numberOfDays: Number,
  stipend: Number,
  
});

const Internship = mongoose.model('Internship', internshipSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.post('/api/internship/submit', upload.single('offerLetter'), async (req, res) => {
  const {
    companyName,
    rollNumber,
    studentName,
    projectTitle,
    yearSemester,
    startDate,
    endDate,
    numberOfDays,
    stipend,
  } = req.body;

  const offerLetter = req.file ? req.file.buffer.toString('base64') : null;

  const internship = new Internship({
    companyName,
    rollNumber,
    studentName,
    projectTitle,
    yearSemester,
    startDate,
    endDate,
    numberOfDays,
    stipend,
   
  });

  try {
    await internship.save();
    res.status(201).json({ message: 'Internship data submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// API to fetch interns for a specific company
app.get('/api/internship/:companyName', async (req, res) => {
  const { companyName } = req.params;
  try {
    const interns = await Internship.find({ companyName });
    res.json(interns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to fetch the count of interns for a specific company
app.get('/api/internship/count/:companyName', async (req, res) => {
  const { companyName } = req.params;
  try {
    const count = await Internship.countDocuments({ companyName });
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to fetch stipend data for a specific company
app.get('/api/internship/stipend/:companyName', async (req, res) => {
  const { companyName } = req.params;
  try {
    const stipendData = await Internship.find({ companyName }, 'stipend');
    res.json(stipendData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});