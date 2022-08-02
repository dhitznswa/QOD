getQuotes();

function getQuotes() {
  $.get("https://api.quotable.io/random", (value) => {
    $(".quoteBox").text(value.content);
    $(".author").text("~ " + value.author);
  });
}

async function sound() {
  let strah = new SpeechSynthesisUtterance(
    $(".quoteBox").text() + " by " + $(".author").text()
  );
  speechSynthesis.speak(strah);
}

function copyText() {
  navigator.clipboard.writeText($(".quoteBox").text());
  alert("Success !");
}
