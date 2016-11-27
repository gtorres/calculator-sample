describe('calculator model', function () {

  beforeEach(function () {
    this.calculator = new Calculator();
  });

  it('should add numbers', function () {
    console.log(this.calculator.add(Infinity, NaN));
    console.log(this.calculator.add(2, 3));

    expect(this.calculator.add(2, 2)).toBe(4);
  });

  it('should throw error when dividing by zero', function () {
    var calculator = this.calculator;

    expect(function () {
      calculator.divide(1, 0);
    }).toThrow();

    // console.log(this.calculator.divide(2, 0));
    console.log(this.calculator.divide(0, 2));
    console.log(this.calculator.divide(2, -3));
  });

  it('should divide number', function () {
    expect(this.calculator.divide(6, 2)).toBe(3);
  });

  it('should subtract positive numbers', function () {
    expect(this.calculator.subtract(4, 2)).toBe(2);
  });

  it('should multiply numbers', function () {
    expect(this.calculator.multiply(0, 3)).toBe(0);
    expect(this.calculator.multiply(3, 0)).toBe(0);
  });
});

describe('calculator view', function () {

  beforeEach(function () {
    $('body').append("<div id=\"calculator\"/>");
    $('#calculator').html(calculatorTemplate);
    initCalculator();
  });

  afterEach(function () {
    $('#calculator').remove();
  });

  it('should add numbers', function () {

    console.log(window.document.body.clientHeight);

    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('16');
  });

  it('should divide numbers', function () {
    $('#6').click();
    $('#divide').click();
    $('#3').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('2');
  });

  it('should multiply numbers', function () {
    $('#7').click();
    $('#multiply').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('56');
  });

  it('should subtract numbers', function () {
    $('#7').click();
    $('#minus').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('-1');
  });

  it('should show 7 on screen', function () {
    $('#7').click()

    expect($('.screen').text()).toBe('7');
  });

  it('should show - on screen', function () {
    $('#minus').click();

    expect($('.screen').text()).toBe('-');
  });

  it('should show -7 on screen', function () {
    $('#minus').click();
    $('#7').click();

    expect($('.screen').text()).toBe('-7');
  });

  it('should show + on screen', function () {
    $('#6').click();
    $('#plus').click();

    expect($('.screen').text()).toBe('6+');
  });

  it('should not show double + on screen', function () {
    $('#4').click();
    $('#plus').click();
    $('#plus').click();

    expect($('.screen').text()).toBe('4+');
  });

  it('should show 3 + 12 on screen', function () {
    $('#4').click();
    $('#plus').click();
    $('#plus').click();

    expect($('.screen').text()).toBe('4+');
  });

  it('should show 3 + 1 on screen', function () {
    $('#3').click();
    $('#plus').click();
    $('#1').click();

    expect($('.screen').text()).toBe('3+1');
  });

  it('should show 7 + 0 on screen', function () {
    $('#7').click();
    $('#plus').click();
    $('#0').click();

    expect($('.screen').text()).toBe('7+0');
  });

  it('should add 7 and 0', function () {
    $('#7').click();
    $('#plus').click();
    $('#0').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('7');
  });

  it('should add 7 and 9', function () {
    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toEqual('16');
  });

  it('should add -7 and 9', function () {
    $('#minus').click();
    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toEqual('2');
  });

  it('should add -9 and 7', function () {
    $('#minus').click();
    $('#9').click();
    $('#plus').click();
    $('#7').click();
    $('#eval').click();

    expect($('.screen').text()).toEqual('-2');
  });

  it('should add 10 and 29', function () {
    $('#1').click();
    $('#0').click();
    $('#plus').click();
    $('#2').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('39');
  });

  it('should show 6/', function () {
    $('#6').click();
    $('#divide').click();

    expect($('.screen').text()).toBe('6÷');
  });

  it('should subtract 7 and 8', function () {
    $('#7').click();
    $('#minus').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('-1');
  });

  it('should divide 6 and 3', function () {
    $('#6').click();
    $('#divide').click();
    $('#3').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('2');
  });

  it('should multiply 7 and 8', function () {
    $('#7').click();
    $('#multiply').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('56');
  });

  it('should show 1.', function () {
    $('#1').click();
    $('#dot').click();

    expect($('.screen').text()).toBe('1.');
  });

  it('should not show 1..', function () {
    $('#1').click();
    $('#dot').click();
    $('#dot').click();

    expect($('.screen').text()).toBe('1.');
  });

  xit('should not show 1.+', function () {
    $('#1').click();
    $('#dot').click();
    $('#plus').click();

    expect($('.screen').text()).toBe('1.');
  });

  it('should show 1.1', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();

    expect($('.screen').text()).toBe('1.1');
  });

  it('should show 1.1+', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('#plus').click();

    expect($('.screen').text()).toBe('1.1+');
  });

  it('should add 1.1 and 1.9', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('#plus').click();
    $('#1').click();
    $('#dot').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('3');
  });

  it('should add 1.1 and 1.', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('#plus').click();
    $('#1').click();
    $('#dot').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('2.1');
  });

  it('should clear 1.1+1.', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('#plus').click();
    $('#1').click();
    $('#dot').click();
    $('.clear').click();

    expect($('.screen').text()).toBe('');
  });

  it('should clear 1.1+', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('#plus').click();
    $('.clear').click();

    expect($('.screen').text()).toBe('');
  });

  it('should clear 1.1', function () {
    $('#1').click();
    $('#dot').click();
    $('#1').click();
    $('.clear').click();

    expect($('.screen').text()).toBe('');
  });
});
