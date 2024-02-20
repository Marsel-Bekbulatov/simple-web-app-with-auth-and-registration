const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path'); 

const app = express();
const PORT = 4000;

mongoose.connect('mongodb+srv://mrb06784:Mars20041205.@cluster0.xz6xnja.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

//schema for user
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

//model for user
const User = mongoose.model('User', userSchema);

app.use(cors()); 


app.use(bodyParser.json());
app.use(cookieParser()); 

app.use(express.static(path.join(__dirname, 'src'))); 


app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists with the same email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/auth', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists with the given email and password
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = 'fakeAuthToken';  

        res.cookie('authToken', token, { httpOnly: true });
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('http://localhost:4000/api/user-info', async (req, res) => {
    const authToken = req.cookies.authToken;

    if (!authToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

});



