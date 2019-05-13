Survey.StylesManager.applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
  title: "Friend Finder Questionnaire",
  pages: [
    {
      title: "Donald Trump is the worst president ever.",
      questions: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Question 1",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title:
        "Britney is better than Christina.",
      questions: [
        {
          type: "radiogroup",
          name: "question2",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Red wine is better than white wine.",
      questions: [
        {
          type: "radiogroup",
          name: "question3",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "The Godfather is the greatest movie of all time.",
      questions: [
        {
          type: "radiogroup",
          name: "question4",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "The Beatles are overrated.",
      questions: [
        {
          type: "radiogroup",
          name: "question5",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "I would rather be single than married.",
      questions: [
        {
          type: "radiogroup",
          name: "question6",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Tomato is a fruit.",
      questions: [
        {
          type: "radiogroup",
          name: "question7",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "I would rather be happy than rich.",
      questions: [
        {
          type: "radiogroup",
          name: "question8",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "U of A Bootcamp is awesome.",
      questions: [
        {
          type: "radiogroup",
          name: "question9",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "God is a software engineer.",
      questions: [
        {
          type: "radiogroup",
          name: "question10",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Please enter your name and a link to your photo!",
      questions: [
        {
          type: "text",
          name: "name",
          title: "Name:"
        },
        {
          type: "text",
          name: "photo",
          title: "Image link"
        }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  //result.data is the results object
  console.log(result.data);
  let scores = [
    result.data.question1,
    result.data.question2,
    result.data.question3,
    result.data.question4,
    result.data.question5,
    result.data.question6,
    result.data.question7,
    result.data.question8,
    result.data.question9,
    result.data.question10
  ];

  let userData = {
    name: result.data.name,
    photo: result.data.photo,
    scores: scores
  };

  $.post("/api/friends", userData, function(data) {
    console.log("data", data);

    $(".bffname").text(data.name);
    $(".bffphoto").attr("src", data.photo);
    $(".hiddenBtn").removeClass("hide");
  });
});

survey.showProgressBar = "bottom";
survey.completedHtml = "Thank you for answering the questions: Click now to meet your new friend."

$("#surveyElement").Survey({ model: survey });

$(".name").click(function() {
  window.location.href = "localhost";
});