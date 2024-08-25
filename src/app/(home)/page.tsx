import CategorySlider from "@/components/category/category_slider";
import HomeSlider from "@/components/home/home_slider";
import CustomItem from "@/components/custom_item";
import SpecialSlider from "@/components/product/special_slider";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HomeSlider />
      <CustomItem template="main_service" />
      <CategorySlider />
      <SpecialSlider />
    </MainLayout>
  );
}
