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

    // Input validation
    if (!title || !description || !company) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (title.length > 100) {
      return res.status(400).json({ message: "Title cannot exceed 100 characters" });
    }

    // Check for duplicate job posts
    const existingPost = await Post.findOne({ title, company });
    if (existingPost) {
      return res.status(400).json({ message: "Job post with same title and company already exists" });
    }

    // Create a new job post
    const newPost = new Post({
      title,
      description,
      requirements,
      duties,
      location,
      salary,
      company,
    });

    const savedPost = await newPost.save();

    // Return the created job post data
    res.status(201).json(savedPost);
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

   // Delete a job post
const deleteJobPost = async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedPost = await Post.findByIdAndRemove(jobId);
    if (!deletedPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.status(200).json({ message: "Job post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting job post" });
  }
};

// Update a job post
const updateJobPost = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(jobId, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating job post" });
  }
};

  export { createJobPost, getAllJobPosts, deleteJobPost, updateJobPost}