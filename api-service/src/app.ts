import express from 'express';
import payRoutes from './routes/pay';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', payRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});