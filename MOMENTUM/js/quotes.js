const quotes = [
{quote:"대충 흑백사진에 글쓰면 명언같다.",
author:"침착맨",
},
{quote:"승리는 가장 끈기있는 자에게 돌아간다.",
author:"Napoleon Bonaparte (나폴레옹 보나파르트, 프랑스, 황제)",
},
{quote:"불행은 누가 진정한 친구가 아닌지를 보여준다.",
author:"Aristotle (아리스토텔레스, 그리스, 비평가)",
},
{quote:"시간 엄수는 비즈니스의 영혼이다.",
author:"Thomas Halyburton (토마스 할리버튼)",
},
{quote:"여행은 되돌아 보았을 때에만 매력적이다.",
author:"폴 서룩스",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` -${todaysQuote.author}-`;