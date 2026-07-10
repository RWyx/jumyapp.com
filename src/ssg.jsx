// 构建期把 <App /> 渲染成纯静态 HTML，线上不发任何 JS。
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToStaticMarkup(<App />)
}
