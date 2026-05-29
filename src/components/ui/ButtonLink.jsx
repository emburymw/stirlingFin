/**
 * @param {'primary' | 'secondary'} variant
 */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  ...rest
}) {
  const className = ['btn', variant === 'secondary' && 'btn-secondary']
    .filter(Boolean)
    .join(' ')
  return (
    <a className={className} href={href} {...rest}>
      {children}
    </a>
  )
}
