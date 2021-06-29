import React from "react";
import {useSelector} from "react-redux";
import {Button, Typography} from "@material-ui/core";

import './index.css';
import {Link} from "react-router-dom";

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article className="post-except" key={post.id}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.content.substring(0, 100)}</Typography>
            <Link to={`/posts/${post.id}`} className="button muted-button" style={{textDecoration: 'none'}}>
                <Button variant="outlined">View Post</Button>
            </Link>
        </article>
    ))

    return (

        <section className="posts-list" >
            <Typography variant="h3" color="primary" align="center">Posts</Typography>
            <Typography variant="h2" color="primary">{renderedPosts}</Typography>
        </section>
    )
}