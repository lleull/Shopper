import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalprice: 0,
  opencart: false,
  success: false,
  searchinput: "",
  orderdata : 0
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addorder:(state) => {
       state.orderdata  ++
    },
    addsearch: (state, action) => {
      state.searchinput = action.payload;
    },
    openaction: (state) => {
      state.opencart = !state.opencart;
    },
    cartsuccess: (state) => {
      state.success = !state.success;
    },
    removeall: (state) => {
      state.carts = [];
      state.totalprice = 0;
    },
    addcart: (state, action) => {
      const existitem = state.carts?.find(
        (item) => item?.id === action.payload.id
      );
      if (!existitem) {
        state.carts.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.thumbnail,
          rate: action.payload.rating,
          saved: false,
        });
        const totalprice = state.carts.reduce((accumlate, datas) => {
          return accumlate + datas.price;
        }, 0);
        state.totalprice = totalprice;
      } else {
        return;
      }
    },
    removefromcart: (state, action) => {
      const items = action.payload.id;
      const removeitem = state.carts.find((item) => item.id === items);
      const updatedstate = state.carts.filter(
        (data) => data.id !== removeitem.id
      );
      state.carts = updatedstate;
      const Updatestate = state.totalprice - removeitem.price;
      state.totalprice = Updatestate;
    },
  },
});
