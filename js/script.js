let scoreL = 0;
let scoreW = 0;
$(".play").click(function() {
  let random = Math.random() * 3;
  let number = Math.ceil(random);
  let choice = $("input").val();
  $(".userChoice").text(`${choice}`);
function computerChoice(x) {
  $(".result").text(`you ${x}`);
  if (x === "lose"){
      scoreL = scoreL + 1;
    $(".loses").text(`Loses: ${scoreL}`);
}
  else if ( x === "win"){
      scoreW = scoreW + 1;
    $(".wins").text(`Wins: ${scoreW}`);
  }
}


  /* scissor */
  if (number === 1) {
    $(".computerChoice").text("scissor");
    if (choice === "rock") {
      computerChoice("win")
    } else if (choice === "scissor") {
      $(".result").text(`tie`);
    } else if (choice === "paper") {
      computerChoice("lose")
    }
  }
  /* paper */
  if (number === 2) {
    $(".computerChoice").text("paper");
    if (choice === "scissor") {
      computerChoice("win")
    } else if (choice === "paper") {
      $(".result").text(`tie`);
    } else if (choice === "rock") {
      computerChoice("lose");

    }
  }
  /* rock */
  if (number === 3) {
    $(".computerChoice").text("rock");
    if (choice === "paper") {
      computerChoice("win")
    } else if (choice === "rock") {
      $(".result").text(`tie`);
    } else if (choice === "scissor") {
      computerChoice("lose")
    }
  }
  if (choice === "") {
    $(".result").text(
      `It looks like the answer field is empty! Please type your answer to the box above to play.`
    );
  $(".computerChoice").text("");
      $(".userChoice").text(``);
  }
    if (choice !== "rock"  && choice !== "paper" && choice !== "scissor" && choice !== "") {
    $(".result").text(
      `It looks like your answer wasn't an option. Please chose "rock", "scissor" or "paper". `
    );
 $(".computerChoice").text("");
      $(".userChoice").text(``);
  }
  console.log(number);
});

