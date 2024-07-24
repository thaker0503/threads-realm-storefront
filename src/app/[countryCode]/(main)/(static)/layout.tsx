import React from 'react'

const StaticPageLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className="container mx-auto h-svh max-w-4xl">
            {children}
        </div>
    )
}

export default StaticPageLayout
