"use client";

import type { ComponentType, CSSProperties } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";

const PDF_URL = "/mividoor/catalogue/catalogue-mivicomposite-2024.pdf";

type RenderedPage = {
  number: number;
  src: string;
};

type FlipBookHandle = {
  pageFlip: () => {
    flipNext: (corner?: "top" | "bottom") => void;
    flipPrev: (corner?: "top" | "bottom") => void;
  };
};

const CataloguePage = forwardRef<HTMLDivElement, { page: RenderedPage }>(function CataloguePage(
  { page },
  ref,
) {
  return (
    <article ref={ref} className="relative h-full w-full overflow-hidden bg-white" aria-label={`Trang ${page.number}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={page.src} alt={`Trang ${page.number} của Catalogue Mivicomposite 2024`} className="h-full w-full object-contain" draggable={false} />
      <span className="absolute bottom-3 right-4 text-[10px] font-medium text-slate-400 sm:bottom-4 sm:right-5">{page.number}</span>
    </article>
  );
});

export function CatalogueFlipbook() {
  const [FlipBook, setFlipBook] = useState<ComponentType<any> | null>(null);
  const [pages, setPages] = useState<RenderedPage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState({ rendered: 0, total: 0 });
  const [loadError, setLoadError] = useState(false);
  const bookRef = useRef<FlipBookHandle | null>(null);

  useEffect(() => {
    let isCurrent = true;

    async function prepareBook() {
      try {
        const [{ default: FlipBookComponent }, pdfjs] = await Promise.all([
          import("react-pageflip"),
          import("pdfjs-dist"),
        ]);

        pdfjs.GlobalWorkerOptions.workerSrc = "/mividoor/pdfjs/pdf.worker.min.mjs";
        const pdfDocument = await pdfjs.getDocument({ url: PDF_URL }).promise;
        if (!isCurrent) return;

        setProgress({ rendered: 0, total: pdfDocument.numPages });
        setFlipBook(() => FlipBookComponent as unknown as ComponentType<any>);

        for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
          const page = await pdfDocument.getPage(pageNumber);
          const viewport = page.getViewport({ scale: 1.18 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d", { alpha: false });
          if (!context) throw new Error("Canvas is unavailable");

          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, canvas.width, canvas.height);
          await page.render({ canvas, canvasContext: context, viewport }).promise;
          if (isCurrent) {
            setPages((loadedPages) => [...loadedPages, {
              number: pageNumber,
              src: canvas.toDataURL("image/jpeg", 0.88),
            }]);
            setProgress({ rendered: pageNumber, total: pdfDocument.numPages });
          }
        }
      } catch {
        if (isCurrent) setLoadError(true);
      }
    }

    void prepareBook();
    return () => {
      isCurrent = false;
    };
  }, []);

  const loading = !loadError && (pages.length === 0 || FlipBook === null);

  return (
    <section className="pb-12 md:pb-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#F2F2EC] px-2 py-8 sm:min-h-[650px] sm:px-6 md:min-h-[760px]">
          {loading && (
            <div className="flex flex-col items-center gap-4 text-center text-ink">
              <LoaderCircle className="size-8 animate-spin text-[#2563EB]" aria-hidden="true" />
              <div>
                <p className="text-lg font-medium">Đang chuẩn bị catalogue</p>
                <p className="mt-1 text-sm text-ink/60">{progress.total ? `${progress.rendered}/${progress.total} trang` : "Đang tải tài liệu"}</p>
              </div>
            </div>
          )}

          {loadError && (
            <div className="max-w-md px-6 text-center text-ink">
              <p className="text-xl font-medium">Không thể tải catalogue trong lúc này.</p>
              <a href={PDF_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex border border-black/15 px-4 py-2 text-sm font-semibold transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white">Mở file PDF</a>
            </div>
          )}

          {!loading && !loadError && FlipBook && (
            <FlipBook
              ref={bookRef}
              className="catalogue-flipbook"
              style={{ margin: "0 auto" } as CSSProperties}
              width={595}
              height={842}
              size="stretch"
              minWidth={260}
              maxWidth={595}
              minHeight={368}
              maxHeight={842}
              startPage={0}
              drawShadow
              flippingTime={780}
              usePortrait
              startZIndex={0}
              autoSize
              maxShadowOpacity={0.45}
              showCover
              mobileScrollSupport
              clickEventForward={false}
              useMouseEvents
              swipeDistance={24}
              showPageCorners
              disableFlipByClick={false}
              onFlip={(event: { data: number }) => setCurrentPage(event.data + 1)}
              renderOnlyPageLengthChange
            >
              {pages.map((page) => <CataloguePage key={page.number} page={page} />)}
            </FlipBook>
          )}
        </div>

        {!loading && !loadError && (
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => bookRef.current?.pageFlip().flipPrev("bottom")}
              disabled={currentPage <= 1}
              className="inline-flex size-11 items-center justify-center border border-black/10 bg-white text-ink transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Trang trước"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => bookRef.current?.pageFlip().flipNext("bottom")}
              disabled={currentPage >= pages.length}
              className="inline-flex size-11 items-center justify-center border border-black/10 bg-white text-ink transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Trang tiếp"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
