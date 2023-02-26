import React from "react"

const MainContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="w-full min-h-screen container">
        {children}
    </main>
  )
}

export default MainContainer