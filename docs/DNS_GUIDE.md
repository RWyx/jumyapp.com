# jumyapp.com DNS 配置指南

## 概述

在 Cloudflare DNS 添加一条 CNAME 记录，将 `jumyapp.com` 指向 `rwyx.github.io`。

## 步骤

### 1. 登录 Cloudflare
打开 https://dash.cloudflare.com ，登录你的账号。

### 2. 选择 jumyapp.com
在域名列表中找到 `jumyapp.com`，点击进入。

### 3. 添加 DNS 记录

在 DNS 管理页面，添加以下记录：

| 类型 | 名称 | 目标 | 代理状态 |
|------|------|------|---------|
| **CNAME** | `@`（或留空） | `rwyx.github.io` | ⚡ 开启代理（橙色云） |
| **CNAME** | `www` | `rwyx.github.io` | ⚡ 开启代理（橙色云，可选） |

### 4. 检查代理状态

确保两条记录右边的云朵图标是 **橙色**（开启代理），这样 Cloudflare 会自动提供：
- ✅ HTTPS 证书（自动）
- ✅ CDN 加速
- ✅ DDoS 保护
- ✅ 页面规则支持

### 5. 等待生效

DNS 生效通常需要 **1-10 分钟**。完成后访问 https://jumyapp.com 就能看到官网。

## 验证

打开终端执行：

```bash
dig +short jumyapp.com CNAME
# 应该显示: rwyx.github.io.

curl -s -o /dev/null -w "%{http_code}" https://jumyapp.com
# 应该返回: 200
```

## Supabase Auth 配置（可选）

配置完域名后，在 Supabase Dashboard 加这些 URL：

1. 打开 Supabase → Authentication → URL Configuration
2. **Site URL**: `https://jumyapp.com`
3. **Redirect URLs**:
   - `https://jumyapp.com/**`
   - `https://app.jumyapp.com/**`（如果以后有 app 子域名）
4. 保存

## 常见问题

### Q: 为什么访问 https://jumyapp.com 显示 404？
GitHub Pages 需要几分钟来配置 SSL 证书，等 5-10 分钟再试。

### Q: 为什么需要橙色云？
Cloudflare 的代理模式会自动颁发 TLS 证书、隐藏源站 IP、提供缓存加速。

### Q: 我的域名注册商不是 Cloudflare？
在上述步骤之前，先在 Cloudflare 添加站点，然后去你的注册商把 Nameserver 改成 Cloudflare 的，等生效后再加 DNS 记录。
