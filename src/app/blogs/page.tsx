'use client'

import { useState } from 'react'
import { delBlog } from './action'

export default function Blogs() {
  // 也可以使用 fetch axios 请求 API http://localhost:3000/api/blogs

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Blog 1', content: 'Content 1' },
    { id: 2, title: 'Blog 2', content: 'Content 2' },
    { id: 3, title: 'Blog 3', content: 'Content 3' },
  ])

  async function handleDelete(id: number) {
    // setBlogs(blogs.filter((blog) => blog.id !== id))
    await delBlog(id)
  }

  return (
    <div>
      <h1 className="text-3xl">Blog List</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-2 my-2 relative">
            <h2 className="text-xl">{blog.title}</h2>
            <p>{blog.content}</p>
            <button
              className="underline absolute top-4 right-3"
              onClick={() => handleDelete(blog.id)}
            >
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
