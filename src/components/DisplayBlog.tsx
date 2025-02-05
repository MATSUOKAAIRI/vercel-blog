import React, { useContext } from 'react';
import { BlogContext } from './context';

export default function DisplayBlog() {
    const blogContext = useContext(BlogContext);

    if (!blogContext) {
        return null;
    }

    const { title, content } = blogContext;

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}