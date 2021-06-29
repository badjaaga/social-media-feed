import React, { useState } from 'react'
import {Button, TextField, Typography} from "@material-ui/core";
import './index.css';

import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";

import {postAdded} from "../../redux/postsSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title, content
                })
            )

            setTitle('');
            setContent('');
        }
    }

    return (
        <section className='post-form-wrapper'>
            <Typography className='post-form-header' variant='h5'>Add a New Post</Typography>
            <form className='form-wrapper'>
                <TextField
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    label="Post Title:"
                    value={title}
                    onChange={onTitleChanged}
                />
                <TextField
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    label="Content:"
                />
                <Button className='form-button' variant="outlined" type="button" onClick={onSavePostClicked}>Save Post</Button>
            </form>
        </section>
    )
}