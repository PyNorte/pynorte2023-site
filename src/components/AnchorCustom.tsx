import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ILinkProps extends AnchorHTMLAttributes<HTMLElement> {
  variant: 'gray' | 'green' | 'white'
  children: ReactNode
}

export function AnchorCustom({
  variant = 'gray',
  children,
  className,
  ...rest
}: ILinkProps) {
  return (
    <a
      className={`
      text-md transition-all duration-150
      ${variant === 'gray' && 'text-gray-400 hover:text-green-500'}
      ${variant === 'green' && 'text-green-500  hover:text-green-700'}
      ${variant === 'white' && 'text-white  hover:text-green-500'}
      ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
