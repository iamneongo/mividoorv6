"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function SanityStudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-300">Mividoor CMS thử nghiệm</p>
          <h1 className="mb-4 text-3xl font-semibold">Chưa kết nối Sanity project</h1>
          <p className="text-white/75">Tạo project Sanity rồi cấu hình NEXT_PUBLIC_SANITY_PROJECT_ID và NEXT_PUBLIC_SANITY_DATASET trước khi mở dashboard.</p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
