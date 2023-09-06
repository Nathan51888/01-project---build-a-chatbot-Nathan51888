// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("Bot is properly addressing the user based on the input name", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello Jack, would you like to use Chicken as the main ingredient for tonight's dinner?";

    expect(botReply1).toEqual(expectedReply1);
  });

  it("check for edge case", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("yEaH");
    const expectedReply1 = "Do you like pies?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("nOpE");
    const expectedReply2 = "Do you like pasta?";

    expect(botReply2).toEqual(expectedReply2);
  });

  it("Yes, yes route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("Yes");
    const expectedReply1 = "Do you like pies?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("Yes");
    const expectedReply2 = "How about a Chicken Pot Pie for tonight?";

    expect(botReply2).toEqual(expectedReply2);
  });

  it("Yes, no, yes route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("Yes");
    const expectedReply1 = "Do you like pies?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("No");
    const expectedReply2 = "Do you like pasta?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Yes");
    const expectedReply3 = "How about a Chicken Pesto Pasta for tonight?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("Yes, no, no route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("Yes");
    const expectedReply1 = "Do you like pies?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("No");
    const expectedReply2 = "Do you like pasta?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("No");
    const expectedReply3 = "How about a Chicken Strognaoff for tonight?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("No, yes, yes route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("No");
    const expectedReply1 = "Would you like to use Beef instead?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("Yes");
    const expectedReply2 = "Do you like pasta?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Yes");
    const expectedReply3 = "How about a Spaghetti Bolognese for tonight?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("No, no, yes route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("No");
    const expectedReply1 = "Would you like to use Beef instead?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("No");
    const expectedReply2 = "Pork?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Yes");
    const expectedReply3 =
      "How about a Macadamia- crumbed pork schnitze for tonight?";

    expect(botReply3).toEqual(expectedReply3);
  });

  it("All no route", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("No");
    const expectedReply1 = "Would you like to use Beef instead?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("No");
    const expectedReply2 = "Pork?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("No");
    const expectedReply3 = "Do you like anything in life?";

    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("No");
    const expectedReply4 = `Jack, get some help.`;

    expect(botReply4).toEqual(expectedReply4);
  });

  it("Invalid answer", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("ljwa");
    const expectedReply1 =
      "I couldn't understand your reply, try answering 'yes' or 'no' in english.";

    expect(botReply1).toEqual(expectedReply1);
  });

  it("Restart", () => {
    getBotReply("Jack");

    const botReply1 = getBotReply("Yes");
    const expectedReply1 = "Do you like pies?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("Restart");
    const expectedReply2 = "What is your name?";

    expect(botReply2).toEqual(expectedReply2);
  });
});
