"use client";
import React, { useContext } from 'react';
import { BlogContext } from './context';


export default function Write() {
    const blogContext = useContext(BlogContext);

    if (!blogContext) {
        return null;
    }

    const { title, content, setTitle, setContent } = blogContext;

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTitle('');
        setContent('');
    };
    return (
        <div>
            <h1>記入してください
                ※保存されません。
            </h1>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="title">タイトル</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={handleTitleChange} 
                        
                    />
                </div>
                <div>
                    <label htmlFor="content">内容</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={handleContentChange} 
                    />
                </div>
                <button 
                    type="submit"
                >
                    投稿
                </button>
            </form>
        </div>
        
    )
}