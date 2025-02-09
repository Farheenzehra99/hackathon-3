'use lient'

import Offers from "./components/Offers";
import Unique from "./components/unique";
import TrendingProducts from "./components/TrendingProduct"
import Newslater from "./components/Newslater";
import HeroSection from "./components/ui/Hero";
import Discount from "./components/Discount";
import {FeaturedProducts} from "./components/FeaturedProducts";
import { TopCategories}  from "./components/TopCategories";
import LatestProducts from "./components/LatestProducts";
import Latestblog from "./components/latestblog";

function Homepage(){
  return(
    <div>
      <HeroSection />
      <FeaturedProducts/>
      <Offers />
      <Unique />
      <LatestProducts />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <Latestblog/>
    </div>
  )
}

export default Homepage;