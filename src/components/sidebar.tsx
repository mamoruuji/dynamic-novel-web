import React, { useState } from 'react'
import Sidebar from 'react-sidebar'

const SidebarClass = () => {
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(!open)

  return (
    <Sidebar
      sidebar={
        <div>
          <b>サイドバー</b>
          <br></br>
          <b>サイドバー</b>
        </div>
      }
      open={open}
      onSetOpen={toggle}
      styles={{ sidebar: { background: 'white' } }}
    >
      <button onClick={() => toggle()}>サイドーバーを開く</button>
    </Sidebar>
  )
}

export default SidebarClass
