import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YW.dev — 웹 애플리케이션 개발 포트폴리오",
  description: "세무 SaaS, 관세 SaaS를 직접 기획하고 만들어 운영 중입니다. 아이디어만 있으면 기획부터 배포까지 원스톱으로 만들어드립니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
