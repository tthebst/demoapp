import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { DemoComponent } from "./demo/demo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
