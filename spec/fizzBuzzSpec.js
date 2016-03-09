describe('FizzBuzz', function() {

var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzez for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz')
    });

    it('fizzez for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz')
    });

  });


  describe('multiples of 5', function() {
    it('buzzez for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz')
    });

    it('buzzez for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz')
    });

  });


  describe('multiples of 15', function() {
    it('fizzbuzzez for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
    });

    it('fizzbuzzez for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz')
    });

  });

  describe('returns any other number', function() {
    it('returns all other numbers', function() {
      expect(fizzBuzz.play(1)).toEqual(1)
    })
  })
});
