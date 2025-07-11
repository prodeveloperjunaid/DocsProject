import React from "react";
import Card from "./Card";

const Forground = () => {
  const ref= React.useRef(null);
  const data = [
    {
      Icon: "FaRegFileAlt",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      closeDownload: "Download Now",
      tagdetails: "tag1, tag2",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now", 
        tagColor: "bg-green-700",
      },
    },
     {
      Icon: "FaRegFileAlt",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      closeDownload: "Download Now",
      tagdetails: "tag1, tag2",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now", 
        tagColor: "bg-green-700",
      },
    },
     {
      Icon: "FaRegFileAlt",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      closeDownload: "Download Now",
      tagdetails: "tag1, tag2",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now", 
        tagColor: "bg-green-700",
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex  gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Forground;
