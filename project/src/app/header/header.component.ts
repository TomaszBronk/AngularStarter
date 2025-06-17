import { Component, signal } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>{{ title() }}</span>
    </mat-toolbar>
  `,
  styleUrls: ["./header.css"],
})
export class HeaderComponent {
  title = signal("Aplikacja Angular - projekt");
}
