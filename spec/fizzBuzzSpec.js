describe('FizzBuzz', function() {

var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzez for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz')
    });

  })

})
