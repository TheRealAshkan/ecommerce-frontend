import './flex.scss'

export default function Flex(
{
    children,
    className
}: Readonly<{
    children: React.ReactNode;
    className: string;
}> 
) {
  return (
    <div className={`div_flex ${className}`}>
      {children}
    </div>
  );
}
  