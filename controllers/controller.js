import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import { data, answers } from "../database/data.js";

//get all questions
export const getQuestions = async (req, res) => {
  // res.json("quesiton api get request");
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
};

//insert all quesitons
export const insertQuestions = async (req, res) => {
  // res.json("quesiton api insert request");
  try {
    Questions.insertMany({ questions: data, answers: answers });
    res.json({ msg: "Insert data succesfully" });
  } catch (error) {
    res.json({ error });
  }
};

//delete all questions
export const dropQuestions = async (req, res) => {
  // res.json("quesiton api delete request");
  try {
    Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully...!" });
  } catch (error) {
    res.json(error);
  }
};

//get all result
export const getResult = async (req, res) => {
  // res.json("result api get result");
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json(error);
  }
};

// post all result
export const storeResult = async (req, res) => {
  // res.json("result api post result");

  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data not provided");
    // Results.create(
    //   { username, result, attempts, points, achived },
    //   (err, data) => {
    //     res.json({ msg: "Result Saved Successfully!" });
    //   }
    // );
    try {
      const newPost = await Results.create({
        username,
        result,
        attempts,
        points,
        achived,
      });
      console.log(newPost);
      res.json({ msg: "Post result successfuly" });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.json(error);
  }
};

//delete all result
export const dropResult = async (req, res) => {
  // res.json("result api delete result");
  try {
    await Results.deleteMany();
    res.json({ msg: "Result deleted succesfully!" });
  } catch (error) {
    res.json({ error });
  }
};
