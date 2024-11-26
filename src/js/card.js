export default class Card {
  constructor() {
    this.currentCardType = null;

    this.cards = document.querySelectorAll('.cards-item');
  }

  checkCardType(value) {
    let cardType = null;

    if (value === 34 || value === 37) {
      cardType = 'american-express';
    } else if ((value >= 300 && value <= 305) || value === 36 || value === 38) {
      cardType = 'diners-club';
    } else if (value === 6011 || (value >= 622126 && value <= 622925)
      || (value >= 644 && value <= 649) || value === 65) {
      cardType = 'discover';
    } else if (value >= 3528 && value <= 3589) {
      cardType = 'jcb';
    } else if ((value >= 51 && value <= 55) || (value >= 2221 && value <= 2720)) {
      cardType = 'mastercard';
    } else if (value === 4) {
      cardType = 'visa';
    } else if (value >= 2200 && value <= 2204) {
      cardType = 'mir';
    }

    if (!this.currentCardType && cardType) {
      this.currentCardType = cardType;
      this.removeAllActiveClasses();
      this.addActiveClass(this.currentCardType);
    }

    return this.currentCardType;
  }

  resetCardType() {
    this.currentCardType = null;
  }

  selectCardClass(value) {
    const selectedCard = this.checkCardType(value);
    const selectedCardElem = document.querySelector(`.${selectedCard}`);

    return selectedCardElem;
  }

  addActiveClass(value) {
    const selectedCardClass = this.selectCardClass(value);

    if (selectedCardClass) {
      selectedCardClass.classList.add('active');
    }
  }

  removeAllActiveClasses() {
    this.cards.forEach((card) => {
      card.classList.remove('active');
    });
  }

  addAllActiveClasses() {
    this.cards.forEach((card) => {
      card.classList.add('active');
    });
  }
}
