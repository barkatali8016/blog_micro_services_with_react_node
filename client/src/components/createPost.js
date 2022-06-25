import React, { useRef } from "react";
const axios = require("axios").default;
const CreatePost = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const submitForm = async (event) => {
    event.preventDefault();

    console.log("Event", titleRef.current.value);
    try {
      const post = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      };
      const response = await axios.post(
        "http://localhost:3001/api/posts/add",
        post
      );
      console.log(response);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="postTitle">
          Title
        </label>
        <input
          className="form-control"
          ref={titleRef}
          name="postTitle"
          id="postTitle"
        />
      </div>
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="postTitle">
          Description
        </label>
        <input
          className="form-control"
          ref={descriptionRef}
          name="description"
          id="description"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
