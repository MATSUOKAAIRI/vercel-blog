"use client";
import React, { createContext, useState, ReactNode } from 'react';

interface BlogContextType {
    title: string;
    content: string;
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <BlogContext.Provider value={{ title, content, setTitle, setContent }}>
            {children}
        </BlogContext.Provider>
    );
};