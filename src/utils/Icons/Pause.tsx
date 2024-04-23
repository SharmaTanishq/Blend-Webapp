import * as React from "react"
const PauseIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size?props.size:24}
    height={props.size?props.size:24}
    fill="none"
    {...props}
  >
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm9.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Zm4 0a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default PauseIcon
