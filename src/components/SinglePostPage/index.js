import React from 'react'
import { useSelector } from 'react-redux'
import {Typography} from "@material-ui/core";

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <Typography variant="h3">Post not found!</Typography>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" className="post-content">{post.content}</Typography>
            </article>
        </section>
    )
}