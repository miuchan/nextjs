# 在 Vercel 上部署本项目

本文档介绍如何将本仓库的 Next.js 应用部署到 [Vercel](https://vercel.com/)。你可以选择通过 Git 集成自动部署，或使用 Vercel CLI 手动部署。

## 先决条件

- 已安装 [Node.js](https://nodejs.org/)（建议使用 18.x 及以上）。
- 已安装 npm（随 Node.js 一同提供）。
- 拥有一个 Vercel 账户，并已通过 GitHub、GitLab 或 Bitbucket 绑定。

## 方法一：通过 Git 集成自动部署

1. **推送代码到远程仓库**
   ```bash
   git remote add origin <你的远程仓库地址>
   git push -u origin main
   ```

2. **在 Vercel 新建项目**
   - 登录 [Vercel 控制台](https://vercel.com/dashboard)。
   - 点击 `Add New...` → `Project`，选择你的 Git 仓库。
   - Vercel 会自动识别这是一个 Next.js 项目，默认的构建命令和输出目录分别是：
     - `Build Command`: `npm run build`
     - `Install Command`: `npm install`
     - `Output Directory`: `.next`
   - 保持默认设置即可，点击 `Deploy`。

3. **后续部署**
   - 每次向 `main`（或你在项目设置中配置的分支）推送代码时，Vercel 会自动触发重新部署。

## 方法二：使用 Vercel CLI 手动部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **在本地项目根目录初始化部署配置**
   ```bash
   vercel
   ```
   - 第一次运行时，CLI 会询问要将项目关联到哪个 Vercel 账户、团队以及项目名称。
   - 当被问到 `? Want to override the settings?` 时可以选择 `No`，以使用默认的 Next.js 配置。

4. **构建并部署生产版本**
   ```bash
   vercel --prod
   ```

部署成功后，Vercel 会返回生产环境和预览环境的访问链接。

## 重新部署前的本地自检

在多次尝试部署时，先在本地确认代码可以顺利通过构建和静态检查，可以避免 Vercel 队列中的无效构建：

1. **运行 ESLint 检查**：
   ```bash
   npm run lint
   ```
   确保命令输出 `✔ No ESLint warnings or errors`，表示项目符合配置的代码规范。

2. **执行生产构建**：
   ```bash
   npm run build
   ```
   观察日志中是否出现 `✓ Compiled successfully`、`✓ Linting and checking validity of types` 等完成提示；若出现错误，可先在本地修复后再提交。

3. **清理历史构建产物（可选）**：若需要重新开始，可删除 `.next/` 目录或运行 `npm run build -- --no-lint` 来定位特定问题，再恢复常规构建流程。

通过以上步骤确认无误后，再推送代码或执行 `vercel --prod`，能够更快得到成功的部署结果。

## 环境变量配置

如果你的应用需要环境变量：

- 在 Git 集成模式下，可在 `Project Settings` → `Environment Variables` 中添加。
- 在 CLI 模式下，可使用 `vercel env add` 命令。

在 Next.js 中，前端可用的环境变量需要以 `NEXT_PUBLIC_` 作为前缀。

## 自定义域名

- 在 Vercel 控制台的 `Domains` 选项卡中添加你的自定义域名。
- 根据提示在域名服务商配置 CNAME 或 A 记录。

## 常见问题

- **构建失败**：确认本地执行 `npm install && npm run build` 能够成功。
- **页面 404**：确保 Next.js 路由文件（如 `app/page.jsx`）存在，并且构建完成后 `.next` 目录生成成功。
- **静态资源访问异常**：确认资源位于 `public/` 目录下，部署时会自动托管。

更多信息可参考 Vercel 官方文档：[Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)。
