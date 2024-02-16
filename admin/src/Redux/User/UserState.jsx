import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: "",
  Userdata: [],
};

const Userstate = createSlice({
  name: "user",
  initialState,

  reducers: {
    adduserid: (state) => {
      const id = localStorage.getItem("userid");
      state.userid = id;
    },
    adduserdata: (state, action) => {
      const data = action.payload;

      state.Userdata.push(data);
    },
    removeuser: (state) => {
      state.userid = "";
      state.Userdata = [];
    },
  },
});


export default  Userstate
