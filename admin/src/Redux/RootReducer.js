import { combineReducers } from "@reduxjs/toolkit";
import Productslice from "./Product/Productslice";
import UserSlice from "./User/Userslice";
const Rootreducer = combineReducers({
  product: Productslice,
  user: UserSlice
});

export default Rootreducer;
