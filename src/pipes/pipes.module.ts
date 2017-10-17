import { NgModule } from '@angular/core';
import { DecimalBrPipe } from './decimal-br/decimal-br';
@NgModule({
	declarations: [DecimalBrPipe],
	imports: [],
	exports: [DecimalBrPipe]
})
export class PipesModule {}
