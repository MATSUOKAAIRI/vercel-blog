"use client";
import React, { useState } from 'react';
import { Button , Input} from '@headlessui/react';
import clsx from 'clsx';

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
        // ここでブログの内容を保存する処理を追加します
        console.log('タイトル:', title);
        console.log('内容:', content);
    };

    return (
        <div>
            <h1>記入してください</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">タイトル</label>
                    <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
                </div>
                <div>
                    <label htmlFor="content">内容</label>
                    <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
                </div>
                <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white" >投稿</Button>
            </form>
        </div>
    );
}