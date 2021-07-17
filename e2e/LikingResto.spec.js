const assert = require('assert');

Feature('LikingResto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty resto', ({ I }) => {
  I.seeElement('#restos');
  I.see('Kamu belum memilih resto favoritmu.', '.resto_empty');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('.title a');

  const firstResto = locate('.title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
  const likedRestoName = await I.grabTextFrom('.title');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking resto', async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('.title a');

  const firstResto = locate('.title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
  const likedRestoName = await I.grabTextFrom('.title');

  assert.strictEqual(firstRestoName, likedRestoName);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
  I.see('Kamu belum memilih resto favoritmu.', '.resto_empty');
});

Scenario('filling review', async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('.title a');

  const firstResto = locate('.title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('.form-review');

  const textReview = 'resto yang bagus';
  I.fillField('inputName', 'e2e tester');
  I.fillField('inputReview', textReview);
  I.click('#submit-review');

  const lastReview = locate('.resto_review-item_reviewers').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});

Scenario('liking 3 resto and filling the review', async ({ I }) => {
  I.see('Kamu belum memilih resto favoritmu.', '.resto_empty');
  I.amOnPage('/#/home');

  I.seeElement('.title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.title a').at(i));
    I.seeElement('.form-review');

    const textReview = 'resto yang bagus';
    I.fillField('inputName', 'e2e tester');
    I.fillField('inputReview', textReview);
    I.click('#submit-review');

    const lastReview = locate('.resto_review-item_reviewers').last();
    const textLastReview = await I.grabTextFrom(lastReview);

    assert.strictEqual(textReview, textLastReview);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.resto_title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#restos');
});
