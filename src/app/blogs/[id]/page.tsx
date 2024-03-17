// 模拟从数据库获取博客详情
async function MockGetBlogDetailFromDataBase(id: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `博客标题${id}`,
        content: '博客详情 博客详情 博客详情',
      })
    }, 1000)
  })
}

// src/app/blogs/[id]/page.tsx
export default async function OneBlog({ params }: { params: { id: string } }) {
  const blog = (await MockGetBlogDetailFromDataBase(params.id)) as any

  // Server action
  async function thumbUp(id: string) {
    'use server'

    // 直接更新数据库，给 id 对应的 blog 点赞
  }

  return (
    <div>
      <h1 className="text-3xl">{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => thumbUp(blog.id)}>点赞</button>
    </div>
  )
}
