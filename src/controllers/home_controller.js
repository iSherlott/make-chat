const rooms = require("../helpers/rooms_helper");

let typeArray = [
  {
    nameuser: "Sherlott",
    text:
      "This is just a text demonstrating how the final exhibition will look",
    time: 1611009116691,
  },
  {
    nameuser: "Eder",
    text: "Hello",
    time: 1611009116641,
  },
  {
    nameuser: "Sherlott",
    text: "Hello, how are you?",
    time: 1611009116651,
  },
  {
    nameuser: "Eder",
    text: "Fine, U?",
    time: 1611009116661,
  },
  {
    nameuser: "Sherlott",
    text: "Me too",
    time: 1611009116691,
  },
];

exports.home = (req, res) => {
  res.render("home", {
    style: "css/styleHome.css",
    title: "Home",
  });
};

exports.chat = async (req, res) => {
  const room = await rooms;

  res.render("chat", {
    user: req.body.user,
    style: "css/style.css",
    title: "Chat",
    array: typeArray,
    helpers: require("../helpers/if_handlebarsHelpers"),
    room: room,
  });
};
