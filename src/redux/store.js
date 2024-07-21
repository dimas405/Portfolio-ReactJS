import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer"; // Pastikan path ini benar dan file ini mengandung rootReducer

const store = createStore(rootReducer);

export default store;
