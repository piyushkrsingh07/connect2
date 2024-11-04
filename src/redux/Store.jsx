import { configureStore } from "@reduxjs/toolkit";
import {AttendanceSlice} from "./slices/AttendanceSlice";


export const store=configureStore({
        reducer:{
           Attendance:AttendanceSlice.reducer


        }




})