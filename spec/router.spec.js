var routes = require('../app/routes/router');

describe('routes', function(){
  
  it('should be an object',function(){
    expect(typeof(routes)).toBe('object');
  });

  it('should have a loginpage property that references a method named loginpage', function(){
    expect(typeof(routes.loginpage)).toBe('function');
    expect(routes.loginpage.name).toBe('loginpage');
  });

  it('should have a login property that references a method named authenticate', function(){
    expect(typeof(routes.login)).toBe('function');
    expect(routes.login.name).toBe('authenticate');
  });

  it('should have a domains property that references a method named getDomains', function(){
    expect(typeof(routes.domains)).toBe('function');
    expect(routes.domains.name).toBe('getDomains');
  });

  it('should have a domains.info property that references a method named getDomainData', function(){
    expect(typeof(routes.domains.info)).toBe('function');
    expect(routes.domains.info.name).toBe('getDomainData');
  });

  it('should have a domains.attacks property that references a mehtod named getDomainAttacks', function(){
    expect(typeof(routes.domains.attacks)).toBe('function');
    expect(routes.domains.attacks.name).toBe('getDomainAttacks');
  });
});
