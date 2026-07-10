const EMAIL = 'wismyai@gmail.com'
const NOTIFY_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent('聚米上线通知')}`

const FEATURES = [
  {
    num: '01',
    title: '附近优先',
    desc: '按 ZIP 邮编排序，先看到身边的东西。近，面交才方便。',
  },
  {
    num: '02',
    title: '站内沟通',
    desc: '砍价、约时间，都在应用里聊。手机号，不用给。',
  },
  {
    num: '03',
    title: '发布求购',
    desc: '找不到想要的？发条求购，让有货的人来找你。',
  },
  {
    num: '04',
    title: '发帖省事',
    desc: '一句话描述，自动整理成草稿，确认就上架。',
  },
]

const SAFETY = [
  {
    title: '实名入口',
    desc: 'Apple 登录或邮箱验证，没有匿名账号。',
  },
  {
    title: '号码不外泄',
    desc: '全程站内聊天，手机号、微信号不会展示给任何人。',
  },
  {
    title: '不经手交易',
    desc: '不代收资金，不抽佣金。钱货两清，都在你们手上。',
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
            <a href="#about">关于</a>
            <a href="/privacy.html">隐私</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <p className="hero-eyebrow">个人项目 &middot; iOS 应用</p>
        <h1>
          买卖闲置，
          <br />
          就在身边。
        </h1>
        <p className="hero-sub">
          一个为海外华人做的本地二手 app。
          <br />
          附近面交，站内聊天，让闲置流动起来。
        </p>
        <div className="hero-actions">
          <a className="btn" href={NOTIFY_HREF}>
            获取上线通知
          </a>
        </div>
        <ul className="trust-chips">
          <li>不经手交易</li>
          <li>不碰你的手机号</li>
          <li>无广告，无追踪</li>
        </ul>
      </header>

      <main>
        <section className="section" id="features">
          <p className="overline">功能</p>
          <h2 className="section-title">为面交设计的细节</h2>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.num}>
                <p className="card-num">{f.num}</p>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="safety">
          <div className="safety-panel">
            <div className="safety-intro">
              <p className="overline">安全</p>
              <h2 className="section-title">信任，是二手交易的全部。</h2>
              <p className="safety-lead">所以安全不是一个功能，是每个功能的前提。</p>
            </div>
            <div className="safety-list">
              {SAFETY.map((s) => (
                <div className="safety-item" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="overline">关于</p>
          <h2 className="section-title">一个人的项目，慢慢做。</h2>
          <p className="about-text">
            聚米是我一个人在做的项目——没有团队，也不着急。
            <br />
            每个功能，都想清楚了才加。
          </p>
          <p className="about-text">上线消息、试用邀请，或者任何想法，写信给我：</p>
          <a className="mail-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">聚米 Jumy &middot; 个人项目 &middot; &copy; 2026</p>
          <nav className="footer-links">
            <a href="/privacy.html">隐私政策</a>
            <a href="/terms.html">用户协议</a>
            <a href={`mailto:${EMAIL}`}>联系</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
