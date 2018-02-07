import {notes} from "./actions/getNotes";
import {createStore} from "redux";

export const store = createStore(notes);