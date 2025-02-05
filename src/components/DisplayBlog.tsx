"use client";
import React, { useContext } from 'react';
import { BlogContext } from './context';

export default function DisplayBlog() {
    const blogContext = useContext(BlogContext);

    if (!blogContext) {
        return null;
    }
    const { blogs } = blogContext;

    return (
        <div>
            {blogs.map((blog, index) => (
                <article key={index}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </article>
            ))}
        </div>
    );
}