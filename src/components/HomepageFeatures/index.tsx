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
  },
  {
    theme: 'green',
    tag: 'STM32 / HAL',
    imgSrc: 'img/2stm32.jpg',
    iconClass: 'ri-eye-2-line', // 对应图 7 的眼睛
    iconColor: 'rgb(0, 212, 255)',
    title: 'STM32 HAL 库实战',
    subTitle: '从寄存器到高级外设驱动',
    description: (
      <>
        深入 STM32 HAL 抽象层架构，覆盖 GPIO、SPI、I2C、
        DMA、中断、RTOS 多任务编程，结合真实项目案例，
        快速具备工业级嵌入式开发能力。
      </>
    ),
  },
  {
    theme: 'purple',
    tag: 'LVGL / GUI',
    imgSrc: 'img/3lvgl.jpg',
    iconClass: 'ri-eye-2-line', // 对应图 7 的眼睛
    iconColor: 'rgb(0, 212, 255)',
    title: 'LVGL 高级 UI',
    subTitle: '嵌入式图形界面全栈开发',
    description: (
      <>
        从 LVGL 架构原理出发，掌握组件系统、样式引擎、
        动画框架，实现复杂触摸交互界面，完成完整工业 HMI
        项目开发，UI 效果媲美手机应用。
      </>
    ),
  },
];

// 重构 Feature 组件以匹配图 7 的层次
function Feature({theme, tag, imgSrc, iconClass, iconColor, title, subTitle, description}: FeatureItem) {
  // 自动计算背景颜色 (将 rgb 转为 rgba 并设为 0.15 透明度)
  const iconBackground = iconColor.replace('rgb', 'rgba').replace(')', ', 0.15)');

  return (
    <div className={clsx('col col--4', styles.featureCard, styles[theme])}>
      <div className={styles.cardOuter}>
        <div className={styles.cardImageWrapper}>
          <img src={imgSrc} className={styles.mainImage} alt={title} />
          <span className={styles.neonTag}>{tag}</span>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.titleRow}>
            {/* 这里的 div 负责霓虹背景方块 */}
            <div className={styles.iconContainer} style={{ background: iconBackground }}>
              {/* 这里的 i 负责显示 Remix Icon 字体图标 */}
              <i className={clsx(iconClass, styles.featureIcon)} style={{ color: iconColor }}></i>
            </div>

            <div className={styles.titleText}>
              <Heading as="h3">{title}</Heading>
              <p className={styles.subTitle}>{subTitle}</p>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
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