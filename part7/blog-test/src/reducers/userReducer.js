import userService from "../services/users";
import { login } from "./loginReducer";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_USER":
      return [...state, action.data];
    case "UPDATE_USER":
      const username = action.data.id.username;
      console.log("Action Data", action.data);
      const userToChange = state.find(a => a.username === username);
      console.log("User to Change", userToChange);
      const changedUser = userToChange.blogs.concat(action.data);
      return state.map(user =>
        user.username !== username ? user : changedUser
      );
    case "DELETE_USER":
      const removeObject = action.data;
      return state.filter(user => user.id !== removeObject.id);
    case "INIT_USERS":
      return action.data;
    default:
      return state;
  }
};

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users
    });
  };
};

export const updateUser = (id, blog) => {
  return async dispatch => {
    dispatch({
      type: "UPDATE_USER",
      data: {
        id: id,
        data: blog
      }
    });
  };
};

export const createUser = content => {
  return async dispatch => {
    const newUser = await userService.create(content);
    dispatch({
      type: "NEW_USER",
      data: newUser
    });
    login(newUser);
  };
};

export const removeUser = userToDelete => {
  return async dispatch => {
    await userService.remove(userToDelete);
    dispatch({
      type: "DELETE_USER",
      data: userToDelete
    });
  };
};

export default userReducer;
