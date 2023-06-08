const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input
  beforeEach(() =>{
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  })
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    // const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    // const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const original = {...input}
    utils.trimProperties(input)
    // expect(result).toEqual(input)
    expect(input).toEqual(original)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input
  beforeEach(() =>{
    input = { name: '  jane  ', age: '  25  ', city: 'new york' }
  })
  test('[3] returns an object with the properties trimmed', () => {
    const expected = { name: 'jane', age: '25', city: 'new york' };
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    // const input = { name: '  jane  ', age: '  25  ', city: 'new york' };
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(input);
  });
  })

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [
      { integer: 1 },
      { integer: 3 },
      { integer: 2 }
    ];
    const expected = 3;
    const actual = utils.findLargestInteger(integers);
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown(); 
    const expected = 2;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown(); 
    counter.countDown(); 
    counter.countDown(); 
    counter.countDown(); 
    const expected = 0;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = 'summer';
    const actual = seasons.next();
    expect(actual).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const expected = 'fall';
    const actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const expected = 'winter';
    const actual = seasons.next()
    expect(actual).toBe(expected)

  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const expected = 'spring';
    const actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const expected = 'summer';
    const actual = seasons.next()
    expect(actual).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++){
      seasons.next()
    }
    const expected = 'spring';
    const actual = seasons.next()
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const distance = 100
    const expected = distance
    const actual = focus.drive(distance)
    expect(actual).toBe(expected)
  })
  test('[16] driving the car uses gas', () => {
    const distance = 100
    const expectedOdometre = distance
    const expectedTank = 20 - (distance / 30)
    focus.drive(distance)
    expect(focus.odometer).toBe(expectedOdometre)
    expect(focus.tank).toBe(expectedTank)

  })
  test('[17] refueling allows to keep driving', () => {
    const initialDistance = 100
    const refuelAmount = 5
    const additionalDistance = 50
    focus.drive(initialDistance)
    focus.refuel(refuelAmount)
    const expectedOdometer = initialDistance + additionalDistance;
    const expectedTank = 15 - (initialDistance / 30) + refuelAmount - (additionalDistance / 30);
    const actualOdometer = focus.drive(additionalDistance);

    expect(actualOdometer).toBe(expectedOdometer);
    expect(focus.tank.toFixed(2)).toBe(expectedTank.toFixed(2));
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const initialTanksize = 20
    const additionalFuel = 5
    focus.refuel(initialTanksize)
    const expectedTank = initialTanksize
    focus.refuel(additionalFuel)
    expect(focus.tank).toBe(expectedTank)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    const number = 2;
    return utils.isEvenNumberAsync(number).then((result) => {
      expect(result).toBe(true);
    });
  });

  test('[20] resolves false if passed an odd number', () => {
    const number = 3;
    return utils.isEvenNumberAsync(number).then((result) => {
      expect(result).toBe(false);
    });
  });
})
