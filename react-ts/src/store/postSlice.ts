import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../models/models";
import { v4 as uuidv4 } from "uuid";
interface PostSlice {
  loading: boolean;
  error: string;
  posts: IPost[];
}

const initialState: PostSlice = {
  loading: false,
  error: "",
  posts: [],
};

type ActionPayload = {
  author: string;
  description: string;
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: (state, action: PayloadAction<ActionPayload>) => {
      state.posts.push({
        id: uuidv4(),
        author: action.payload.author.trim(),
        description: action.payload.description.trim(),
        time: new Date().toLocaleString(),
      });
    },
  },
});
export const { savePost } = postSlice.actions;
export default postSlice.reducer;
