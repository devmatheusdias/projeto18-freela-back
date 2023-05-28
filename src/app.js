import express  from "express";
import cors from "cors";
import routes from './routes/indexRoutes.js'

// Server configs
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`));
