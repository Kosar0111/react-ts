import React from "react";
import { savePost } from "./store/postSlice";
import { useAppDispatch } from "./hooks/hooks";
import ListPosts from "./component/ListPosts";
import "./App.css";
import { useFormik, FormikProps } from "formik";
import validationSchema from "./helpers/validation";

type FormModel = {
  author: string;
  description: string;
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: FormModel) => {
    dispatch(savePost(values));
    formik.resetForm();
  };
  const formik: FormikProps<FormModel> = useFormik<FormModel>({
    initialValues: {
      author: "",
      description: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="form__author">Title</label>
        <input
          className="author"
          placeholder="New author"
          name="author"
          type="text"
          onBlur={formik.handleBlur}
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        {formik.errors.author && (
          <div className="error">{formik.errors.author}</div>
        )}
        <label className="form__discription">Description</label>
        <textarea
          className="description"
          maxLength={250}
          placeholder="New description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.description && (
          <div className="error">{formik.errors.description}</div>
        )}
        <button type="submit" className="form__btn" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
      <ListPosts />
    </>
  );
};

export default App;
