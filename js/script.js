const btnQoute = document.getElementById("newQoute");
const qouteP = document.getElementById("qoute");
const autherP = document.getElementById("auther");
const quotes = [
  {
    auther: "- Oscar Wilde",
    qoute: "Be yourself; everyone else is already taken.",
  },
  {
    auther: " - Steve Jobs",
    qoute: "The only way to do great work is to love what you do.",
  },
  {
    auther: " - Robert Frost",
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    auther: "- Eleanor Roosevelt",
    qoute:
      "The future belongs to those who believe in the beauty of their dreams. ",
  },
  {
    auther: "- Winston Churchill",
    qoute:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
];

btnQoute.addEventListener("click", function () {
  getQoute();
});
function getQoute() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  qouteP.innerHTML = randomQuote.qoute;
  autherP.innerHTML = randomQuote.auther;
}
