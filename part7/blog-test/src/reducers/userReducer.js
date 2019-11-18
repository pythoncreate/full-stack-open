import userService from "../services/users";
import { login } from "./loginReducer";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_USER":
      return [...state, action.data];
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
