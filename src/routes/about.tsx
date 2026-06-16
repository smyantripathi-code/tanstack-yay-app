import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{
        background: 'var(--brown-deep)',
        padding: '64px 24px 56px',
        textAlign: 'center',
      }}>
        <div className="container">
          <div className="eyebrow">Our Story</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--ivory)',
            marginBottom: '16px',
          }}>
            Born from a lineage of bakers
          </h1>
          <p style={{ color: 'rgba(251,246,239,0.7)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
            Good Cake Bakery is the result of 30+ years of combined passion, craft, and family tradition — brought together in the heart of Tigard, Oregon.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="eyebrow">How It Began</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginBottom: '20px' }}>
                A panadería rooted in Michoacán
              </h2>
              <p className="about__body">
                Edgar Contreras comes from a long line of bakers. His grandfather ran a beloved panadería/pastelería in his home state of Michoacán, Mexico — a shop that passed to his father and then to his uncle and brother, and still bakes traditional French-style bread, tortas, and pan dulce in Tacámbaro today.
              </p>
              <p className="about__body">
                Edgar grew up immersed in that tradition. The smells, the rhythms, the pride of a freshly baked concha — they're part of who he is. Though Edgar's father passed away two years ago and never made it to Tigard to see the bakery, he called regularly to ask about the day's baking, a ritual that speaks to how deeply the craft ran in their family.
              </p>
              <p className="about__body">
                Jay Burton came to baking through an unexpected door. When the head baker at La Montana Market in Aloha quit without warning, Jay stepped in — and through sheer hard work and hours of self-teaching, became their lead cake baker over more than a decade. When La Montana closed, the cake orders kept coming to her home kitchen. That's when she turned to Edgar: "Let's open something of our own."
              </p>
            </div>

            <div className="about__visual-box">
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🏡</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'var(--text-dark)',
                  marginBottom: '8px',
                }}>Good Cake Bakery</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                  Opened May 2018 · Downtown Tigard, OR
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '24px',
              }}>
                {[
                  { num: '2018', label: 'Year opened' },
                  { num: '4.5★', label: 'Google rating' },
                  { num: '30+', label: 'Yrs experience' },
                  { num: '3rd gen', label: 'Baker lineage' },
                ].map(({ num, label }) => (
                  <div key={label} style={{
                    background: 'var(--pink-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: '700',
                      fontSize: '1.3rem',
                      color: 'var(--pink-rose)',
                    }}>{num}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: '1.6' }}>
                📍 12085 SW Hall Blvd #130, Tigard, OR 97223
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Bakers */}
      <section className="section section--alt">
        <div className="container">
          <div className="eyebrow">The Team</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginBottom: '40px' }}>
            Meet Jay &amp; Edgar
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '👩‍🍳',
                name: 'Jay Burton',
                role: 'Co-Owner & Head Cake Baker',
                color: 'var(--pink-rose)',
                body: `Jay began her baking career 13 years ago at La Montana Market in Aloha, initially stepping in when their head baker unexpectedly quit. Through relentless self-teaching and long hours at the oven, she became the market's lead cake baker — a role she held until La Montana closed.

Jay's philosophy is simple: every cake she makes should be good enough to serve her own family. Her benchmark? An intricate owl cake she made for her daughter's first birthday. She was making 20 elaborate wedding cakes per year before the pandemic, and has worked hard to rebuild that pipeline — one beautiful birthday cake at a time.`,
              },
              {
                icon: '👨‍🍳',
                name: 'Edgar Contreras',
                role: 'Co-Owner & Head Bread Baker',
                color: 'var(--gold)',
                body: `Edgar is a third-generation baker. He got his start at a young age in his grandfather's panadería/pastelería in Michoacán, Mexico — a family business that still operates today in Tacámbaro.

He brought that deep knowledge of traditional Mexican breads to Good Cake Bakery: fresh pan dulce and conchas, tortas, giant shortbread-based Mexican cookies, and rich Salvadorian sweet breads. When something doesn't come out exactly right, Edgar holds himself to the same high standards his father and grandfather did. That dedication shows in every bite.`,
              },
            ].map(({ icon, name, role, color, body }) => (
              <div key={name} className="card" style={{ padding: '36px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  marginBottom: '20px',
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '4px' }}>{name}</h3>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color,
                  marginBottom: '18px',
                }}>{role}</div>
                {body.split('\n\n').map((p, i) => (
                  <p key={i} style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: '1.7', marginBottom: '12px' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section section--dark">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold)' }}>Community</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginBottom: '20px' }}>
                Investing in the next generation
              </h2>
              <p style={{ color: 'rgba(251,246,239,0.75)', lineHeight: '1.75', marginBottom: '16px' }}>
                Beyond baking, Jay and Edgar are committed to their community. Good Cake Bakery hires Tigard high school students as baking interns — passing on the craft and creating real-world opportunity for young people in the neighborhood.
              </p>
              <p style={{ color: 'rgba(251,246,239,0.75)', lineHeight: '1.75', marginBottom: '16px' }}>
                During the COVID-19 pandemic, the bakery was forced to close its doors and transition to delivery service only. With greatly reduced income, Good Cake was awarded a $1,500 grant from the City of Tigard's CARES program to help with operating expenses. They persevered — and emerged even more grateful for the community that showed up for them.
              </p>
              <blockquote style={{
                borderLeft: '3px solid var(--pink-rose)',
                paddingLeft: '20px',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--ivory)',
                margin: '28px 0',
                lineHeight: '1.55',
              }}>
                "We love how eager people here are to shop local and support local businesses!"
                <footer style={{ fontSize: '0.85rem', fontStyle: 'normal', marginTop: '8px', color: 'rgba(251,246,239,0.5)' }}>— Jay Burton</footer>
              </blockquote>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '🎓', title: 'Tigard HS Internship Program', desc: 'Training local high school students in the art of baking — giving back to the community that gave so much to us.' },
                { icon: '🏪', title: 'Wholesale Partnerships', desc: 'Good Cake supplies tortas to a half-dozen local Tigard restaurants, including neighbor La Real Taqueria.' },
                { icon: '🎉', title: 'Seasonal Traditions', desc: 'Pan de Muerto for Día de Muertos, Rosca de Reyes in January, and sugar cookies for every holiday — keeping traditions alive in Tigard.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--ivory)', marginBottom: '6px' }}>{title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(251,246,239,0.65)', lineHeight: '1.6' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Come Visit</div>
        <h2 style={{ color: 'var(--ivory)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: '12px 0 16px' }}>
          We'd love to meet you
        </h2>
        <p style={{ color: 'rgba(251,246,239,0.7)', maxWidth: '400px', margin: '0 auto 28px', fontSize: '1rem' }}>
          Stop by our bakery in downtown Tigard or order your custom cake today.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/order" className="btn btn--gold">Order a Cake</Link>
          <Link to="/menu" className="btn btn--secondary">See Our Menu</Link>
        </div>
      </div>
    </>
  )
}
