import React, { useState, useEffect } from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof ContentType>;

const PASSWORD = '6638';
const STORAGE_KEY = 'kdl_pro_unlocked';

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
      setError('');
    } else {
      setError('密码错误，请重试');
      setInput('');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      textAlign: 'center',
      padding: '70px 20px 80px',
      maxWidth: '440px',
      margin: '60px auto',
    }}>
      <style>{`
        @keyframes kdl-shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .kdl-unlock-input:focus {
          outline: none;
          border-color: var(--ifm-color-primary) !important;
          box-shadow: 0 0 0 3px var(--ifm-color-primary-lightest);
        }
        .kdl-unlock-btn:hover {
          opacity: 0.88;
        }
      `}</style>

      {/* 锁图标 */}
      <div style={{ fontSize: '60px', marginBottom: '20px', lineHeight: 1 }}>🔒</div>

      {/* 标题 */}
      <h2 style={{
        fontSize: '1.4rem',
        fontWeight: 700,
        marginBottom: '10px',
        color: 'var(--ifm-color-content)',
      }}>
        就业班专属内容
      </h2>

      {/* 描述 */}
      <p style={{
        color: 'var(--ifm-color-emphasis-600)',
        marginBottom: '32px',
        lineHeight: 1.7,
        fontSize: '0.95rem',
      }}>
        此内容为就业班课程专属，请输入课程密码解锁。<br />
        解锁后同一浏览器无需再次输入。
      </p>

      {/* 密码表单 */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: shake ? 'kdl-shake 0.4s' : 'none',
        }}
      >
        <input
          className="kdl-unlock-input"
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="请输入课程密码"
          autoFocus
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '2px solid var(--ifm-color-emphasis-300)',
            fontSize: '15px',
            width: '180px',
            background: 'var(--ifm-background-color)',
            color: 'var(--ifm-color-content)',
            transition: 'border-color .2s, box-shadow .2s',
          }}
        />
        <button
          className="kdl-unlock-btn"
          type="submit"
          style={{
            padding: '10px 24px',
            background: 'var(--ifm-color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 600,
            transition: 'opacity .2s',
          }}
        >
          解锁
        </button>
      </form>

      {/* 错误提示 */}
      {error && (
        <p style={{
          color: 'var(--ifm-color-danger)',
          marginTop: '14px',
          fontSize: '14px',
          fontWeight: 500,
        }}>
          ❌ {error}
        </p>
      )}
    </div>
  );
}

export default function DocItemContentWrapper(props: Props): JSX.Element {
  const { frontMatter } = useDoc();
  const isLocked = (frontMatter as Record<string, unknown>).locked === true;

  if (isLocked) {
    return (
      <PasswordGate>
        <Content {...props} />
      </PasswordGate>
    );
  }

  return <Content {...props} />;
}
