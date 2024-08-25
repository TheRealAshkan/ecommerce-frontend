import './index.scss'
import Input from "../ui/input";
import Button from "../ui/button";
export default function Newsletter() {
    return (
        <div className="newsletter">
          <Input />
          <Button className='btn-danger'>
            ثبت نام
          </Button>
        </div>
    );
  }
  