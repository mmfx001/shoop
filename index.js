// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://dilbekshermatov:dilbek1233@cluster0.y5hh3.mongodb.net/mydatabase?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, 
    socketTimeoutMS: 45000  
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose models

// 1. Tort model
const TortSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    rasm: { type: String, required: true },
    nomi: { type: String, required: true },
    soha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    narx: { type: String, required: true },
    manzil: { type: String, required: true },
    submittedAt: { type: String, required: true },
    telefon: { type: String, required: true },
    email: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const Tort = mongoose.model('Tort', TortSchema);

// 2. QolMehnati model
const QolMehnatiSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    rasm: { type: String, required: true },
    nomi: { type: String, required: true },
    soha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    manzil: { type: String, required: true },
    submittedAt: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String, required: true },
    narx: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const QolMehnati = mongoose.model('QolMehnati', QolMehnatiSchema);

// 3. Kiyimlar model
const KiyimlarSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    rasm: { type: String, required: true },
    nomi: { type: String, required: true },
    soha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    narx: { type: String, required: true },
    manzil: { type: String, required: true },
    submittedAt: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const Kiyimlar = mongoose.model('Kiyimlar', KiyimlarSchema);

// 4. User model
const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    likedItems: [String],
    viewedItems: [String],
    likeCount: { type: Number, default: 0 },
    submissionLimit: { type: Number, default: 6 }
});

const User = mongoose.model('User', UserSchema);

// 5. TortBuyurtmalari model
const TortBuyurtmalariSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nomi: { type: String, required: true },
    tafsiv: { type: String, required: true },
    qachongacha: { type: String, required: true },
    budjet: { type: String, required: true },
    telefon: { type: String, required: true },
    manzil: { type: String, required: true },
    submittedAt: { type: String, required: true },
    email: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const TortBuyurtmalari = mongoose.model('TortBuyurtmalari', TortBuyurtmalariSchema);

// 6. QolMehnatiBuyurtmalari model
const QolMehnatiBuyurtmalariSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nomi: { type: String, required: true },
    qachongacha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    budjet: { type: String, required: true },
    telefon: { type: String, required: true },
    email: { type: String, required: true },
    submittedAt: { type: String, required: true },
    manzil: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const QolMehnatiBuyurtmalari = mongoose.model('QolMehnatiBuyurtmalari', QolMehnatiBuyurtmalariSchema);

// 7. KiyimlarBuyurtmalari model
const KiyimlarBuyurtmalariSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nomi: { type: String, required: true },
    tafsiv: { type: String, required: true },
    qachongacha: { type: String, required: true },
    budjet: { type: String, required: true },
    telefon: { type: String, required: true },
    submittedAt: { type: String, required: true },
    email: { type: String, required: true },
    manzil: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const KiyimlarBuyurtmalari = mongoose.model('KiyimlarBuyurtmalari', KiyimlarBuyurtmalariSchema);

// 8. BarchaElonlar model
const BarchaElonlarSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    rasm: { type: String, required: true },
    nomi: { type: String, required: true },
    soha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    narx: { type: String, required: true },
    manzil: { type: String, required: true },
    submittedAt: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String, required: true },
    likeCount: { type: Number, default: 0 },
    location: { type: String, required: true }
});

const BarchaElonlar = mongoose.model('BarchaElonlar', BarchaElonlarSchema);

// 9. BarchaBuyurtmalar model
const BarchaBuyurtmalarSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nomi: { type: String, required: true },
    qachongacha: { type: String, required: true },
    tafsiv: { type: String, required: true },
    budjet: { type: String, required: true },
    telefon: { type: String, required: true },
    email: { type: String, required: true },
    submittedAt: { type: String, required: true },
    manzil: { type: String, required: true },
    location: { type: String, required: true }
});

const BarchaBuyurtmalar = mongoose.model('BarchaBuyurtmalar', BarchaBuyurtmalarSchema);

// 10. Message model
const MessageSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    text: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, required: true }
});

const Message = mongoose.model('Message', MessageSchema);

// 11. Comment model
const CommentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    productId: { type: String, required: true },
    comment: { type: String, required: true },
    userId: { type: String, required: true },
    submittedAt: { type: String, required: true }
});

const Comment = mongoose.model('Comment', CommentSchema);

// Helper function to create CRUD routes for a model
function createCRUDRoutes(model, path) {
    app.get(`/${path}`, async (req, res) => {
        try {
            const items = await model.find();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch items' });
        }
    });

    app.post(`/${path}`, async (req, res) => {
        try {
            const newItem = new model(req.body);
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        } catch (error) {
            res.status(400).json({ error: 'Failed to create item' });
        }
    });

    app.put(`/${path}/:id`, async (req, res) => {
        try {
            const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedItem);
        } catch (error) {
            res.status(400).json({ error: 'Failed to update item' });
        }
    });

    app.delete(`/${path}/:id`, async (req, res) => {
        try {
            await model.findByIdAndDelete(req.params.id);
            res.json({ message: 'Item deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: 'Failed to delete item' });
        }
    });
}

// Define CRUD routes for each model
createCRUDRoutes(Tort, 'tort');
createCRUDRoutes(QolMehnati, 'qolMehnati');
createCRUDRoutes(Kiyimlar, 'kiyimlar');
createCRUDRoutes(User, 'users');
createCRUDRoutes(TortBuyurtmalari, 'tortBuyurtmalari');
createCRUDRoutes(QolMehnatiBuyurtmalari, 'qolMehnatiBuyurtmalari');
createCRUDRoutes(KiyimlarBuyurtmalari, 'kiyimlarBuyurtmalari');
createCRUDRoutes(BarchaElonlar, 'barchaElonlar');
createCRUDRoutes(BarchaBuyurtmalar, 'barchaBuyurtmalar');
createCRUDRoutes(Message, 'messages');
createCRUDRoutes(Comment, 'comments');

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT}...da ishga tushdi`);
});
