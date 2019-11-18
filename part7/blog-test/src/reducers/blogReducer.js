import blogService from "../services/blogs";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_BLOG":
      return [...state, action.data];
    case "DELETE_BLOG":
      const removeObject = action.data;
      return state.filter(blog => blog.id !== removeObject.id);
    case "ADD_COMMENT":
      return state.map(b =>
        b.id === action.data.id
          ? {
              ...b,
              comments: b.comments.concat(action.data.comment)
            }
          : b
      );
    case "LIKE":
      const id = action.data.id;
      const blogToChange = state.find(a => a.id === id);
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes
      };
      return state.map(blog => (blog.id !== id ? blog : changedBlog));
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
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

export const addComment = data => {
  return async dispatch => {
    const newComment = await blogService.comment(data.id, data.comment);
    dispatch({
      type: "ADD_COMMENT",
      data: {
        id: data.id,
        comment: newComment
      }
    });
  };
};

export const addLike = blog => {
  return async dispatch => {
    blog.likes++;
    await blogService.updateLikes(blog.id, blog);
    dispatch({
      type: "LIKE",
      data: blog
    });
  };
};

export const createBlog = content => {
  return async dispatch => {
    const newBlog = await blogService.create(content);
    dispatch({
      type: "NEW_BLOG",
      data: newBlog
    });
  };
};

export const removeBlog = blogToDelete => {
  return async dispatch => {
    await blogService.remove(blogToDelete);
    dispatch({
      type: "DELETE_BLOG",
      data: blogToDelete
    });
  };
};

export default blogReducer;
