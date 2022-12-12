import { NgxSwissFiveRappenChfPipe } from "./ngx-swiss-five-rappen-chf.pipe";


describe('NgxSwissFiveRappenChfPipe', () => {
  it('create an instance', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    expect(pipe).toBeTruthy();
  });

  it('Round x.x1 CHF to x.x0 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.01;
    const result = pipe.transform(input);
    const expctedResult = 3.0;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.02 CHF to x.x0 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.02;
    const result = pipe.transform(input);
    const expctedResult = 3.0;
    expect(result).toEqual(expctedResult);
  });

  it('Round 1.024 CHF to 1.0 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 1.024;
    const result = pipe.transform(input);
    const expctedResult = 1.0;
    expect(result).toEqual(expctedResult);
  });


  it('Round x.03 CHF to x.x5 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.03;
    const result = pipe.transform(input);
    const expctedResult = 3.05;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.04 CHF to x.x5 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.04;
    const result = pipe.transform(input);
    const expctedResult = 3.05;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.06 CHF to x.x5 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.06;
    const result = pipe.transform(input);
    const expctedResult = 3.05;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.07 CHF to x.x5 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.07;
    const result = pipe.transform(input);
    const expctedResult = 3.05;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.08 CHF to x.10 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.08;
    const result = pipe.transform(input);
    const expctedResult = 3.10;
    expect(result).toEqual(expctedResult);
  });

  it('Round x.09 CHF to x.10 CHF', () => {
    const pipe = new NgxSwissFiveRappenChfPipe();
    const input = 3.09;
    const result = pipe.transform(input);
    const expctedResult = 3.10;
    expect(result).toEqual(expctedResult);
  });
  
  
});
