import { configureStore } from "@reduxjs/toolkit";

import uidReducer from "./uid";
import detailReducer from "./detail";
import photoReducer from "./photo";
import cartReducer from "./cart";
import menuReducer from "./menu";
import menuSelectionReducer from "./menuSelection";
import dataReducer from "./data";

const store = configureStore({
  reducer: {
    uid: uidReducer,
    detail: detailReducer,
    photo: photoReducer,
    cart: cartReducer,
    menu: menuReducer,
    menuSelection: menuSelectionReducer,
    data: dataReducer,
  },
});

export default store;
