import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

const studentData = fs.readFileSync("./data.json", "utf-8");
const parsedData = JSON.parse(studentData);

app.get("/v1/studentData/getStudent", (req, res) => {
  res.status(200).json({
    data: parsedData,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("working");
});
