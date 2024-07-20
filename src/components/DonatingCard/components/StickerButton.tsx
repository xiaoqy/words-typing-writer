import sticker2 from '@/assets/sticker2.jpg'
import sticker1 from '@/assets/sticker.jpg'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export const StickerButton = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        data-tooltip-id="sticker-btn"
        className={`w-max cursor-pointer rounded border-2 border-dashed border-gray-300 p-1.5 indent-0 text-sm font-bold text-gray-500 transition-all hover:border-indigo-500 hover:text-indigo-500
        dark:text-gray-300
        ${className}`}
      >
        <SolarStickerSmileSquareOutline className="mb-[2px] mr-2 inline-block text-sm " />
        查看贴纸
      </div>
    </>
  )
}
