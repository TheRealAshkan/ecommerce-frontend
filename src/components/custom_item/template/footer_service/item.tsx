import Image from "next/image";

type Props = {
    title : string,
    image : string
}
export default function ServiceItem(props:Props) {
  return (
   <div className='service_item'>
        <Image src={props.image} alt={props.title} width={150} height={150} />
        <p>{props.title}</p>
   </div>
  );
}
  
