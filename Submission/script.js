/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let userName;
let questionLevel = 0;
let questionNum;
const userAffirmative = ["yes", "yeah", "yep"];
const userDissagree = ["no", "nah", "nope"];

const getBotReply = (msg) => {
  let isAffirmative;
  const userAnswerLowerCase = msg.toLowerCase();
  if (userAffirmative.includes(userAnswerLowerCase)) {
    isAffirmative = true;
  } else if (userDissagree.includes(userAnswerLowerCase)) {
    isAffirmative = false;
  }

  if (userAnswerLowerCase === "restart") {
    questionLevel = -1;
    userName = null;
    questionNum = null;
  }

  switch (questionLevel) {
    case -1:
      questionLevel = 0;
      return "What is your name?";

    case 0:
      userName = msg;
      questionLevel = 1;
      return `Hello ${userName}, would you like to use Chicken as the main ingredient for tonight's dinner?`;

    case 1:
      if (isAffirmative === true) {
        questionLevel = 2;
        questionNum = 1;
        return "Do you like pies?";
      }
      if (isAffirmative === false) {
        questionLevel = 2;
        questionNum = 2;
        return "Would you like to use Beef instead?";
      }
      break;

    case 2:
      if (questionNum === 1) {
        if (isAffirmative === true) {
          return "How about a Chicken Pot Pie for tonight?";
        }
        if (isAffirmative === false) {
          questionLevel = 3;
          questionNum = 1;
          return "Do you like pasta?";
        }
      }
      if (questionNum === 2) {
        if (isAffirmative === true) {
          questionLevel = 3;
          questionNum = 2;
          return "Do you like pasta?";
        }
        if (isAffirmative === false) {
          questionLevel = 3;
          questionNum = 3;
          return "Pork?";
        }
      }
      break;

    case 3:
      if (questionNum === 1) {
        if (isAffirmative === true) {
          return "How about a Chicken Pesto Pasta for tonight?";
        }
        if (isAffirmative === false) {
          return "How about a Chicken Strognaoff for tonight?";
        }
      }
      if (questionNum === 2) {
        if (isAffirmative === true) {
          return "How about a Spaghetti Bolognese for tonight?";
        }
        if (isAffirmative === false) {
          return "Please take that back...";
        }
      }
      if (questionNum === 3) {
        if (isAffirmative === true) {
          return "How about a Macadamia- crumbed pork schnitze for tonight?";
        }
        if (isAffirmative === false) {
          questionLevel = 4;
          return "Do you like anything in life?";
        }
      }
      break;

    case 4:
      if (isAffirmative === true) {
        return "Understandable, have a nice day.";
      }
      if (isAffirmative === false) {
        return `${userName}, get some help.`;
      }
      break;
  }
  return "I couldn't understand your reply, try answering 'yes' or 'no' in english.";
};

export { getBotReply };
