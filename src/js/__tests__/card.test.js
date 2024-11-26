import Card from '../card';

describe('detect card type', () => {
  let card;

  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="cards-list">
        <li class="cards-item visa active"></li>
        <li class="cards-item mastercard active"></li>
        <li class="cards-item american-express active"></li>
        <li class="cards-item diners-club active"></li>
        <li class="cards-item mir active"></li>
        <li class="cards-item jcb active"></li>
        <li class="cards-item discover active"></li>
      </ul>
    `;

    card = new Card();
  });

  test.each([
    [34, 'american-express'],
    [304, 'diners-club'],
    [622126, 'discover'],
    [3529, 'jcb'],
    [2221, 'mastercard'],
    [4, 'visa'],
    [2203, 'mir'],
  ])(
    ('should return cardType with number %s at the beginning'),
    (numbers, expected) => {
      const result = card.checkCardType(numbers);
      expect(result).toBe(expected);
    },
  );
});
