import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "123414321",
      label: "React",
      content:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    },
    {
      id: "21231231",
      label: "Javascript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.",
    },
    {
      id: "34233243",
      label: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
