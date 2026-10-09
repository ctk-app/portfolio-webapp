export default function Home() {
  return (
    <>
      {/* 네비게이션 */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 20px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="gradient-text" style={{ fontSize: 18, fontWeight: 700 }}>YW.dev</span>
          <div style={{ display: "flex", gap: 28, fontSize: 14, color: "var(--sub)" }}>
            <a href="#work" style={{ color: "inherit", textDecoration: "none" }}>프로젝트</a>
            <a href="#features" style={{ color: "inherit", textDecoration: "none" }}>기능</a>
            <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>비용</a>
            <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>문의</a>
          </div>
          <a href="#contact" style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-light)", textDecoration: "none" }}>상담 문의</a>
        </div>
      </nav>

      {/* 히어로 */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 20px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", width: "100%" }}>
          <div className="tag" style={{ marginBottom: 24, display: "inline-block" }}>SaaS 2종 직접 개발 · 운영 중</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
            아이디어만 있으면 됩니다.<br />
            <span className="gradient-text">기획부터 배포까지</span><br />
            원스톱.
          </h1>
          <p style={{ fontSize: 17, color: "var(--sub)", marginBottom: 32, maxWidth: 520, lineHeight: 1.8 }}>
            세무 SaaS, 관세 SaaS를 혼자 기획하고 만들어서 운영 중입니다.<br />
            로그인, 대시보드, AI 기능까지 — 필요한 걸 직접 만들어드립니다.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">프로젝트 문의</a>
            <a href="#work" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 14, fontSize: 14, fontWeight: 600, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none" }}>만든 것 보기</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 48 }}>
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Claude AI", "Vercel"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 직접 만든 서비스 */}
      <section id="work" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-light)", letterSpacing: 2, marginBottom: 8 }}>PROJECTS</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 32 }}>직접 만들고 운영 중인 서비스</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {/* CTK */}
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#4f46e5", color: "#fff", fontWeight: 700, fontSize: 18 }}>C</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>CTK</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)" }}>사장님 세무 도우미 · B2C SaaS</p>
                </div>
              </div>
              <ul style={{ fontSize: 15, color: "var(--sub)", listStyle: "none", padding: 0 }}>
                {["세금 계산기 6종 (종합소득세, 부가세 등)", "AI 경비 분류 + 간편장부 자동 생성", "SEO 블로그 89편 — Google 검색 상위 노출", "PortOne 결제 연동 + PWA"].map((t, i) => (
                  <li key={i} style={{ marginBottom: 8 }}>{t}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "20px 0" }}>
                {["Next.js", "Supabase", "PortOne", "PWA", "SEO"].map((t) => (
                  <span key={t} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 20, background: "#1e1e2e", color: "#a5b4fc", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <a href="https://ctk-app.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "#a5b4fc", textDecoration: "none" }}>ctk-app.com &rarr;</a>
            </div>
            {/* 세움 */}
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "#059669", color: "#fff", fontWeight: 700, fontSize: 18 }}>S</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>세움</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)" }}>관세 정산 자동화 · B2B SaaS</p>
                </div>
              </div>
              <ul style={{ fontSize: 15, color: "var(--sub)", listStyle: "none", padding: 0 }}>
                {["관세사 사무소 36곳 현장 리서치 기반 설계", "AI OCR로 수입신고필증 자동 인식", "정산 대장 자동 생성 + HS코드 검색", "화주 포털 + 이메일 알림"].map((t, i) => (
                  <li key={i} style={{ marginBottom: 8 }}>{t}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "20px 0" }}>
                {["Next.js", "Supabase", "Claude AI", "OCR", "관세청 API"].map((t) => (
                  <span key={t} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 20, background: "#0f2922", color: "#6ee7b7", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <a href="https://seumtg.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "#6ee7b7", textDecoration: "none" }}>seumtg.com &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 이런 기능을 만들 수 있습니다 */}
      <section id="features" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-light)", letterSpacing: 2, marginBottom: 8 }}>FEATURES</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 32 }}>이런 기능을 만들 수 있습니다</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "로그인 / 회원가입", desc: "이메일, 소셜 로그인, 비밀번호 찾기까지.\n한 번 만들면 알아서 돌아갑니다." },
              { n: "02", title: "관리자 대시보드", desc: "한눈에 보는 현황판.\n숫자, 차트, 알림을 한 화면에." },
              { n: "03", title: "AI 기능", desc: "문서 인식(OCR), 자동 분류, 챗봇.\nAI를 제품 안에 넣어드립니다." },
              { n: "04", title: "결제 연동", desc: "구독, 일회성 결제, 무료 체험.\n카드 결제를 바로 붙여드립니다." },
              { n: "05", title: "데이터 관리", desc: "등록, 수정, 삭제, 검색, 엑셀 다운로드.\n사업 데이터를 체계적으로." },
              { n: "06", title: "모바일 대응", desc: "PC, 태블릿, 핸드폰 어디서든.\n반응형은 기본입니다." },
            ].map((f) => (
              <div key={f.n} className="card" style={{ padding: 28 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)" }}>{f.n}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 16, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 15, whiteSpace: "pre-line", lineHeight: 1.7, color: "var(--sub)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 과정 */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-light)", letterSpacing: 2, marginBottom: 8 }}>PROCESS</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 32 }}>이렇게 진행됩니다</h2>
          <div>
            {[
              { s: "01", title: "상담", desc: "어떤 기능이 필요한지 듣고, 참고 사이트와 예산을 함께 정리합니다." },
              { s: "02", title: "견적 · 기획", desc: "기능 범위, 일정, 비용을 확정합니다. 화면 구성안을 먼저 보여드립니다." },
              { s: "03", title: "개발", desc: "확정된 내용대로 만듭니다. 중간에 한 번 확인을 거칩니다." },
              { s: "04", title: "배포 · 전달", desc: "실서버에 올리고 도메인을 연결합니다. 납품 후 2주간 무상 수정 (기존 범위 내)." },
            ].map((p) => (
              <div key={p.s} style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 40 }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: "var(--accent)", flexShrink: 0, width: 40 }}>{p.s}</span>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: 24, flex: 1 }}>
                  <h3 style={{ fontWeight: 700, color: "#fff", fontSize: 17, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--sub)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 예상 비용 */}
      <section id="pricing" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-light)", letterSpacing: 2, marginBottom: 8 }}>PRICING</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 32 }}>예상 비용</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "홈페이지", price: "30만원~", desc: "반응형 원페이지부터 다페이지까지.\n모바일 대응, SEO 기본 세팅 포함.", items: ["반응형 디자인", "SEO 최적화", "모바일 대응", "도메인 연결 + 배포"] },
              { n: "02", title: "웹 애플리케이션", price: "100만원~", desc: "로그인, 관리 화면, 데이터 관리.\n사업에 맞는 기능을 직접 개발.", items: ["회원가입 / 로그인", "관리자 대시보드", "결제 연동", "데이터베이스 설계"] },
              { n: "03", title: "AI 기능 개발", price: "별도 협의", desc: "기존 서비스에 AI를 붙여드립니다.\n자동 분류, OCR, 챗봇 등.", items: ["AI 챗봇", "문서 자동 인식 (OCR)", "데이터 자동 분류", "맞춤 추천 시스템"] },
            ].map((s) => (
              <div key={s.n} className="card" style={{ padding: 28 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)" }}>{s.n}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 16, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 15, marginBottom: 20, whiteSpace: "pre-line", lineHeight: 1.7, color: "var(--sub)" }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "var(--sub)", display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: "var(--accent-light)" }}>&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 16, fontWeight: 700, color: "var(--accent-light)" }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section id="contact" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 576, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-light)", letterSpacing: 2, marginBottom: 8 }}>CONTACT</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 16 }}>프로젝트 문의</h2>
          <p style={{ fontSize: 16, color: "var(--sub)", marginBottom: 32, lineHeight: 1.8 }}>
            만들고 싶은 게 있으시면 편하게 연락주세요.<br />
            간단한 상담은 무료이고, 24시간 내 답변드립니다.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
            <a href="https://pf.kakao.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center" }}>카카오톡 문의</a>
            <a href="mailto:seumtg.help@gmail.com" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 14, fontSize: 14, fontWeight: 600, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", textAlign: "center" }}>이메일 문의</a>
          </div>
          <p style={{ fontSize: 14, color: "var(--muted)" }}>기능과 예산을 말씀해주시면 견적을 보내드립니다.</p>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ padding: "32px 20px", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <p style={{ fontSize: 14, color: "var(--muted)" }}>&copy; 2026 YW.dev. All rights reserved.</p>
      </footer>
    </>
  );
}
