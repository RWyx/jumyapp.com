// 构建后处理：预渲染正文注入 dist/index.html，删掉 JS，注入 CSP。
// 产物是纯 HTML + CSS —— 没有运行时，就没有运行时故障。
import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { render } from '../.ssg/ssg.js'

const FILE = 'dist/index.html'
let html = readFileSync(FILE, 'utf8')

// 1. 注入预渲染正文
const before = html
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
if (html === before) throw new Error('postbuild: #root 占位符没找到，预渲染失败')

// 2. 去掉 JS 引用（页面无交互，不需要水合）
html = html.replace(/\s*<script type="module"[^>]*><\/script>/g, '')
html = html.replace(/\s*<link rel="modulepreload"[^>]*>/g, '')

// 3. CSP：只允许同源样式、图片和 Cloudflare 邮件解码脚本，其余全部拒绝
html = html.replace(
  '<meta charset="UTF-8">',
  `<meta charset="UTF-8">\n  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; base-uri 'none'">`,
)

writeFileSync(FILE, html)

// 4. 删除未被引用的 JS 产物
for (const f of readdirSync('dist/assets')) {
  if (f.endsWith('.js')) rmSync(`dist/assets/${f}`)
}

// 5. 断言不含 Vite 构建的 module 脚本（Cloudflare 注入的 /cdn-cgi/ 脚本不在此列）
if (/<script type="module"/.test(html)) throw new Error('postbuild: 产物里仍有 Vite module script')
console.log('postbuild: 预渲染完成，产物零 JS，邮箱链接正常工作')
