import React, { useState } from 'react';
import styles from './Root.module.css';

// 微信气泡图标（简洁版）
function WechatIcon() {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="currentColor">
      <path d="M19 6C10.716 6 4 11.82 4 19c0 3.744 1.742 7.1 4.528 9.544L7 34l5.97-2.985A17.3 17.3 0 0 0 19 32c8.284 0 15-5.82 15-13S27.284 6 19 6zm-5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
      <path d="M44 28.5c0-5.799-5.373-10.5-12-10.5s-12 4.701-12 10.5S25.373 39 32 39a14.6 14.6 0 0 0 4.242-.627L41 41l-1.274-4.456C41.733 34.73 44 31.76 44 28.5zm-15.5-.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" opacity=".75"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function WechatFloat() {
  const [open, setOpen] = useState(false);

  return (
    // <div className={styles.wrap}>
    <div
  className={styles.wrap}
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
      {/* 展开面板 */}
      <div className={`${styles.panel} ${open ? styles.panelVisible : ''}`}>
        <div className={styles.panelTitle}>📲 扫码联系</div>

        <div className={styles.qrItem}>
          <img src="/img/qr-wechat1.png" alt="微信二维码" className={styles.qrImg} />
          <span className={styles.qrLabel}>微信咨询</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.qrItem}>
          <img src="/img/qr-wechat2.png" alt="关注公众号" className={styles.qrImg} />
          <span className={styles.qrLabel}>关注公众号</span>
        </div>
      </div>

      {/* 悬浮按钮 */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? '收起' : '微信联系'}
      >
        {open ? <CloseIcon /> : <WechatIcon />}
      </button>
    </div>
  );
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WechatFloat />
    </>
  );
}
