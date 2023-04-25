import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ILinkProps extends AnchorHTMLAttributes<HTMLElement> {
  variant: 'gray' | 'green'
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
      text-xl transition-all duration-150
      ${variant === 'gray' && 'text-gray-500 hover:text-green-700'}
      ${variant === 'green' && 'text-green-500  hover:text-green-700'}
      ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
