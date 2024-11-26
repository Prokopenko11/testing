import puppeteer from 'puppeteer';

describe('Card validation tests', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Valid card number should display success message', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.input-card-number-form');

    const input = await form.$('.input-card-number');
    await input.type('371449635398431');

    const button = await form.$('.input-card-number-button');
    await button.click();

    await page.waitForSelector('.card-validity-message');

    const message = await page.$eval('.card-validity-message', (el) => el.textContent);
    expect(message).toBe('Номер карты введен верно!');
  });

  test('Invalid card number should display error message', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.input-card-number-form');

    const input = await form.$('.input-card-number');
    await input.type('3714496353984');

    const button = await form.$('.input-card-number-button');
    await button.click();

    await page.waitForSelector('.card-validity-message');

    const message = await page.$eval('.card-validity-message', (el) => el.textContent);
    expect(message).toBe('Номер карты введен неверно!');
  });

  afterEach(async () => {
    await browser.close();
  });
});
