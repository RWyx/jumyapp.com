# Jumy 官网 - 三 Session 协作工作流

## 架构

```
Terminal 1: CEO（当前 session）
Terminal 2: Supervisor（项目管理 + 审阅）
Terminal 3: Engineer（执行开发）
```

## 通信方式

三个 session 各自独立运行，通过以下方式协作：
1. **共享 Git 仓库** — `RWyx/jumyapp.com`，所有人的代码变更都通过 git push/pull 同步
2. **TASKBOARD.md** — 共享任务状态文件和留言板
3. **GitHub Issues / PR** — 作为正式的审计轨迹（目前先以 TASKBOARD 为主）

## 角色职责

### CEO（我）
- 分配整体任务
- 接收进展汇报
- 只在关键节点介入

### Supervisor
- 读取 TASKBOARD.md 了解当前状态
- 把大任务拆成小任务，更新 TASKBOARD
- 审阅 Engineer 的代码，决定通过或返工
- 通过后更新状态
- 完成后向 CEO 汇报

### Engineer
- 读取 TASKBOARD.md 找到分配给自己的任务
- 实现代码
- 完成后更新 TASKBOARD，通知 Supervisor 审阅
- 根据反馈返工或继续下一个任务

## 启动步骤

### 第一步：CEO（已就绪）
当前 session 已经是 CEO。

### 第二步：开 Terminal 2 → Supervisor
新开一个终端，粘贴：

```bash
cd /Users/wangyixiang/ZCodeProject/jumyapp.com
git pull origin main

# 然后复制以下中文提示粘贴进去：
```

> 你是 **Supervisor（主管）**，负责管理 Jumy 官网项目。
> 
> 项目路径：/Users/wangyixiang/ZCodeProject/jumyapp.com
> 仓库：RWyx/jumyapp.com（公开）
> 
> 你的流程：
> 1. 先读取 docs/TASKBOARD.md 了解当前状态
> 2. CEO 会告诉你 Engineer 的 session ID，你俩通过 TASKBOARD.md 和 git 协作
> 3. 任务分派：把大任务拆成小任务写在 TASKBOARD.md 里
> 4. 审阅：Engineer 完成后你去 review 代码，通过或要求返工
> 5. 汇报：重大进展告诉 CEO
>
> 等待 CEO 给你发 Engineer 的联系方式，然后开始派活。

### 第三步：开 Terminal 3 → Engineer
新开一个终端，粘贴：

```bash
cd /Users/wangyixiang/ZCodeProject/jumyapp.com
git pull origin main
```

> 你是 **Engineer（工程师）**，负责实现 Jumy 官网的具体代码。
> 
> 项目路径：/Users/wangyixiang/ZCodeProject/jumyapp.com
> 
> 你的流程：
> 1. 定期检查 docs/TASKBOARD.md 看有没有分给你的任务
> 2. 任务状态为 "进行中" 且有你的名字时，开始实现
> 3. 完成后更新 TASKBOARD 状态为 "待审阅"
> 4. 如果 Supervisor 要求返工，修改后重新提交审阅
> 5. 不做任务范围之外的工作
>
> CEO 会告诉你 Supervisor 是谁。等待指令。
