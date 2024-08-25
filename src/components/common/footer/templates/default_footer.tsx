import Copyright from "../copyright";
import Logo from "../../logo";
import Newsletter from "@/components/newsletter";
import FooterMenu from "../footer_menu";
import FooterNamads from "../footer_namads";
import './default_footer.scss'
export default function DefaultFooter() {
    return (
      <footer className="main_footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4"><Logo /></div>
            <div className="col-sm-12 col-md-4">fd</div>
            <div className="col-sm-12 col-md-4">fd</div>
          </div>
          
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  {/* <FooterMenu title="دسته‌بندی کالا‌ها" menu_items={[
                    'لپ تاپ و قطعات',
                    'لپ تاپ و قطعات',
                    'لپ تاپ و قطعات',
                    'لپ تاپ و قطعات',
                  ]} /> */}
                </div>
                <div className="col-sm-12 col-md-6">
                  {/* <FooterMenu title="همراه با ما" menu_items={[
                      'درخواست نمایندگی فروش',
                      'درخواست نمایندگی فروش',
                      'درخواست نمایندگی فروش', */}
                    {/* ]} /> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4"><Newsletter /></div>
            <div className="col-sm-12 col-md-3"><FooterNamads /></div>
          </div>

          
        </div>
        <Copyright />
      </footer>
    );
  }
  