import './input.scss'
type Props = {
 className ?: string ,
 type ?: string,
 name ?: string,
 placeholder ?: string
}

export default function Input(props : Props) {
  return (
    <input className={props?.className} type={props?.type} name={props?.name} placeholder={props?.placeholder} />
  );
}
  