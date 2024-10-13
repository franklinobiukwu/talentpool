import Post from "../models/jobPostModel.js"

// creating a job post
const createJobPost = async (req, res) => {
    try {
      const {
        title,
        description,
        requirements,
        duties,
        location,
        salary,
        company,
        timestamp,
        tags,
        state,
      } = req.body;
  
      const newPost = new Post({
        title,
        description,
        requirements,
        duties,
        location,
        salary,
        company,
        timestamp,
        tags,
        state,
      });
  
      const savedPost = await newPost.save();
  
      res.status(201).json({ message: "Job post created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating job post" });
    }
  };

  //listing all jobs from the database
  const getAllJobPosts = async (req, res) => {
    try {
      const jobPosts = await Post.find().exec();
  
      res.status(200).json(jobPosts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving job posts" });
    }
  };

  export { createJobPost, getAllJobPosts}