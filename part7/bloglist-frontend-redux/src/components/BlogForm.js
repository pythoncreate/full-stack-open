import React from "react";

const BlogForm = ({ addBlog, newBlog, handleBlogChange }) => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Add A New Blog Post</h4>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={addBlog}>
                <div className="form-group row">
                  <label
                    for="title"
                    className="col-lg-3 col-form-label form-control-label"
                  >
                    Add a New Title
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      id="title"
                      aria-describedby="emailHelp"
                      placeholder="Enter title"
                      name="title"
                      value={newBlog.title}
                      onChange={handleBlogChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-lg-3 col-form-label form-control-label"
                    for="url"
                  >
                    Add a New URL
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      id="url"
                      aria-describedby="emailHelp"
                      placeholder="Enter url"
                      name="url"
                      value={newBlog.url}
                      onChange={handleBlogChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-lg-3 col-form-label form-control-label"
                    for="author"
                  >
                    Add a New Author
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      id="author"
                      aria-describedby="author"
                      placeholder="Enter author"
                      name="author"
                      value={newBlog.author}
                      onChange={handleBlogChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label"></label>
                  <div className="col-lg-9">
                    <button className="btn btn-primary" type="submit">
                      save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
