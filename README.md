# Yuanver's Personal Portfolio | 纽约大学 (NYU) 个人主页与作品集

> **In & of the City, in & of the World.**  
> 专为纽约大学 (NYU) 国际本科新生定制的现代化、响应式红黑社论风 (Red & Black Editorial Theme) 个人主页与技术作品集。

[![GitHub License](https://img.shields.io/badge/license-MIT-red.svg)](LICENSE)
[![NYU Violet Pride](https://img.shields.io/badge/NYU-Class%20of%202030-57068c.svg)](https://www.nyu.edu)
[![Theme](https://img.shields.io/badge/Theme-Red%20%26%20Black%20Editorial-dc2626.svg)](#)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-black.svg)](#)

---

## 🌟 页面设计特色 (Key Highlights)

- 🏛️ **纽约大学官网社论风 (NYU Editorial Typography)**：引入学术级经典衬线字体 `Playfair Display`，搭配结构化排版标尺与名校刊物级版式。
- 🎨 **红黑金专属配色 (Crimson, Obsidian & Gold)**：
  - **曜石黑 (Obsidian Black `#09090d`)**：沉稳大气的暗色底蕴；
  - **绯红 (Scarlet Red `#ef4444`)**：充满活力与创造力的高亮强调色；
  - **光环金 (Radiant Gold `#fbbf24`)**：呼应个人像素头像的头顶金光环设计。
- 📱 **全端极致响应式适配**：完美适配宽屏桌面端、平板以及手机端（支持平滑滑动的折叠汉堡菜单与触控反馈）。
- 🌓 **双模式主题无缝切换**：支持深色/浅色模式一键切换，并自动记忆用户偏好 (`localStorage`)。
- ⚡ **零外部繁重框架依赖**：纯原生语义化 HTML5 + 现代化 CSS3 (CSS Variables & Grid) + 原生 JavaScript，毫秒级快速加载。

---

## 🚀 精选作品集介绍 (Featured Projects)

### 1. 🧭 NYU Compass - 国际新生校园与生活助手
- **分类**：Web 应用 / 校园工具
- **技术栈**：`Vue 3`, `Vite`, `Tailwind CSS`, `TypeScript`, `Leaflet Maps`
- **项目描述**：专为纽约大学国际大一新生打造的互动式导航与生活指南。集成华盛顿广场与布鲁克林校区楼宇地图、Bobst 图书馆自习空位实时监测、曼哈顿/布鲁克林周边留学生美食推荐及新生选课互助评教系统。

### 2. 📱 StudyBud NYC - 留学生跨时区自习与专注 App
- **分类**：移动与设计 / 效率工具
- **技术栈**：`Flutter`, `Dart`, `Figma (UI/UX)`, `Firebase`
- **项目描述**：针对跨时区留学生痛点量身打造的虚拟自习室与习惯打卡应用。支持与国内亲友、NYC 同学跨时区同步专注番茄钟，提供习惯热力图统计、自习白噪音与云端日程同步功能。

### 3. 🚇 MetroPulse NYC - 纽约地铁实时数据与出行看板
- **分类**：AI 与工具 / 数据可视化
- **技术栈**：`React`, `Python`, `FastAPI`, `MTA Open Data API`, `ECharts`
- **项目描述**：调用 MTA (Metropolitan Transportation Authority) 官方实时数据与天气 API，利用 Python 进行通勤延误预测与车厢拥挤度可视化，帮助 NYU 同学智能规划往返曼哈顿校区与布鲁克林工程学院的最佳通勤路径。

### 4. 🛠️ Freshman Toolkit - 大一课业与待办提醒 CLI
- **分类**：AI 与工具 / 开源脚手架
- **技术栈**：`Node.js`, `TypeScript`, `Commander.js`, `Canvas LMS API`
- **项目描述**：极简终端效率命令行工具，支持一键对接大学 Canvas 课业大纲拉取作业截止日期 (Deadlines)、自动生成 Markdown 课程复习笔记模板，并与 Google Calendar / Apple 日历双向同步。

---

## 📁 项目目录结构 (Directory Structure)

```text
Personal-Wb/
├── index.html              # 主页面结构（语义化 HTML5，包含完整中文/英文注释）
├── css/
│   └── style.css           # 样式表（NYU 红黑系主题变量、毛玻璃拟物、动画与响应式断点）
├── js/
│   └── main.js            # 交互逻辑（主题切换、作品集分类筛选、滚动高亮、表单提示）
├── assets/
│   └── images/             # 页面图像资源
│       ├── avatar.jpg      # 个人像素头像（带光环装饰）
│       ├── project-1.svg   # 项目 1 封面（红黑金管理看板）
│       ├── project-2.svg   # 项目 2 封面（红黑金移动端 App）
│       ├── project-3.svg   # 项目 3 封面（红黑金数据洞察网络）
│       └── project-4.svg   # 项目 4 封面（红黑金终端代码界面）
├── .gitignore              # Git 忽略配置
└── README.md               # 项目详细说明文档
```

---

## 💻 本地运行与开发 (Local Development)

克隆仓库并在本地启动轻量静态服务器：

```bash
git clone git@github.com:Yuanver1/Personal-Wb.git
cd Personal-Wb

# 方式 1: 使用 Python 内置服务
python3 -m http.server 8888

# 方式 2: 使用任意本地静态工具（如 VS Code Live Server）
```

在浏览器中访问 [http://localhost:8888](http://localhost:8888) 即可实时预览。

---

## 🌐 部署至 GitHub Pages (Deploy to GitHub Pages)

本项目开箱即用支持 **GitHub Pages** 免费自动化托管：

1. 代码推送到 GitHub 仓库的 `main` 分支；
2. 进入仓库页面：`https://github.com/Yuanver1/Personal-Wb`；
3. 点击 **Settings** -> **Pages**；
4. 在 **Build and deployment** 下的 **Branch** 选择 `main`，目录保持 `/ (root)`，点击 **Save**；
5. 稍等片刻，即可通过 `https://yuanver1.github.io/Personal-Wb/` 在公网访问您的个人网页！

---

## 📬 联系方式 (Contact)

- **Email**: [yuan1ver1@gmail.com](mailto:yuan1ver1@gmail.com)
- **GitHub**: [@Yuanver1](https://github.com/Yuanver1)
- **Location**: New York, NY (Manhattan & Brooklyn)
