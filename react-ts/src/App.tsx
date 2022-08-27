import React, { useEffect } from 'react'
import { useFormik, FormikProps } from 'formik'

import { getPosts, addPost } from './store/postSlice'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import ListPosts from './component/ListPosts'
import './App.css'

import validationSchema from './helpers/validation'
import load from './img/loading.gif'


type FormModel = {
  author: string
  description: string
}

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.posts)
  
  const onSubmit = (values: FormModel) => {
    dispatch(addPost(values))
    formik.resetForm()
  }
  
  const formik: FormikProps<FormModel> = useFormik<FormModel>({
    initialValues: {
      author: '',
      description: ''
    },
    onSubmit,
    validationSchema
  })

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

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
        {formik.errors.author && <div className="error">{formik.errors.author}</div>}
        <label className="form__discription">Description</label>
        <textarea
          className="description"
          maxLength={250}
          placeholder="New description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.description && <div className="error">{formik.errors.description}</div>}
        <button type="submit" className="form__btn" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
      {error && <h2 className="error-api">An error occured: {error}</h2>}
      {loading ? <img className="load" src={load} alt="loading" /> : <ListPosts />}
    </>
  )
}

export default App
