import './button.scss'

export default function Button(
{
    children,
    className,
    type,
    onClick
}: Readonly<{
    children: React.ReactNode;
    className: string;
    type ?: 'submit' | 'button'
    onClick ?: any
}> 
) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
  