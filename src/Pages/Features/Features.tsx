import FeatureBanner from "../../components/FeatureBanner/FeatureBanner";
import FeaturedCards from "../../components/FeaturedCards/FeaturedCards";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";

const Features = () => {
  return (
    <div className="mt-20 lg:px-28 px-4 lg:py-6 py-4 text-white space-y-8">
      <FeatureBanner />
      <FeaturedVideo />
      <FeaturedCards />
    </div>
  );
};

export default Features;
