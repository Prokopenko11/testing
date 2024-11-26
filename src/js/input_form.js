import Card from './card';

export default class InputForm {
  constructor() {
    this.inputElem = document.querySelector('.input-card-number');
    this.onInput = this.onInput.bind(this);
    this.inputElem.addEventListener('input', this.onInput);

    this.card = new Card();

    this.button = document.querySelector('.input-card-number-button');
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.button.addEventListener('click', this.buttonOnClick);
  }

  onInput(e) {
    e.preventDefault();
    this.card.resetCardType();
    this.card.addAllActiveClasses();

    const inputValue = this.inputElem.value;

    let checkedType = null;
    const firstDigitsArr = [1, 2, 3, 4, 6];

    for (const length of firstDigitsArr) {
      const firstDigits = Number(inputValue.slice(0, length));

      if (firstDigits) {
        checkedType = this.card.checkCardType(firstDigits);
        if (checkedType) {
          break;
        }
      }
    }

    if (checkedType) {
      this.card.addActiveClass(checkedType);
    }
  }

  buttonOnClick(e) {
    e.preventDefault();
    this.showCardValidity();
  }

  checkNumberValidity(cardNumber) {
    let sum = 0;
    const { length } = cardNumber;
    const parity = length % 2;

    for (let i = 0; i < length - 1; i += 1) {
      let digit = Number(cardNumber[i]);

      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
    }

    const calculatedLastDigit = (10 - (sum % 10)) % 10;

    return cardNumber[length - 1] == calculatedLastDigit;
  }

  showCardValidity() {
    const cardIsValid = this.checkNumberValidity(this.inputElem.value);
    const message = document.querySelector('.card-validity-message');

    if (cardIsValid) {
      message.textContent = 'Номер карты введен верно!';
    } else {
      message.textContent = 'Номер карты введен неверно!';
    }
  }
}
