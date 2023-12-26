import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // Set the view engine

app.get("/", (req, res) => {
  res.render("index.ejs");
});

let adjIndex = 0;
let nounIndex = 0;

app.post("/submit", (req, res) => {
  const selectedAdj = adj[adjIndex % adj.length];
  const selectedNoun = noun[nounIndex % noun.length];

  adjIndex++;
  nounIndex++;

  res.render("index.ejs", {
    adjective: selectedAdj,
    noun: selectedNoun,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "Mumbai",
  "Pune",
  "Thane",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Solapur",
  "Amravati",
  "Nanded",
  "Kolhapur",
  "Sangli",
  "Jalgaon",
  "Akola",
  "Latur",
  "Dhule",
  "Ahmednagar",
  "Raigad",
  "Jalna",
  "Parbhani",
  "Beed",
  "Satara",
  "Osmanabad",
  "Nandurbar",
  "Wardha",
  "Yavatmal",
  "Chandrapur",
  "Gondia",
  "Bhandara",
  "Washim",
  "Hingoli",
  "Gadchiroli",
  "Sindhudurg",
  "Buldhana",
  "Ratnagiri",
  "Palghar",
  "Kolhapur",
  "Mumbai Suburban"
];

const noun = [
  "Meteors 🌠",
  "Pioneers 🚀",
  "Thunder ⚡",
  "Ninjas 🥷",
  "Nebulae 💫",
  "Aces ♠️",
  "Specters 👻",
  "Avengers ⚔️",
  "Nomads 🏕️",
  "Knights ⚔️",
  "Rangers 🌲",
  "Storms 🌩️",
  "Gladiators ⚔️",
  "Dragons 🐉",
  "Titans 🏛️",
  "Ravens 🦅",
  "Warriors ⚔️",
  "Phoenixes 🔥",
  "Vipers 🐍",
  "Jaguars 🐆",
  "Tigers 🐅",
  "Eagles 🦅",
  "Panthers 🐆",
  "Cobras 🐍",
  "Scorpions 🦂",
  "Leopards 🐆",
  "Wolves 🐺",
  "Bears 🐻",
  "Lions 🦁",
  "Cheetahs 🐆",
  "Hyenas 🐾",
  "Foxes 🦊",
  "Wildcats 🐾",
  "Falcons 🦅",
  "Bulls 🐂",
  "Hawks 🦅",
  "Lynx 🐆"
];
