# Personal-Wb | 个人主页与作品集

这是一个专为个人开发者/设计师打造的现代化、响应式、高颜值个人主页与作品集网页。支持浅色/深色模式一键切换、作品集分类筛选、经历时间轴与移动端适配。

---

## 🌟 页面特色

- **现代视觉设计**：极简美学排版、玻璃拟物 (Glassmorphism) 与平滑滚动动画。
- **浅色 / 深色主题**：支持一键切换并自动记忆用户偏好，跟随系统深色模式。
- **全端响应式适配**：在桌面宽屏、平板、手机等各类屏幕尺寸下均有出色的排版与交互体验。
- **作品集与经历展示**：支持按分类筛选作品卡片（Web、移动端、AI/工具等），附带项目封面、技术标签与源码/预览链接。
- **零外部繁重依赖**：纯原生 HTML5 / CSS3 / JavaScript 开发，无缝兼容任何静态托管服务。

---

## 📁 目录结构

```text
├── index.html              # 网页主入口与内容结构
├── css/
│   └── style.css           # 样式表（主题变量、布局、动画与响应式规则）
├── js/
│   └── main.js            # 交互逻辑（主题切换、分类筛选、滚动高亮）
├── assets/
│   ├── images/             # 存放个人照片、头像、作品集封面图等资源
│   │   ├── avatar.svg      # 默认个人头像
│   │   ├── project-1.svg   # 示例项目封面 1
│   │   ├── project-2.svg   # 示例项目封面 2
│   │   ├── project-3.svg   # 示例项目封面 3
│   │   └── project-4.svg   # 示例项目封面 4
└── README.md               # 项目使用与配置说明文档
```

---

## ✏️ 快速自定义指南

### 1. 修改个人介绍与基本信息
打开 [`index.html`](file:///Users/yuanver/Desktop/wkspace/index.html)：
- 搜索 `Yuanver` 替换为您自己的姓名或昵称。
- 在 `<section id="hero">` 和 `<section id="about">` 中修改您的个人标语 (Slogan)、自我介绍段落和核心优势。
- 在 `<section id="contact">` 中修改您的联系邮箱、GitHub 主页或社交账号。

### 2. 替换个人头像与照片
- 将您自己的照片放入 `assets/images/` 文件夹（例如 `my-photo.png`）。
- 打开 [`index.html`](file:///Users/yuanver/Desktop/wkspace/index.html)，找到 `<img src="assets/images/avatar.svg" alt="Yuanver Avatar" class="avatar-img">`，将 `src` 修改为 `assets/images/my-photo.png`。

### 3. 修改经历描述 (Experience)
- 打开 [`index.html`](file:///Users/yuanver/Desktop/wkspace/index.html)，定位到 `<section id="experience">`。
- 在 `<div class="timeline-item">` 中修改对应的起止时间、职位/专业名称、公司/学校以及具体工作/学习成果。

### 4. 添加与修改作品集 (Portfolio)
- 打开 [`index.html`](file:///Users/yuanver/Desktop/wkspace/index.html)，定位到 `<section id="portfolio">`。
- 每个作品对应一个 `<div class="project-card" data-category="web">`：
  - `data-category`：所属分类（`web` / `mobile` / `tools`，需与顶部的 filter 按钮对应）。
  - `<img class="project-img">`：项目封面图路径。
  - `<h3 class="project-title">`：项目名称。
  - `<p class="project-desc">`：项目简介与特色。
  - `<div class="project-tags">`：技术栈标签。
  - `<a class="project-link">`：替换 `href` 为您真实的 GitHub 仓库链接与在线 Demo 预览地址。

---

## 🚀 本地预览与测试

在终端（Terminal）进入当前目录，运行 Python 内置静态服务器：

```bash
python3 -m http.server 8080
```

然后在浏览器打开 [http://localhost:8080](http://localhost:8080) 即可实时预览页面。

---

## 🌐 部署到 GitHub Pages（免费上线）

1. 提交并推送代码到您的 GitHub 仓库：
   ```bash
   git add .
   git commit -m "feat: build modern personal portfolio website"
   git push origin main
   ```
2. 进入 GitHub 仓库页面：`https://github.com/Yuanver1/Personal-Wb`。
3. 点击 **Settings**（设置） > 左侧栏 **Pages**。
4. 在 **Build and deployment** 下的 **Branch** 选择 `main` 分支，目录选择 `/ (root)`，点击 **Save**。
5. 稍等 1-2 分钟，即可通过 `https://yuanver1.github.io/Personal-Wb/` 访问您的专属个人网页！
