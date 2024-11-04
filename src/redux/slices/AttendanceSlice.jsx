import {createSlice} from "@reduxjs/toolkit"

export const AttendanceSlice=createSlice({
    name:"Attendance",
    initialState:[],
     reducers:{
        add:(state,action)=>{
            state.push(action.payload)

        },
        remove:(state,action)=>{
            return state.filter((data)=>data.userId !==action.payload)

        },
     }




});
export const{add,remove}=AttendanceSlice.actions;
export default AttendanceSlice.reducer;