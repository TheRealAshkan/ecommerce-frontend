import { HiOutlineSearch } from "react-icons/hi";

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import './index.scss'
export default function Search() {
  return (
    <div className="main_search">
        <Input className='input_search' placeholder="کلمه مورد نظر را اینجا تایپ کنید..."/>
        <Button className="btn-secondary btn-search">
          <HiOutlineSearch />
        </Button>
    </div>
  );
}
  