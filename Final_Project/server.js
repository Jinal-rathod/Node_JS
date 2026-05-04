require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }),
);

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/postRoutes"));

app.use((req, res, next) => {
  res.locals.user = req.session.userId
    ? { _id: req.session.userId, role: req.session.role }
    : null;
  next();
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
