import Background from "../components/UI/Background";
import SingleAccordion from "../components/SingleAccordion";
import {infoTab} from '../data'

function About() {

  return (
    <Background>
      <div className="container mx-auto px-4 max-w-2xl lg:max-w-4xl lg:px-12">
        <ul className="leading-5 text-slate-900">
          {infoTab.map((item) => {
            return <SingleAccordion key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </Background>
  );
}

export default About;
