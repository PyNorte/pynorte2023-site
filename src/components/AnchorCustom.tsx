import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ILinkProps extends AnchorHTMLAttributes<HTMLElement> {
  variant: 'gray'
  children: ReactNode
}

export const AnchorCustom = ({
  variant = 'gray',
  children,
  ...rest
}: ILinkProps) => {
  return (
    <a
      className={`${
        variant === 'gray' &&
        'text-gray-500 text-xl transition-all hover:text-green-700'
      }`}
      {...rest}
    >
      {children}
    </a>
  )
}
