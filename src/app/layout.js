import "@/styles/globals.css";
import Layout from "@/components/layout";

export const metadata = {
  title: "岩本謙吾ポートフォリオ",
  description:
    "都内のWEB制作会社でフロントエンドを担当している岩本謙吾です。デザインとコーディングが好きです。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "岩本謙吾ポートフォリオ",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
