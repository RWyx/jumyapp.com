const EMAIL = 'wismyai@gmail.com'
const NOTIFY_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent('聚米上线通知')}`

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
    title: '发帖省事',
    desc: '像说话一样描述你要卖的东西，自动整理成商品草稿，确认即上架。',
  },
]

const SAFETY = [
  {
    title: '实名入口',
    desc: 'Apple 登录或邮箱验证注册，没有匿名账号。',
  },
  {
    title: '号码不外泄',
    desc: '全程站内聊天，手机号、微信号不会展示给任何人。',
  },
  {
    title: '不经手交易',
    desc: '平台不代收资金、不抽佣金，钱货两清都在你们手上。',
  },
  {
    title: '社区共治',
    desc: '举报与拉黑机制，违规账号及时处理。',
  },
]

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
            <a href="#safety">安全</a>
            <a href="/privacy.html">隐私</a>
            <a href="/terms.html">条款</a>
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
          <a className="btn" href={NOTIFY_HREF}>
            获取上线通知
          </a>
          <p className="hero-note">正在准备上线 App&nbsp;Store</p>
        </div>
        <ul className="trust-chips">
          <li>平台不经手交易</li>
          <li>聊天不暴露手机号</li>
          <li>Apple 登录或邮箱验证</li>
        </ul>
      </header>

      <main>
        <section className="section" id="features">
          <h2 className="section-title">围绕本地面交设计</h2>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="safety">
          <div className="safety-panel">
            <h2 className="section-title">安全，放在功能前面</h2>
            <p className="safety-lead">二手交易的信任来之不易，我们把它当作产品的一部分来做。</p>
            <div className="safety-grid">
              {SAFETY.map((s) => (
                <div className="safety-item" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2 className="section-title">有想法，写信给我们</h2>
          <p className="contact-lead">上线消息、试用邀请，或任何建议，都欢迎来信。</p>
          <a className="mail-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">&copy; 2026 聚米 Jumy</p>
          <nav className="footer-links">
            <a href="/privacy.html">隐私政策</a>
            <a href="/terms.html">用户协议</a>
            <a href={`mailto:${EMAIL}`}>联系我们</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
