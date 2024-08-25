import Image from "next/image";

type Props = {
    title : string
}
export default function FooterItem(props:Props) {
  return (
   <li className='menu_item'>
        {props.title}
   </li>
  );
}
  
