---
sidebar_position: 3
title: 🎨 03-Python 环境配置
locked: true
---

## 🌟 传送门：官方资源站
在开始冒险之前，先标记一下这些重要的补给站：

* **Python 官网**：[python.org](https://www.python.org/) —— 核心能量源。
* **生命周期表**：[Status Key](https://devguide.python.org/versions/#status-key) —— 查看版本支持状态。
* **下载大厅**：[Windows Downloads](https://www.python.org/downloads/windows/) —— 挑选你的 Python 核心。
* **宝库 (PyPI)**：[pypi.org](https://pypi.org/) —— 所有的“第三方技能包”都在这儿。

---

## 🛠️ 第一站：Python 安装仪式

> 💡 **小贴士**：安装路径千万 **不要包含中文** 哦！否则后续魔法可能会失效。

![python安装](/img/03_picture/3-1img.png "python安装路径不能有中文")

### 核心定义
> 📝 **基础常识**：Python 是一门 **脚本语言**，它是 **动态强类型** 且 **解释型** 的语言。

---

## 📂 第二站：多版本兼容与插件
如果你需要同时驾驭多个版本的 Python，请参考以下配置：

![python多版本兼容](/img/03_picture/3-2img.png)
![python多版本兼容](/img/03_picture/3-3img.png)

### ⚡ VS Code 必备插件
让你的编辑器像打满补丁的满级装备：
![VScode插件安装](/img/03_picture/3-4img.png)
![VScode插件安装](/img/03_picture/3-5img.png)
![VScode插件安装](/img/03_picture/3-6img.png)

---

## 🧪 第三站：虚拟环境
虚拟环境就像是一个个“实验室”，能保证不同项目之间的包互不干扰。

### 1. 实验室操作流程
```bash
# ✨ 创建虚拟环境 (建议名字叫 venv 或 .venv)
python -m venv 虚拟环境名

# 🚀 激活实验室 (Windows)
./虚拟环境名/Scripts/activate

# 💤 退出实验室
deactivate
```

### 2. 权限解锁 (Win 用户必看)
如果执行激活命令报错（如：在此系统上禁止运行脚本），请用管理员身份打开 PowerShell 执行：

* **永久开启**：`Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser`
* **临时开启**：`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

---

## 📦 第四站：pip 工具箱
`pip` 是 **Python Package Index** 的缩写，它是我们的包管理大管家。

### 1. 基础指令
* `python -V`：查看当前 Python 版本。
* `pip -h`：召唤帮助菜单。
* `pip list`：看看已经装了哪些“技能包”。
* `pip show 包名`：查看某个包的安装路径。

### 2. 换上“国产引擎” (镜像加速)
原版下载太慢？换上阿里云或清华大学的镜像吧！速度起飞 🚀

```bash
# ☁️ 阿里云 (常用推荐)
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple

# 🎓 清华大学 (教育网/在校推荐)
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 🚀 第五站：依赖包安装 (高手进阶)

### 💻 在线安装
* **安装单个包**：
  ```bash
  pip install opencv-python
  ```

* **根据清单批量安装：**：
  ```bash
  pip install -r requirements.txt
  ```

### 📦 离线安装 (部署神器)
当目标服务器没有网络（如内网环境）时，我们需要先在有网环境“打包”再到目标机器“安装”。

* **Step 1：下载 Wheel 文件到本地目录**：
  ```bash
    # 下载单个包 (如 numpy) 到 download 目录
    pip wheel numpy --wheel-dir=./download

    # 根据清单批量下载所有依赖到 download 目录
    pip wheel -r requirements.txt --wheel-dir=./download
  ```

* **Step 2：从本地目录执行安装**：
  ```bash
    # --no-index：禁止联网查找
    # --find-links：指定本地依赖包存放的目录
    pip install --no-index --find-links=./download -r requirements.txt
  ```

---

## 📋 总结：专业 Python 项目“三件套”

为了确保你的代码在其他人的电脑上也能完美运行，一个标准的专业项目建议包含以下“三大件”：

### 1. 🚀 项目源码
* **核心逻辑**：你的 `.py` 文件、模块和配置文件。
* **规范建议**：代码中应包含清晰的注释，并遵循 PEP 8 命名规范。

### 2. 📌 环境声明
* **版本记录**：在项目的 `README.md` 或文档中明确标注 Python 版本。
* **示例**：`本项基于 Python ≥ 3.10.10 开发`。
* **意义**：防止因为 Python 版本差异（如 3.7 与 3.12 之间）导致的语法不兼容。

### 3. 📑 依赖清单
* **功能**：一份最新的 `requirements.txt`。


#### ✨ 如何一键导出当前环境依赖？
在你开发完项目后，执行以下命令即可生成清单：
执行：`pip freeze > requirements.txt`.

