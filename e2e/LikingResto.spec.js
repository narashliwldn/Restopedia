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

  const lastReview = locate('.content-card').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
