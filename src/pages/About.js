import Background from "../components/UI/Background";
import SingleAccordion from "../components/SingleAccordion";

function About() {
  const infoTab = [
    {
      id: 1,
      title: "Technologies",
      text: "React, React Router, Axios, Tailwind.",
    },
    {
      id: 2,
      title: "Goals",
      text: "This project was made following to React Tutorial Course by John Smilga on Udemy. Main goals were to use React router with shared routes and Axios library. Design ideas from Tailwind css.",
    },
    { id: 3, title: "API", text: "Data loads from randomuser.me Api." },
  ];

  return (
    <Background>
      <div className="container mx-auto px-4 max-w-2xl lg:max-w-4xl lg:px-12">
        <ul className="leading-5  text-slate-900">
          {infoTab.map((item) => {
            return <SingleAccordion key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </Background>
  );
}

export default About;
