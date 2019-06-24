import React from 'react'

const CourseBud = ({ width, height }) => (
  <svg width={width} height={height} viewBox={`0 0 1500 300`}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M420.486 220.2c-22.918 0-41.907-7.636-56.967-22.69-15.06-15.274-22.481-34.255-22.481-56.728s7.42-41.455 22.48-56.51C378.58 69 397.569 61.365 420.487 61.365c27.283 0 52.165 13.527 65.48 35.345l-30.121 17.455c-6.767-12-19.862-18.764-35.36-18.764-13.531 0-24.445 4.145-32.52 12.436-8.076 8.291-12.005 19.2-12.005 32.946 0 13.745 3.929 24.654 12.005 32.945 8.075 8.291 18.989 12.437 32.52 12.437 15.498 0 29.03-7.2 35.36-18.764l30.12 17.455c-13.096 21.818-37.76 35.345-65.48 35.345zm176.357-16.582c-11.131 11.127-24.882 16.582-41.033 16.582-16.152 0-29.903-5.455-41.034-16.582S497.97 178.745 497.97 162.6s5.675-29.673 16.806-40.8c11.131-11.127 24.882-16.8 41.034-16.8 16.151 0 29.902 5.673 41.033 16.8 11.132 11.127 16.807 24.655 16.807 40.8 0 16.145-5.675 29.89-16.807 41.018zm-58.931-22.473c4.802 4.8 10.695 7.2 17.898 7.2 7.202 0 13.096-2.4 17.897-7.2 4.802-4.8 7.203-10.909 7.203-18.545 0-7.636-2.4-13.745-7.203-18.545-4.801-4.8-10.695-7.2-17.897-7.2-7.203 0-13.096 2.4-17.898 7.2-4.802 4.8-7.203 10.909-7.203 18.545 0 7.636 2.401 13.745 7.203 18.545zm164.79-13.527v-59.563h32.74v109.09h-32.74v-10.254c-6.548 8.945-17.025 13.309-31.212 13.309-11.568 0-21.39-3.927-29.248-12-7.639-8.073-11.568-18.982-11.568-33.164v-66.981h32.74v62.181c0 12.873 7.857 19.855 18.989 19.855 12.44 0 20.298-7.636 20.298-22.473zm89.488-59.563v19.418c4.147-13.964 17.897-21.6 32.74-21.6v37.09c-8.076-1.308-15.497 0-22.482 4.146-6.766 3.927-10.258 10.91-10.258 20.727v49.31h-32.74V108.054h32.74zm79.011 31.854c0 4.364 8.513 6.764 18.99 9.6 15.06 3.273 34.922 11.127 34.703 34.91 0 11.781-4.365 20.726-13.096 26.836-8.73 5.89-19.425 8.945-32.303 8.945-22.917 0-38.632-8.727-46.926-25.964l28.374-16.145c2.837 8.509 9.167 12.873 18.552 12.873 7.858 0 11.787-2.182 11.787-6.764 0-4.364-8.513-6.982-18.99-9.6-15.06-4.145-34.703-11.564-34.703-33.818 0-11.346 4.147-20.073 12.222-26.4 8.295-6.327 18.553-9.382 30.557-9.382 18.116 0 33.613 8.29 42.562 23.345L894.992 143.4c-3.492-6.327-8.294-9.6-14.624-9.6-6.11 0-9.167 1.964-9.167 6.11zm177.886 35.782h-77.484c3.71 10.254 12.44 15.273 26.192 15.273 8.948 0 15.933-2.837 20.953-8.291l26.192 15.054c-10.695 15.055-26.629 22.473-47.582 22.473-18.334 0-32.958-5.455-44.09-16.364-10.913-10.909-16.37-24.654-16.37-41.236 0-16.364 5.457-30.11 16.152-41.018C963.964 110.455 977.933 105 994.957 105c15.933 0 29.03 5.455 39.506 16.582 10.695 10.909 15.933 24.654 15.933 41.018 0 4.582-.436 8.945-1.31 13.09zm-78.139-24.436h46.927c-3.274-11.564-10.913-17.237-23.136-17.237-12.66 0-20.517 5.673-23.79 17.237zM1134.21 105c14.405 0 26.628 5.673 36.886 16.8 10.259 11.127 15.279 24.655 15.279 40.8 0 16.145-5.02 29.89-15.279 41.018-10.258 11.127-22.48 16.582-36.886 16.582-13.97 0-24.882-4.364-32.522-13.31v10.255h-32.74V64.418h32.74v53.891c7.64-8.945 18.553-13.309 32.522-13.309zm-25.319 77.018c5.02 4.8 11.131 7.2 18.77 7.2 7.64 0 13.751-2.4 18.553-7.2 5.02-4.8 7.421-11.345 7.421-19.418 0-8.073-2.4-14.618-7.42-19.418-4.803-4.8-10.914-7.2-18.553-7.2-7.64 0-13.75 2.4-18.771 7.2-4.802 4.8-7.203 11.345-7.203 19.418 0 8.073 2.401 14.618 7.203 19.418zm166.536-14.4v-59.563h32.74v109.09h-32.74v-10.254c-6.548 8.945-17.025 13.309-31.212 13.309-11.568 0-21.39-3.927-29.248-12-7.639-8.073-11.568-18.982-11.568-33.164v-66.981h32.74v62.181c0 12.873 7.858 19.855 18.989 19.855 12.441 0 20.299-7.636 20.299-22.473zm135.978-49.309V64.42h32.74v152.726h-32.74v-10.254c-7.64 8.945-18.552 13.309-32.521 13.309-14.406 0-26.628-5.455-36.887-16.582-10.258-11.127-15.278-24.873-15.278-41.018s5.02-29.673 15.278-40.8c10.259-11.127 22.481-16.8 36.887-16.8 13.969 0 24.882 4.364 32.521 13.31zm-44.744 63.71c4.802 4.8 11.131 7.2 18.77 7.2 7.64 0 13.97-2.4 18.771-7.2 4.802-4.8 7.203-11.346 7.203-19.419s-2.4-14.618-7.203-19.418c-4.801-4.8-11.131-7.2-18.77-7.2-7.64 0-13.97 2.4-18.771 7.2-4.802 4.8-7.203 11.345-7.203 19.418 0 8.073 2.401 14.618 7.203 19.418zM150.057 300C67.315 300 0 232.71 0 150S67.315 0 150.057 0v69.475c-44.42 0-80.556 36.123-80.556 80.525 0 44.403 36.136 80.525 80.556 80.525V300z"
        fill="#4F90FF"
      />
      <path fill="#87B3FF" d="M150.057 230.386h68.776v-68.75h-68.776z" />
      <path fill="#87B3FF" d="M218.264 163.386h68.776v-68.75h-68.776z" />
    </g>
  </svg>
)

export default CourseBud