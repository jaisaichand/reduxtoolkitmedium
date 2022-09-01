import {createSlice} from '@reduxjs/toolkit';

const usersSliceFunc = createSlice({
    name:'usersdata',
    initialState:{
        usersArr:[{id:1,name:'jai'},{id:2,name:'elon musk'}],
        mode:'Dark'
    },
    reducers:{
        createUser:((state,action)=>{
            state.usersArr.push(action.payload.newUser);
        }),
        changeMode:((state,action)=>{
            state.mode = state.mode==='Dark'?'Light':'Dark';
        })
    }
})

const {actions,reducer} = usersSliceFunc;
export const {createUser,changeMode} = actions;
export default reducer;