import usersArr from './users.js';
import { checkForEmptyObject, createId, findUserById } from './utils.js';
let users = [...usersArr];
// get All
export const getAllUsers = (req, res) => {
  if (!users.length) {
    return res.json({ success: true, message: 'No more users(' });
  }
  res.json({ succes: true, users });
};

// get One by Id
export const getUserById = (req, res) => {
  const user = findUserById(req.params.id, users);
  if (!user) {
    return res.status(400).json({ success: false, message: `Can\'t find user with ${id} id ` });
  }
  res.status(200).json({ success: true, user });
};

// create New
export const createUser = (req, res) => {
  const { name, color } = req.body;
  const newUser = { id: createId(users), name, color };
  users.push(newUser);
  res.status(201).json({ succes: true, users });
};

// delete
export const deleteUser = (req, res) => {
  const user = findUserById(req.params.id, users);
  if (!user) {
    return res
      .status(404)
      .json({ succes: false, message: `Can\'t find user with ${req.params.id} id ` });
  }
  users = users.filter((i) => i.id !== parseInt(req.params.id));
  res.status(200).json({ success: true, message: `User ${req.params.id} has been deleted` });
};

// patch
export const patchUser = (req, res) => {
  const user = findUserById(req.params.id, users);
  if (!user) {
    return res
      .status(404)
      .json({ succes: false, message: `Can\'t find user with ${req.params.id} id ` });
  }
  const userInfo = req.body;
  if (checkForEmptyObject(userInfo)) {
    Object.keys(userInfo).forEach((key) => {
      if (Object.keys(user).includes(key) && key !== 'id') {
        user[key] = userInfo[key];
      }
    });
    return res.status(200).json({ success: true, user });
  }
  res.send('No information to update');
};

//
