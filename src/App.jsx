const FEATURES = [
  {
    title: '附近优先',
    desc: '按 ZIP 邮编区域排序，先看到身边的东西。距离近，面交才真的方便。',
  },
  {
    title: '站内沟通',
    desc: '看中直接聊。砍价、约时间都在应用内完成，不需要交换手机号。',
  },
  {
    title: '发布求购',
    desc: '找不到想要的，就发一条求购，让有货的人来找你。',
  },
  {
    title: '社区安全',
    desc: 'Apple 登录或邮箱验证，配合举报与拉黑机制。平台不经手交易，保护双方隐私。',
  },
]

function Card({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />

      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="brand">
            <img src="/assets/img/icon.png" alt="" className="brand-icon" width="24" height="24" />
            <span className="brand-name">
              聚米 <span className="brand-en">Jumy</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#features">功能</a>
            <a href="/privacy.html">隐私</a>
            <a href="/terms.html">条款</a>
            <a href="mailto:support@jumyapp.com">联系</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <p className="hero-eyebrow">聚米 Jumy &middot; iOS 应用</p>
        <h1>
          买卖闲置，
          <br />
          就在身边。
        </h1>
        <p className="hero-sub">
          为海外华人打造的本地二手交易平台。
          <br />
          附近面交、站内沟通，让闲置流动起来。
        </p>
        <div className="hero-actions">
          <a className="btn" href="mailto:support@jumyapp.com?subject=聚米上线通知">
            获取上线通知
          </a>
          <p className="hero-note">正在准备上线 App&nbsp;Store</p>
        </div>
      </header>

      <main>
        <section className="features" id="features">
          <h2 className="section-title">围绕本地面交设计</h2>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <Card key={f.title} {...f} />
            ))}
          </div>
        </section>

        <section className="contact">
          <h2 className="section-title">有想法，写信给我们</h2>
          <p>上线消息、试用邀请，或任何建议，都欢迎来信。</p>
          <a className="mail-link" href="mailto:support@jumyapp.com">
            support@jumyapp.com
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">&copy; 2026 聚米 Jumy</p>
          <nav className="footer-links">
            <a href="/privacy.html">隐私政策</a>
            <a href="/terms.html">用户协议</a>
            <a href="mailto:support@jumyapp.com">联系我们</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
