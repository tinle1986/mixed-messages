const messages = [
  "A blessing in disguise",
  "A dime a dozen",
  "Beat around the bush",
  "Better late than never",
  "Bite the bullet",
  "Break a leg",
  "Call it a day",
  "Cut somebody some slack",
  "Cutting corners",
  "Easy does it"
]

const randomMessage = messages => messages[Math.floor(Math.random() * 10)];

console.log(randomMessage(messages));
