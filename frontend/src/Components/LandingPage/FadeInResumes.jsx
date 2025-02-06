import FadeInWhenVisible from "../../Components/UI/FadeInView";
import Harvard from "../../assets/templates/Harvard.jpg";
const FadeInResumes = () => {
  return (
    <div className="flex flex-row m-8 items-center">
      <div className="flex">
        <FadeInWhenVisible duration={0.3}>
          <img src={Harvard} width="200px" />
        </FadeInWhenVisible>
      </div>
      <div className="p-2">
        <FadeInWhenVisible duration={0.7}>
          <img src={Harvard} width="300px" />
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible duration={1}>
        <img src={Harvard} width="200px" />
      </FadeInWhenVisible>
    </div>
  );
};

export default FadeInResumes;
