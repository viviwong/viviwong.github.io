import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Python + AI 视觉',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        掌握 YOLO 目标检测与 OpenCV 图像处理，
        让你的嵌入式设备拥有“智慧之眼”。
      </>
    ),
  },
  {
    title: 'STM32 HAL库实战',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        深入底层硬件，掌握高效的 HAL 库开发模式、
        FreeRTOS 以及复杂传感器融合项目。
      </>
    ),
  },
  {
    title: 'LVGL 高级 UI 打造',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        告别简陋界面，为嵌入式产品打造媲美智能手机的
        丝滑交互体验与专业上位机系统。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
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