import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPosts } from "../models/models";
import { v4 as uuidv4 } from "uuid";

interface PostSlice {
  error: string;
  posts: IPosts[];
}

const initialState: PostSlice = {
  error: "",
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    savePost(state, action) {
      state.posts.push({
        id: uuidv4(),
        author: action.payload.title.trim(),
        description: action.payload.description.trim(),
        time: Date.now(),
      });
    },
  },
});
export default postSlice.reducer;
