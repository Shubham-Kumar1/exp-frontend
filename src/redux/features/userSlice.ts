import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// define user type
interface User {
    id: number;
    username: string;
    email: string;
}

interface userState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

export const loginUser = createAsyncThunk('user/Login', async(userCredentials: {username: string; password: string})=> {
    const response = await axios.post('/api/login', userCredentials);
    return response.data as User ;
})

// define initial state
const initialState: userState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>)=> {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message || "Login Failed";
            });
    }

});

export const {logout} = userSlice.actions;
export default userSlice.reducer;