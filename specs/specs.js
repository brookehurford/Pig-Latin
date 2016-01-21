describe ('pigLatin', function () {
  it("Words that start with a vowel add 'ay' to the end", function() {
    expect(pigLatin("owl")).to.equal("owlay")
  });
  
  it("Words that start with consonant, move first letter to the end at adds 'ay'", function() {
    expect(pigLatin("cat")).to.equal("atcay")
  });

  it("Words that start with two consonants, move both letters to end and add 'ay'", function() {
    expect(pigLatin("dragon")).to.equal("agondray");
  });

  it("Words that start with 'q' and 'u', move both letters to end and add 'ay'", function() {
    expect(pigLatin("quite")).to.equal("itequay");
  });

  it("Words that start with 'y', move first letter to end and add 'ay'", function() {
    expect(pigLatin("yellow")).to.equal("ellowyay");
  });
});
