import InfoPanel from '@/components/InfoPanel'
import { useCallback, useState } from 'react'
import IconBook2 from '~icons/tabler/book-2'

export default function DictRequest() {
  const [showPanel, setShowPanel] = useState(false)

  const onOpenPanel = useCallback(() => {
    setShowPanel(true)
  }, [])

  const onClosePanel = useCallback(() => {
    setShowPanel(false)
  }, [])

  return (
    <>
      {showPanel && (
        <InfoPanel
          openState={showPanel}
          title="对词典有疑问？"
          icon={IconBook2}
          buttonClassName="bg-indigo-500 hover:bg-indigo-400"
          iconClassName="text-indigo-500 bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-500"
          onClose={onClosePanel}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            如果您遇到词典错误的问题，或新增词典内容的建议。<br />
            请将您的需求发送邮件到
            <a href="mailto:ixiaoqy@outlook.com" className="px-2 text-blue-500" aria-label="发送邮件到 ixiaoqy@outlook.com">ixiaoqy@outlook.com</a>
          </p>
          <br />
        </InfoPanel>
      )}
      <button className="cursor-pointer pr-6 text-sm text-indigo-500" onClick={onOpenPanel}>
        没有找到想要的词典？
      </button>
    </>
  )
}
