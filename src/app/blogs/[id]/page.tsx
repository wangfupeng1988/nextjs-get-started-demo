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
  console.log('blog ', blog)

  // Server action
  async function thumbUp(values: FormData) {
    'use server'

    // 直接更新数据库，给 id 对应的 blog 点赞
    console.log('values ', values)
  }

  return (
    <div>
      <h1 className="text-3xl">{blog.title}</h1>
      <p>{blog.content}</p>
      <form action={thumbUp}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">点赞</button>
      </form>
    </div>
  )
}
