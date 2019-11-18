import blogService from "../services/blogs";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_BLOG":
      return [...state, action.data];
    case "REMOVE_BLOG":
      return state.filter(({ id }) => id !== action.data.id);
    case "LIKE":
      const id = action.data.id;
      const blogToChange = state.find(a => a.id === id);
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1
      };
      return state.map(blog => (blog.id !== id ? blog : changedBlog));
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
};

export const addLike = blog => {
  return async dispatch => {
    const changedBlog = {
      ...blog,
      likes: blog.likes + 1
    };
    const updatedBlog = await blogService.update(changedBlog);
    dispatch({
      type: "LIKE",
      data: updatedBlog
    });
  };
};

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs
    });
  };
};

export const createBlog = content => {
  return async dispatch => {
    const newBlog = await blogService.createNew(content);
    dispatch({
      type: "NEW_BLOG",
      data: newBlog
    });
  };
};

export const removeBlog = blog => {
  return async dispatch => {
    const removeBlog = await blogService.remove(blog);
    dispatch({
      type: "DELETE_BLOG",
      data: removeBlog
    });
  };
};

export default blogReducer;
