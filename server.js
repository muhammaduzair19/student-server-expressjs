import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

const studentData = fs.readFileSync("./data.json", "utf-8");
const parsedData = JSON.parse(studentData);

app.use(express.json())

app.get("/v1/studentData/getStudent", (req, res) => {
  res.status(200).json({
    data: parsedData
  });
});

app.get("/v1/studentData/getStudent/:rollNo", (req, res) => {
  console.log(req.params.rollNo)
  console.log(typeof req.params.rollNo)

  if (+(req.params.rollNo) > parsedData?.data.length) {
    return res.status(400).send("Data Not Available")
  }

  const singleStudent = parsedData?.data?.find((student) => {
    console.log(student)
    console.log(student.rollNo)
    return student.rollNo == req.params.rollNo
  })
  console.log(singleStudent)

  res.status(200).json({
    data: singleStudent;
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("working");
});
