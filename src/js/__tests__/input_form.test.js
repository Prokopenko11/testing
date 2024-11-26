import InputForm from '../input_form';

describe('input form', () => {
  let inputForm;

  beforeEach(() => {
    document.body.innerHTML = `
      <input class="input-card-number">
      <button class="input-card-number-button"></button>
    `;
    const inputFormElem = document.querySelector('.input-card-number');
    inputForm = new InputForm(inputFormElem);
  });

  test('checkNumberValidity method should return true if card number is valid', () => {
    const validCardNumber = '371449635398431';
    const result = inputForm.checkNumberValidity(validCardNumber);
    expect(result).toBe(true);
  });

  test('checkNumberValidity method should return false if card number is not valid', () => {
    const invalidCardNumber = '3714496353984';
    const result = inputForm.checkNumberValidity(invalidCardNumber);
    expect(result).toBe(false);
  });
});
