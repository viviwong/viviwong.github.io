import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // 稍后我们要重点修改这个 CSS



// 定义新的数据结构
type FeatureItem = {
  title: string;
  tag: string;       // 图片右上角的 neon 标签 (如 "Python / AI")
  imgSrc: string;    // 主图片路径
  bottomIcon: string;// 标题左侧的小图标路径 (Png)
  subTitle: string;  // 标题下方的灰色小字 (从算法到部署...)
  description: ReactNode; // 详细描述
  theme: string;     // 用于控制不同的霓虹颜色 (blue, green, purple)
};

const FeatureList: FeatureItem[] = [
  {
    theme: 'blue',
    tag: 'Python / AI',
    imgSrc: 'img/1python.jpg',
    iconClass: 'ri-eye-2-line', // 对应图 7 的眼睛
    iconColor: 'rgb(0, 212, 255)',
    title: 'Python + AI 视觉',
    subTitle: '从算法到部署的完整路径',
    description: (
      <>
        系统学习计算机视觉核心算法，掌握 OpenCV 图像处理、
        YOLOv8 目标检测与追踪，深度学习模型的嵌入式端部署，
        打造可落地的工业视觉应用。
      </>
    ),
    tags: ['OpenCV 图像处理', 'YOLOv8 目标检测', '模型量化与部署', '实时视频分析', '工业缺陷检测']
  },
  {
    theme: 'green',
    tag: 'STM32 / HAL',
    imgSrc: 'img/2stm32.jpg',
    iconClass: 'ri-cpu-line', // 对应芯片图标
    iconColor: 'rgb(34, 197, 94)',
    title: 'STM32 HAL 库实战',
    subTitle: '从寄存器到高级外设驱动',
    description: (
      <>
        深入 STM32 HAL 抽象层架构，覆盖 GPIO、SPI、I2C、
        DMA、中断、RTOS 多任务编程，结合真实项目案例，
        快速具备工业级嵌入式开发能力。
      </>
    ),
    tags: ['HAL 库架构精讲', 'SPI/I2C/UART 驱动', 'DMA 高效传输', 'FreeRTOS 多任务', '低功耗优化']
  },
  {
    theme: 'purple',
    tag: 'LVGL / GUI',
    imgSrc: 'img/3lvgl.jpg',
    iconClass: 'ri-layout-masonry-line', // 对应布局图标
    iconColor: 'rgb(168, 85, 247)',
    title: 'LVGL 高级 UI',
    subTitle: '嵌入式图形界面全栈开发',
    description: (
      <>
        从 LVGL 架构原理出发，掌握组件系统、样式引擎、
        动画框架，实现复杂触摸交互界面，完成完整工业 HMI
        项目开发，UI 效果媲美手机应用。
      </>
    ),
    tags: ['LVGL 组件体系', '自定义样式主题', '动画与过渡效果', '触摸屏驱动集成', '复杂 HMI 项目']
  },
];

// 重构 Feature 组件以匹配图 7 的层次
function Feature({theme, tag, imgSrc, iconClass, iconColor, title, subTitle, description, tags}: FeatureItem) {
  // 优化透明度计算，12% 的透明度在暗色模式下最显高级
  const iconBackground = iconColor.replace('rgb', 'rgba').replace(')', ', 0.12)');

  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      {/* 确保 styles[theme] 作用在最外层，方便控制悬停发光 */}
      <div className={clsx(styles.cardOuter, styles[theme])}>
        
        {/* 1. 顶部视觉区：图片 + 霓虹标签 */}
        <div className={styles.cardImageWrapper}>
          <img src={imgSrc} className={styles.mainImage} alt={title} />
          <div className={styles.neonTag}>{tag}</div>
        </div>
        
        {/* 2. 内容核心区 */}
        <div className={styles.cardContent}>
          {/* 标题行：图标方块 + 文字组合 */}
          <div className={styles.titleRow}>
            <div className={styles.iconContainer} style={{ background: iconBackground }}>
              <i className={clsx(iconClass, styles.featureIcon)} style={{ color: iconColor }}></i>
            </div>
            <div className={styles.titleText}>
              <Heading as="h3">{title}</Heading>
              <p className={styles.subTitle}>{subTitle}</p>
            </div>
          </div>

          {/* 描述文本 */}
          <p className={styles.description}>{description}</p>
          
          {/* 3. 底部细分标签栏 (复刻 Readdy 的精髓) */}
          {tags && tags.length > 0 && (
            <div className={styles.tagBar}>
              {tags.map((t, idx) => (
                <span key={idx} className={styles.contentTag}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    // 给 section 添加一个暗色背景
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}