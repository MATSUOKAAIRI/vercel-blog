"use client";
import React, { createContext, useState, ReactNode } from 'react';

interface Blog {
    title: string;
    content: string;}
    
interface BlogContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    }

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const addBlog = (blog: Blog) => {
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
    };


    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            <div className="context-container">
                {children}
            </div>
        </BlogContext.Provider>
    );
};