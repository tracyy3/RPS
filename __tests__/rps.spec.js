const { hands, player1, player2, getHand } = require("./index");

// 'toBe()'
describe("Johnnie Walker", () => {
test("player1", () => {
    expect(player1.name).toBe("Johnnie Walker");
  });
});

//'toHaveLength()'
test(" Captain Morgan, on board!", () => {
  const hands = ["rock", "paper", "scissors"];
  expect(hands).toHaveLength(3);
});

//'toBeTruthy()'
test("Walk with Johnnie Walker", () => {
  var player1 = {
    Name: "Johnnie Walker",
  };
  expect(player1.Name == "Johnnie Walker").toBeTruthy();
});

//'toHaveBeenCalled()'
test("lets jump for no reason", () => {
  let num = 13;
  for (let i = 3; i < num; i++) {
    if (num % i == 0) {
      return console.log("no thank you");
    } else {
      return console.log("jump");
    }
  }
  expect("jump").toHaveBeenCalled();
});

//'toHaveReturned()'
test("lets jump for no reason", () => {
  let num = 13;
  for (let i = 3; i < num; i++) {
    if (num % i == 0) {
      return console.log("no thank you");
    } else {
      return console.log("jump");
    }
  }
  expect("jump").toHaveReturned();
});
