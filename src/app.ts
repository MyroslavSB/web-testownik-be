import express, {Express} from 'express';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

