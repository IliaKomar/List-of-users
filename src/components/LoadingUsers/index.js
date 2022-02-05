import React from "react"
import ContentLoader from "react-content-loader"

const LoadingUserBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={440}
    height={122}
    viewBox="0 0 440 122"
    backgroundColor="#e6e6e6"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="440" height="122" />
  </ContentLoader>
)

export default LoadingUserBlock;