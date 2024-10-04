import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors ";
const app = express();
app.use(helmet());

const PORT = 3010;

const corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Trop de requêtes, veuillez réessayer plus tard.",
});

app.get("/api/hello", limiter, (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
