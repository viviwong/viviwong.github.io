import React, { useState, useEffect } from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import BrowserOnly from '@docusaurus/BrowserOnly';

type Props = WrapperProps<typeof ContentType>;

// 兜底哈希 = sha256('66386638')，当 106.html 未设置自定义密码时使用
const FALLBACK_HASH = 'cab7337874746dbaadfafa68e0dc8012bf0d98aac2be85c7498478a1cb31d381';
// 106.html 管理后台写入此 key 来更新课程密码
const COURSE_PWD_KEY = 'kdl_course_pwd_hash';
// 解锁状态存储 key（值 = 当前正确哈希，密码更新后旧值自动失效）
const UNLOCK_KEY = 'kdl_pro_unlocked';

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getCorrectHash(): string {
  return localStorage.getItem(COURSE_PWD_KEY) || FALLBACK_HASH;
}

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 解锁状态值 = 正确哈希；密码更新后旧值自动失配，强制重新输入
    if (localStorage.getItem(UNLOCK_KEY) === getCorrectHash()) {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const hash = await sha256(input);
    setLoading(false);
    if (hash === getCorrectHash()) {
      localStorage.setItem(UNLOCK_KEY, hash);
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
        .kdl-unlock-btn:hover { opacity: 0.88; }
        .kdl-unlock-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>

      <div style={{ fontSize: '60px', marginBottom: '20px', lineHeight: 1 }}>🔒</div>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: 'var(--ifm-color-content)' }}>
        叩丁狼嵌入式AI就业班专属内容
      </h2>

      <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '32px', lineHeight: 1.7, fontSize: '0.95rem' }}>
        此内容为就业班课程专属，请输入课程密码解锁。<br />
        解锁后同一浏览器无需再次输入。
      </p>

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
          disabled={loading}
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
          disabled={loading}
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
          {loading ? '验证中…' : '解锁'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'var(--ifm-color-danger)', marginTop: '14px', fontSize: '14px', fontWeight: 500 }}>
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
      <BrowserOnly fallback={
        <div style={{ textAlign: 'center', padding: '80px 20px', fontSize: '60px' }}>🔒</div>
      }>
        {() => (
          <PasswordGate>
            <Content {...props} />
          </PasswordGate>
        )}
      </BrowserOnly>
    );
  }

  return <Content {...props} />;
}
