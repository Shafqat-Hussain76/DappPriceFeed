import { appslicerfinal } from "./appslice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootreducer = combineReducers({
    valreducer: appslicerfinal,
   
})