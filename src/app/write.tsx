"use client";
import React, { useState } from 'react';

export default function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


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
            <h1>記入してください</h1>
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
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                    投稿
                </button>
            </form>
        </div>
        
    )
}