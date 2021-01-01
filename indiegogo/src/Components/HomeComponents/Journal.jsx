import React from "react";

const cardData = [
  {
    img:
      "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1605119805/iahmuiilxlnem2wwzluy.jpg",
    head: "The All-New Electric Gokart, Powered by Segway",
    content:
      "Segway-Ninebot has delighted Indiegogo backers over the years with a slew of amazing projects... ",
  },
  {
    img:
      "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1606774722/n9lpogm20jyxmytmqmi7.jpg",
    head: "The Story of the Million Dollar UFO ",
    content:
      "The Flynova Pro is a toy that’s so out of this world, you’ll think it was from, well, out of this world... ",
  },
  {
    img:
      "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1596606703/hh66nqbltz5joqfvegza.png",
    head: "Get Moving with Move It Swift",
    content:
      "Learn more about the team behind the smart boxing gloves that will change your workout routine ",
  },
];


const Card = () => {
  return (
    <div style={{ dispaly: "flex", flexDirection: "row" }}>
      {cardData.map((item, i) => (
        <div key={i}>
          <img src={item.img} alt="cardImg" height="200px" width="300px" />
          <div style={{ fontSize: "20px" }}>{item.head}</div>
          <div style={{ fontSize: "20px" }}>{item.content}</div>
          <div>READ MORE</div>
        </div>
      ))}
    </div>
  );
};

const Journal = () => {
  return (
    <div>
      <div style={{ fontSize: "30px" }}>From the Journal </div>
      <div style={{ fontSize: "20px" }}>
        Your behind-the-scenes view of the people and stories behind Indiegogo
        projects
      </div>
      <Card />
    </div>
  );
};

export { Journal };
