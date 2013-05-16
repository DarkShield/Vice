var app = require('../app/server');

describe("app", function(){
  it("should be a function", function(){
    expect(typeof(app)).toBe('function');
  });
});
