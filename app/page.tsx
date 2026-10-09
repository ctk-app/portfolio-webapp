export default function Home() {
  return (
    <>
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">YW.dev</span>
          <div className="hidden sm:flex gap-7 text-sm" style={{ color: "var(--sub)" }}>
            <a href="#work" className="hover:text-white transition-colors">프로젝트</a>
            <a href="#features" className="hover:text-white transition-colors">기능</a>
            <a href="#pricing" className="hover:text-white transition-colors">비용</a>
            <a href="#contact" className="hover:text-white transition-colors">문의</a>
          </div>
          <a href="#contact" className="text-sm font-semibold" style={{ color: "var(--accent-light)" }}>
            상담 문의
          </a>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="min-h-screen flex items-center px-5">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-6">SaaS 2종 직접 개발 · 운영 중</div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            아이디어만 있으면 됩니다.<br />
            <span className="gradient-text">기획부터 배포까지</span><br />
            원스톱.
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "var(--sub)" }}>
            세무 SaaS, 관세 SaaS를 혼자 기획하고 만들어서 운영 중입니다.<br />
            로그인, 대시보드, AI 기능까지 — 필요한 걸 직접 만들어드립니다.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="btn-primary">프로젝트 문의</a>
            <a href="#work" className="inline-block px-8 py-3.5 rounded-xl text-sm font-semibold border hover:bg-white/5 transition-colors" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
              만든 것 보기
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-12">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Claude AI", "Vercel"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 직접 만든 서비스 */}
      <section id="work" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "var(--accent-light)" }}>PROJECTS</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">직접 만들고 운영 중인 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "#4f46e5" }}>C</div>
                <div>
                  <h3 className="font-bold text-lg text-white">CTK</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>사장님 세무 도우미 · B2C SaaS</p>
                </div>
              </div>
              <ul className="text-[15px] space-y-2 mb-5" style={{ color: "var(--sub)" }}>
                <li>세금 계산기 6종 (종합소득세, 부가세 등)</li>
                <li>AI 경비 분류 + 간편장부 자동 생성</li>
                <li>SEO 블로그 89편 — Google 검색 상위 노출</li>
                <li>PortOne 결제 연동 + PWA</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Next.js", "Supabase", "PortOne", "PWA", "SEO"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#1e1e2e", color: "#a5b4fc" }}>{t}</span>
                ))}
              </div>
              <a href="https://ctk-app.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: "#a5b4fc" }}>ctk-app.com &rarr;</a>
            </div>
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "#059669" }}>S</div>
                <div>
                  <h3 className="font-bold text-lg text-white">세움</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>관세 정산 자동화 · B2B SaaS</p>
                </div>
              </div>
              <ul className="text-[15px] space-y-2 mb-5" style={{ color: "var(--sub)" }}>
                <li>관세사 사무소 36곳 현장 리서치 기반 설계</li>
                <li>AI OCR로 수입신고필증 자동 인식</li>
                <li>정산 대장 자동 생성 + HS코드 검색</li>
                <li>화주 포털 + 이메일 알림</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Next.js", "Supabase", "Claude AI", "OCR", "관세청 API"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#0f2922", color: "#6ee7b7" }}>{t}</span>
                ))}
              </div>
              <a href="https://seumtg.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: "#6ee7b7" }}>seumtg.com &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 이런 기능을 만들 수 있습니다 */}
      <section id="features" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "var(--accent-light)" }}>FEATURES</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">이런 기능을 만들 수 있습니다</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "로그인 / 회원가입", desc: "이메일, 소셜 로그인, 비밀번호 찾기까지.\n한 번 만들면 알아서 돌아갑니다." },
              { n: "02", title: "관리자 대시보드", desc: "한눈에 보는 현황판.\n숫자, 차트, 알림을 한 화면에." },
              { n: "03", title: "AI 기능", desc: "문서 인식(OCR), 자동 분류, 챗봇.\nAI를 제품 안에 넣어드립니다." },
              { n: "04", title: "결제 연동", desc: "구독, 일회성 결제, 무료 체험.\n카드 결제를 바로 붙여드립니다." },
              { n: "05", title: "데이터 관리", desc: "등록, 수정, 삭제, 검색, 엑셀 다운로드.\n사업 데이터를 체계적으로." },
              { n: "06", title: "모바일 대응", desc: "PC, 태블릿, 핸드폰 어디서든.\n반응형은 기본입니다." },
            ].map((f) => (
              <div key={f.n} className="card p-7">
                <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>{f.n}</span>
                <h3 className="text-lg font-bold text-white mt-4 mb-2">{f.title}</h3>
                <p className="text-[15px] whitespace-pre-line leading-relaxed" style={{ color: "var(--sub)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 과정 */}
      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "var(--accent-light)" }}>PROCESS</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">이렇게 진행됩니다</h2>
          <div className="space-y-8">
            {[
              { s: "01", title: "상담", desc: "어떤 기능이 필요한지 듣고, 참고 사이트와 예산을 함께 정리합니다." },
              { s: "02", title: "견적 · 기획", desc: "기능 범위, 일정, 비용을 확정합니다. 화면 구성안을 먼저 보여드립니다." },
              { s: "03", title: "개발", desc: "확정된 내용대로 만듭니다. 중간에 한 번 확인을 거칩니다." },
              { s: "04", title: "배포 · 전달", desc: "실서버에 올리고 도메인을 연결합니다. 납품 후 2주간 무상 수정 (기존 범위 내)." },
            ].map((p) => (
              <div key={p.s} className="flex gap-6 items-start">
                <span className="text-2xl font-black shrink-0 w-10" style={{ color: "var(--accent)" }}>{p.s}</span>
                <div className="border-b pb-6 flex-1" style={{ borderColor: "var(--border)" }}>
                  <h3 className="font-bold text-white text-[17px] mb-1.5">{p.title}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--sub)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 예상 비용 */}
      <section id="pricing" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "var(--accent-light)" }}>PRICING</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">예상 비용</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "01", title: "홈페이지", price: "30만원~", desc: "반응형 원페이지부터 다페이지까지.\n모바일 대응, SEO 기본 세팅 포함.", items: ["반응형 디자인", "SEO 최적화", "모바일 대응", "도메인 연결 + 배포"] },
              { n: "02", title: "웹 애플리케이션", price: "100만원~", desc: "로그인, 관리 화면, 데이터 관리.\n사업에 맞는 기능을 직접 개발.", items: ["회원가입 / 로그인", "관리자 대시보드", "결제 연동", "데이터베이스 설계"] },
              { n: "03", title: "AI 기능 개발", price: "별도 협의", desc: "기존 서비스에 AI를 붙여드립니다.\n자동 분류, OCR, 챗봇 등.", items: ["AI 챗봇", "문서 자동 인식 (OCR)", "데이터 자동 분류", "맞춤 추천 시스템"] },
            ].map((s) => (
              <div key={s.n} className="card p-7">
                <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>{s.n}</span>
                <h3 className="text-lg font-bold text-white mt-4 mb-2">{s.title}</h3>
                <p className="text-[15px] mb-5 whitespace-pre-line leading-relaxed" style={{ color: "var(--sub)" }}>{s.desc}</p>
                <ul className="space-y-2 mb-5">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2" style={{ color: "var(--sub)" }}>
                      <span style={{ color: "var(--accent-light)" }}>&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-base font-bold" style={{ color: "var(--accent-light)" }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section id="contact" className="py-24 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "var(--accent-light)" }}>CONTACT</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">프로젝트 문의</h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--sub)" }}>
            만들고 싶은 게 있으시면 편하게 연락주세요.<br />
            간단한 상담은 무료이고, 24시간 내 답변드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://pf.kakao.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">카카오톡 문의</a>
            <a href="mailto:seumtg.help@gmail.com" className="inline-block px-8 py-3.5 rounded-xl text-sm font-semibold border hover:bg-white/5 transition-colors text-center" style={{ borderColor: "var(--border)", color: "var(--text)" }}>이메일 문의</a>
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>기능과 예산을 말씀해주시면 견적을 보내드립니다.</p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-5 text-center border-t" style={{ borderColor: "var(--border)" }}>
        <p className="text-sm" style={{ color: "var(--muted)" }}>&copy; 2026 YW.dev. All rights reserved.</p>
      </footer>
    </>
  );
}
