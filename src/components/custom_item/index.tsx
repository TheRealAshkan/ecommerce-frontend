'use client'
import FooterService from './template/footer_service';
import MainService from './template/main_service';

type Props = {
    template: string
}
export default function CustomItem(props: Props) {
    switch(props.template) {
        case 'main_service' :
            return <MainService />
            break;
        case 'footer_service' :
            return <FooterService />
            break;
    }
}
  
