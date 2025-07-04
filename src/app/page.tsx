import { Terminal } from "@/components/terminal";
import { ImageOverlay } from '@/components/image-overlay';

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
          <Terminal />
        </main>
      </div>
      <ImageOverlay show />
    </>
  );
}
