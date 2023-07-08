/** @type {import('next').NextConfig} */
const repo = 'github-pages-next'
// 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
// 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
let assetPrefix = ``

// 用于为应用设置基础路径
// 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
let basePath = ``

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  images: {
    unoptimized: true, // 当设置为 true 时，直接提供原始图片，不修改图片质量、 尺寸或格式
  },
  basePath,
  assetPrefix,
  distDir: 'out',  // 指定用于自定义构建目录的名称
  output: 'export',  // 运行 next build 后，Next.js 将生成一个 out 文件夹，其中包含应用程序的 HTML/CSS/JS
}

module.exports = nextConfig
