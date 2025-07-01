"use client";
import Image from 'next/image';

type ImageOverlayTypes = {
  show?: boolean;
}


export const ImageOverlay:React.FC<ImageOverlayTypes> = ({ show = false }) => {
  if (!show) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900/10 flex justify-center items-center">
      <div className="border-2 border-green-500">
        <div className="bg-white drop-shadow-[15px_15px] drop-shadow-green-500">
        <Image
          src='/TestExportRK.png'
          alt='Test image of a png file'
          width={400}
          height={800}
        />
        </div>
      </div>
    </div>
  );
}