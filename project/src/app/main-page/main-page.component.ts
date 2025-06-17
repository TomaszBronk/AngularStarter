import { Component } from "@angular/core";
import { OverviewComponent } from "../startview/startview";
import { DataComponent } from "../data/data.component";

@Component({
  selector: "app-main-page",
  standalone: true,
  imports: [OverviewComponent, DataComponent],
  template: `
    <div class="main-row">
      <app-overview></app-overview>
      <app-data></app-data>
    </div>
  `,
  styleUrls: ["./main-page.css"],
})
export class MainPageComponent {}
