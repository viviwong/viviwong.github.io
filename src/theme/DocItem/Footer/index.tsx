import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      {/* 1. 先渲染原生的底部（包含你刚开启的“最后编辑时间”） */}
      <Footer {...props} />

      {/* 2. 在原生底部下方注入：浏览量统计 */}
      <div className="custom-doc-footer" style={{
        marginTop: '1.5rem',
        paddingTop: '1rem',
        borderTop: '1px dashed var(--ifm-color-emphasis-300)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--ifm-color-content-secondary)',
        fontSize: '0.9rem'
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span id="busuanzi_container_page_pv" style={{ display: 'none' }}>
            <i className="ri-eye-line" style={{ color: '#2575fc', marginRight: '4px' }}></i>
            阅读量：<span id="busuanzi_value_page_pv"></span> 次
          </span>
          
          {/* 这里可以预留给点赞组件 Giscus */}
          <span>
             <i className="ri-heart-line" style={{ color: '#ff4d4f', marginRight: '4px' }}></i>
             觉得有用请点赞
          </span>
        </div>

        <div style={{ fontStyle: 'italic', opacity: 0.8 }}>
          感谢王老师的知识分享
        </div>
      </div>
    </>
  );
}