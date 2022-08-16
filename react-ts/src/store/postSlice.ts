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

type ActionPayload = Record<string, string>;

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPost[]>("http://localhost:3001/posts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Somthing went wrong");
    }
  }
);

export const addPost = createAsyncThunk<IPost, ActionPayload>(
  "posts/addPosts",
  async (value, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/posts", {
        id: uuidv4(),
        author: value.author.trim(),
        description: value.description.trim(),
        time: new Date().toLocaleString(),
      });
      console.log(response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("You can't add something new");
    }
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: (state, action) => {
      state.posts.push({
        id: uuidv4(),
        author: action.payload.author.trim(),
        description: action.payload.description.trim(),
        time: new Date().toLocaleString(),
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(getPosts.pending, state => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getPosts.rejected, state => {
      state.loading = false;
      state.error = "Somthing went wrong";
    });

    builder.addCase(addPost.pending, state => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      postSlice.caseReducers.savePost(state, action);
      state.error = "";
    });
    builder.addCase(addPost.rejected, state => {
      state.loading = false;
      state.error = "You can't add something new";
    });
  },
});
export const { savePost } = postSlice.actions;
export default postSlice.reducer;
