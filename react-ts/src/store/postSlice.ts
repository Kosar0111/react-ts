import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import { ObjectType } from "typescript";

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

interface IActionPayload {
  author: string;
  description: string;
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost(state, action: PayloadAction<IActionPayload>) {
      state.posts.push({
        id: uuidv4(),
        author: action.payload.author.trim(),
        description: action.payload.description.trim(),
        time: new Date().toString(),
      });
    },
  },
});
export const { savePost } = postSlice.actions;
export default postSlice.reducer;
