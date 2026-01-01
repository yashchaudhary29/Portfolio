const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware (Inke bina connection nahi hoga)
app.use(cors()); 
app.use(express.json());

// Test Route: Check karne ke liye ki server zinda hai
app.get('/', (req, res) => {
    res.send("Server ekdum mast chal raha hai!");
});

// Contact Route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yc2670235@gmail.com', // Apna asli email yahan dalo
            pass: 'chasnzklkzpfgphi'    // 16-digit App Password (bina space)
        }
    });

    const mailOptions = {
        from: 'yc2670235@gmail.com',
        to: 'yc2670235@gmail.com', // Aapko khud hi email aayega
        subject: `New Message from ${name}`,
        text: `From: ${email}\n\nMessage: ${message}`
    };

    // Server.js ka try-catch block bas itna badal lo:
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true }); // JSON bhejo
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));