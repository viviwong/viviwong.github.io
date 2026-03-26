---
sidebar_position: 1
title: 课程安排与行业概览
---

import Admonition from '@theme/Admonition';

# 课程安排与行业概览

## 📚 课程体系设置

:::tip 核心目标
从 Python 基础到人工智能落地，打通上位机与嵌入式 AI 的全栈开发能力。
:::

1. **Python 基础**：基本语法、面向对象编程
2. **机器学习**：OpenCV 图像处理、MediaPipe 人体姿态识别
3. **深度学习**：YOLO 目标检测、LLM 大语言模型应用
4. **数据分析**：NumPy、Pandas、Matplotlib 可视化
5. **上位机开发**：
   - **C++ 体系** ⇒ Qt Framework
   - **Python 体系** ⇒ PySide6 / PyQt

---

## 💡 学习方法论：2W1H 分析法

| 维度 | 内容 |
| :--- | :--- |
| **What** | **Python 编程语言**：高级、解释型、通用的编程语言。 |
| **Why** | **应用广泛（胶水语言）**：生态极其丰富，是 AI 和大数据的事实标准。 |
| **How** | **实践驱动**：通过项目（Web、运维、AI 落地）快速掌握。 |

---

## 🌐 行业发展趋势

### 互联网演进（2000—2025）

<div style={{ textAlign: 'center', backgroundColor: '#f5f6f7', padding: '20px', borderRadius: '12px', margin: '20px 0' }}>
  <p style={{ fontWeight: 'bold', color: '#2575fc' }}>图：互联网的发展历程（从门户到 AI）</p>
  <img src="/img/img1-net.png" style={{ maxWidth: '800px', width: '100%' }} alt="互联网的发展" />
  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>关键词：从移动互联 BAT 到人工智能大模型</p>
</div>

---

## 🧠 人工智能技术栈与基础设施

<div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap', margin: '2rem 0' }}>

  <div style={{ flex: 1, minWidth: '320px' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>AI 生态分层：</p>
    <ul>
      <li><b style={{ color: '#55a532' }}>SaaS (软件即服务)</b>：ChatGPT、OpenAI API、OpenCV、YOLO 应用</li>
      <li><b style={{ color: '#2575fc' }}>PaaS (平台即服务)</b>：PyTorch、TensorFlow 深度学习框架</li>
      <li><b style={{ color: '#ff4d4f' }}>IaaS (基础设施即服务)</b>：NVIDIA GPU、CUDA 算力支撑</li>
    </ul>
    
    <Admonition type="info" title="元宝 AI 深度解析">
      <p>"关于 SaaS/PaaS/IaaS 的详细对比..."</p>
      <a href="https://yb.tencent.com/s/LAQHf2pStlnr" target="_blank" className="button button--primary button--sm">
        点击查看元宝的回答
      </a>
    </Admonition>
  </div>

  <div style={{ flex: '0 0 40%', minWidth: '300px', textAlign: 'center' }}>
    <p style={{ fontWeight: 'bold', color: '#2575fc' }}>图：国内外算力对比</p>
    <img src="/img/img2-gpu.jpg" style={{ borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
  </div>

</div>

---

## 🏗️ AIoT 时代技术架构分层

### 🛠️ 嵌入式开发【偏硬件侧】

1. **工业设计 (ID)**：外观设计、结构设计
2. **硬件工程**：PCB Layout -> PCBA (使用 EDA 工具)
3. **软件工程**：基于 ARM 架构，负责芯片选型 (STM32/51)、外设驱动及功能开发
   - **技术栈**：<span className="badge badge--danger">C语言</span> <span className="badge badge--info">Linux</span>
   - **层次**：裸机开发 ➔ RTOS (实时) ➔ Linux (多任务)
4. **交互开发 (Qt)**：C++、Qt、PySide (上位机界面)
5. **嵌入式算法**：落地控制算法 (PID)、能耗管理
6. **AI 算法落地**：NLP/LLM 算法模型量化与部署 (NVIDIA CUDA/TensorRT)

### 💻 产品应用开发【偏用户侧】

1. **后端开发**：Java、Go、Python (Flask/Django) 数据库与 API 服务
2. **前端开发**：H5、JS、Vue/React、UniApp、iOS/Android 原生
3. **UI/UX 设计**：交互逻辑与视觉设计 (PS、Figma)
4. **AI 算法研发**：大模型调优、NLP 模型训练 (基于 PyTorch/TensorFlow)

---

### 🤖 AI 模型训练与应用流程

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <p style={{ fontWeight: 'bold', color: '#2575fc' }}>图：AI 模型从训练到边缘端部署</p>
  <img src="/img/img3-training.png" style={{ width: '100%', maxWidth: '900px', borderRadius: '12px' }} alt="模型训练" />
</div>