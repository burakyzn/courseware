import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../services/authService'

const initialState = {
  user: {
    id : "0",
    name: "-",
    imageURL: "",
  },
  lastCourse: {
    title: "-",
    author: "-",
    progression: "0%"
  },
}

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async () => {
    let user = await authService.geyUserData();
    if(user)
      return user[0];
    return null;
  }
)

const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      if(action.payload){
        state.user.id = action.payload.id
        state.user.name = action.payload.name
        state.user.imageURL = action.payload.imageURL
        state.lastCourse.author = action.payload.lastCourse.author
        state.lastCourse.title = action.payload.lastCourse.title
        state.lastCourse.progression = action.payload.lastCourse.progression
      }
    })
  },
});

export const userSelector = (state) => state.auth.user;
export const lastCourseSelector = (state) => state.auth.lastCourse;
export const {} = AuthSlice.actions
export default AuthSlice.reducer

