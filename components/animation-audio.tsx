/** @jsxImportSource theme-ui */
import { keyframes } from '@emotion/react'

const pulse = keyframes`
  0% {
		transform: scaleY(1);
		transform-origin: 50% 50%;
	}
	
	50% {
		transform: scaleY(.64);
		transform-origin: 50% 50%;
	}
	
	100% {
		transform: scaleY(1);
		transform-origin: 50% 50%;
	}
`

interface Props {
  alt: string
}

const AudioAnimation = (props: Props) => {
  return (
    <svg 
      {...props}
      viewBox="0 0 18 16" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{props.alt}</title>

      <rect x="0.5" y="6" width="1" height="4" rx="0.5" fill="currentColor" 
        sx={{ 
          animation: `${pulse} 1.2s 0.16s linear infinite`
        }}
      />
      <rect x="4.5" y="4" width="1" height="8" rx="0.5" fill="currentColor" 
        sx={{ 
          animation: `${pulse} 1.2s 0.32s linear infinite`
        }}
      />
      <rect x="8.5" width="1" height="16" rx="0.5" fill="currentColor" 
        sx={{ 
          animation: `${pulse} 1.2s 0.48s linear infinite`
        }}
      />
      <rect x="12.5" y="4" width="1" height="8" rx="0.5" fill="currentColor" 
        sx={{ 
          animation: `${pulse} 1.2s 0.64s linear infinite`
        }}
      />
      <rect x="16.5" y="6" width="1" height="4" rx="0.5" fill="currentColor" 
        sx={{ 
          animation: `${pulse} 1.2s 0.72s linear infinite`
        }}
      />
    </svg>
  )
}

export { AudioAnimation }