'use client'

import { useState } from 'react'

//generate editor component
const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry?.content)
  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-8 text-xl"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}

export default Editor
