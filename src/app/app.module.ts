import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
<<<<<<< Updated upstream
import { PieChartComponent } from './components/pie-chart/pie-chart/pie-chart/pie-chart.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from './charts/chart.module';
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< Updated upstream
    PieChartComponent,
=======
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
