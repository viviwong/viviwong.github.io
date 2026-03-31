---
sidebar_position: 4
title: 🤖 04-OpenCV
---
# 🚀 人脸识别：从入门到实战 

欢迎来到计算机视觉的世界！OpenCV 是目前最流行的视觉库，让我们一起用 Python 赋予电脑“眼睛”吧！

---

## 🛠️ 第一步：环境搭建
在开始魔法之前，我们需要准备好法杖（Python）和咒语书（OpenCV）。

### 1. 安装 OpenCV
打开你的终端（Terminal/PowerShell），运行以下命令：

```bash
# 核心版：基础功能
pip install opencv-python

# 增强版：包含更多黑科技算法（如 LBPH、SIFT 等）
pip install opencv-contrib-python
````

### 2\. 验证是否成功

```python
import cv2
print(f"✅ OpenCV 版本已就绪: {cv2.__version__}")
```

-----


## 🎨 第二步：图像处理

### 1\. 图像“三板斧”：读、显、存

```python
import cv2 as cv

img = cv.imread('face.jpg')        # 读取图片
cv.imshow('Window', img)           # 显示图片
cv.imwrite('save.png', img)        # 保存图片
cv.waitKey(0)                      # 等待按键退出
```

### 2\. 读取图片
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
imread
imshow
```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/402.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 3\. 灰度图片+保存图片
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
cvtColor
imwrite
```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/403.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 4\. 修改尺寸＋2种退出
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
resize

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/404.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 5\. 图片上添加文字水印
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
putText(图片,水印内容,位置坐标,字体,字的大小,颜色,字的粗细)
```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/405.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 6\. 图片上面画矩形和圆
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/410.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

## 🧠 第三步：核心算法科普

### 1\. Haar 级联分类器 模型 
(Haar Cascade)
![模型](/img/04_picture/401.png)
这是由 Viola-Jones 提出的经典算法。它像是一个“过滤器”，通过计算图像中不同区域的灰度差来寻找人脸特征。

  * **边缘特征**：检测眼睛（比周围深）和鼻梁（比周围浅）。
  * **常用模型对比**：

| 特征库文件 | 设计目标 | 检测速度 | 适用场景 |
| :--- | :--- | :--- | :--- |
| `haarcascade_frontalface_default.xml` | 基础模型，通用性强 | 较慢（级联层多） | 简单场景，光照均匀 |
| `haarcascade_frontalface_alt2.xml` | 优化模型，精度平衡 | 较快（结构优化） | 复杂场景，有遮挡或侧脸 |

### 2\. LBPH 算法 
(局部二值模式直方图)

如果说 Haar 是在找“轮廓”，LBPH 就是在找“纹理”。它将图像像素转为二进制编码，非常擅长应对光照变化。

  * **优点**：简单易懂、抗光照干扰、对部分遮挡有容忍度。
  * **识别原理**：通过 `recognizer.predict()` 返回 `confidence`（置信度）。
      * **注意**：在 OpenCV 的 LBPH 中，数值**越小**代表匹配度**越高**！
      * 通常 `conf < 50` 认为识别成功；`conf > 80` 则可能是陌生人。

### 3\. opencv 机器视觉库
`https://opencv.org/` 
![OPENCV](/img/04_picture/411.png)
![OPENCV](/img/04_picture/412.png)
![OPENCV](/img/04_picture/413.png)

## 🎬 第四步：人脸检测

### 1\. 静态照片人脸检测

```python
# 1. 加载分类器
face_cascade = cv.CascadeClassifier("haarcascade_frontalface_default.xml")

# 2. 识别人脸坐标
# scaleFactor: 每次图像缩小的比例
# minNeighbors: 匹配多少次才认为是真实人脸
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(35,35))

for (x, y, w, h) in faces:
    cv.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
```


### 2\. 人脸检测1+函数
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
# 照片等比例缩放 
resize(img,None,fx=0.3,fy=0.3)
# 1加载人脸特征库
face_cascade = cv.CascadeClassifier("haarcascade_frontalface_default.xml")
# 2 识别人脸坐标
faces = face_cascade.detectMultiScale(gray)

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/414.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 3\. 人脸检测2多人
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
# 照片等比例缩放 
resize(img,None,fx=0.3,fy=0.3)
# 1加载人脸特征库
face_cascade = cv.CascadeClassifier("haarcascade_frontalface_default.xml")
# 2 识别人脸坐标
faces = face_cascade.detectMultiScale(gray)

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/415.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 4\. 视频流实时监测

视频是由一帧帧图片组成的，帧数（FPS）决定了视频的流畅度：

  * **15 FPS**：老旧监控既视感。
  * **30 FPS**：标准视频流。
  * **60 FPS**：极度顺滑。

<!-- end list -->

```python
cap = cv.VideoCapture(0) # 打开摄像头

while cap.isOpened():
    ret, frame = cap.read()
    if not ret: break
    
    # [此处可插入人脸检测代码实现实时标记]
    
    cv.imshow('Real-time Face Detection', frame)
    if cv.waitKey(1) & 0xFF == ord('q'): # 按 'q' 键退出
        break

cap.release()
cv.destroyAllWindows()
```

<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
cv.videoCapture

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/416.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>

### 5\. 人脸检测3视频
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
cv.videoCapture

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/417.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>


### 6\. 打开视频标记人脸
<div className="container">
  <div className="row">
    {/* 左侧：代码块 */}
    <div className="col col--7">
      <div style={{  padding: '10px', borderRadius: '8px' }}>
        <p style={{ color: '#61afef', fontWeight: 'bold', margin: '0 0 10px 0' }}>💻 Python 代码实现</p>

```python
cv.videoCapture

```
</div>
</div>

{/* 右侧：效果图 */}
<div className="col col--5">
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>📸 运行结果</p>
    <img src={require('/img/04_picture/418.png').default} alt="读取图片效果" style={{ maxWidth: '100%', borderRadius: '4px' }} />
  </div>
</div>
</div>
</div>
![人脸检测](/img/04_picture/419.png)



## 🎓 第五步：人脸识别

### 人脸识别过程
![人脸检测](/img/04_picture/420.png)
想要让电脑“认识”你，需要完成以下闭环：

1.  **数据收集**：准备一组图片，建立 `ID`（整数）与 `图片数据`（数组）的对应关系。
2.  **模型训练**：
    ```python
    recognizer = cv.face.LBPHFaceRecognizer_create()
    recognizer.train(faces_array, ids_array)
    recognizer.save('trainer.yml') # 保存训练好的模型
    ```
3.  **预测识别**：加载模型并使用 `predict()` 函数进行比对。

```python
1 收集数据 array 只有 数字  id = int src = matlike 图片 
2 通过LBPH算法=》训练模型 
3 人脸识别 
https://www.cl.cam.ac.uk/research/dtg/attarchive/facedatabase.html
https://docs.opencv.org/3.4/da/d60/tutorial_face_main.html
https://docs.opencv.org/4.10.0/df/d25/classcv_1_1face_1_1LBPHFaceRecognizer.html
```
### opencv的置信度 

```python
使用场景​：
    OpenCV 的 LBPHRecognizer、EigenFaceRecognizer 等传统人脸识别算法。
置信度含义​：
    表示 匹配距离​（差异程度），数值越小表示匹配度越高。
    例如：recognizer.predict() 返回的 conf 值。
阈值建议​：
    conf < 50：通常认为匹配成功（越小越好）。
    conf > 80：可能匹配失败（陌生人或低质量图像）。
```
-----

## 📚 扩展学习

  * **深度学习进阶**：[ShowMeAI 机器学习实战](https://www.showmeai.tech/article-detail/185)
  * **算法权威文档**：[Scikit-learn 官方中文站](https://scikit-learn.org.cn/)

> **💡 调优小贴士**：如果检测不到人脸，尝试调小 `scaleFactor`（如 1.05）；如果误报太多，尝试调大 `minNeighbors`。