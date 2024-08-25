
import Image from 'next/image';
import './main_product_box.scss'
type Props = {
    image: string,
    name: string,
    price: number
}
export default function MainProductBox(props: Props) {
  return (
   <div className='main_product_box'>
        <Image src={props.image} alt={props.name} width={150} height={150} />
        <p>{props.name}</p>
        <p>{props.price} تومان</p>
   </div>
  );
}
  
