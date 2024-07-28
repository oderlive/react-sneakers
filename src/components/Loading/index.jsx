import React from 'react'
import ContentLoader from "react-content-loader"

const Loading = () => {
  return (
    <div>
             <ContentLoader
                speed={2}
                width={150}
                height={265}
                viewBox="0 0 150 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="56" rx="5" ry="5" width="100" height="15" />
                <rect x="0" y="72" rx="5" ry="5" width="80" height="25" />
                <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
                <circle cx="118" cy="20" r="20" />
            </ContentLoader>
    </div>
  )
}

export default Loading