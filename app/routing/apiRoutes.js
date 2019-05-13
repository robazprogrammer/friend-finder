let friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body.scores", req.body);

    let scoreArr = [];
    let friendIndex = 0;

    friendData.forEach(function(friend) {
      let scoreDifference = 0;
      for (let i = 0; i < friendData.length; i++) {
        scoreDifference += Math.abs(
          parseInt(friend.scores[i]) - parseInt(req.body.scores[i])
        );
      }

      scoreArr.push(scoreDifference);
    });

    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] <= scoreArr[friendIndex]) friendIndex = i;
    }

    let newFriend = friendData[friendIndex];
    console.log("scoresdifference", scoreArr);

    friendData.push(req.body);
    res.json(newFriend);
  });
};