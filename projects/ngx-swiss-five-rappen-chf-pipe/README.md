# NgxSwissFiveRappenChfPipe

## [5 Rappen rounding](https://secure.cerm.be/hd/onlinehelp/Modules/Parameters/Accounting_parameters/5_Rappen_rounding.htm)

CHF is the ISO code of the currency of Switzerland and Liechtenstein. The smaller denomination, a hundredth of a franc, is a Rappen (Rp.) in German, centime(c.) in French, centesimo (ct.) in Italian. The 1 rappen coins were officially fully withdrawn from circulation and declared to be no longer legal tender as of 1 January 2007. The lowest unit is 5 cents (0,05).

## Rules

Original amount | Rounded to |  Rounding

x,x1 CHF        | x,x0 CHF   |  -x,x1 CHF

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

## Code scaffolding

Run `ng generate component component-name --project ngx-swiss-five-rappen-chf-pipe` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-swiss-five-rappen-chf-pipe`.
> Note: Don't forget to add `--project ngx-swiss-five-rappen-chf-pipe` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-swiss-five-rappen-chf-pipe` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-swiss-five-rappen-chf-pipe`, go to the dist folder `cd dist/ngx-swiss-five-rappen-chf-pipe` and run `npm publish`.

## Running unit tests

Run `ng test ngx-swiss-five-rappen-chf-pipe` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
