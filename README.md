# 5 Rappen rounding - Swiss CHF - Angular Pipe - NgxSwissFiveRappenChfPipe

## [5 Rappen rounding](https://secure.cerm.be/hd/onlinehelp/Modules/Parameters/Accounting_parameters/5_Rappen_rounding.htm)

CHF is the ISO code of the currency of Switzerland and Liechtenstein. The smaller denomination, a hundredth of a franc, is a Rappen (Rp.) in German, centime(c.) in French, centesimo (ct.) in Italian. The 1 rappen coins were officially fully withdrawn from circulation and declared to be no longer legal tender as of 1 January 2007. The lowest unit is 5 cents (0,05).

## Rules

| Original amount      | Rounded to |  Rounding   |
| ----------- | ----------- | ----------- |
| x,x1 CHF        | x,x0 CHF   |  -x,x1 CHF
x,x2 CHF        | x,x0 CHF   |  -x,x2 CHF
x,x3 CHF        | x,x5 CHF   |  +x,x2 CHF
x,x4 CHF        | x,x5 CHF   |  +x,x1 CHF
x,x6 CHF        | x,x5 CHF   |  -x,x1 CHF
x,x7 CHF        | x,x5 CHF   |  -x,x2 CHF
x,x8 CHF        | x,x+10 CHF |  +x,x2 CHF
x,x9 CHF        | x,x+10 CHF |  +x,x1 CHF 

## Examples

Values between CHF 0,975 and CHF 1,024 will be rounded to CHF 1,00

Values between CHF 1,025 and CHF 1,074 will be rounded to CHF 1,05

Values between CHF 1,075 and CHF 1,124 will be rounded to CHF 1,10

## Installation

NPM package is published at `https://www.npmjs.com/package/ngx-swiss-five-rappen-chf-pipe` 

Run `npm install --save ngx-swiss-five-rappen-chf-pipe` to install package.

## HTML Usage
You can apply this pipe in HTML by using pipe operator "|". 
```html
<h2 class="top-spacer">Usage</h2>
  <div class="top-spacer">
    <input type="number" [(ngModel)]="inputValue">
    <h3>Output: {{ inputValue | ngxSwissFiveRappenChf }} </h3>
  </div>
```

## Component Usage
You can call `transform()` method in your component TypeScript file to convert number.

```ts
inputValue = 2.034;
  outputValue!: number;

  ngOnInit() {
    const pipe = new NgxSwissFiveRappenChfPipe();
    this.outputValue = pipe.transform(this.inputValue);
    console.debug('🔥 output', this.outputValue);
  }
```
