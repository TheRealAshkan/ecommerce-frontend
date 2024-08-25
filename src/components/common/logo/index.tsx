import Image from "next/image";
import Link from "next/link";
import './logo.scss'

export default function Logo() {
  return (
    <Link href={'/'} className="website_logo">
        <Image src="/logo.png" alt="اپن کارت 4" width={200} height={42} />
    </Link>
  );
}
  