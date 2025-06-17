import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterModule, MatListModule],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/" routerLinkActive="active">Główna</a>
      <a mat-list-item routerLink="/new-transfer" routerLinkActive="active"
        >Nowy przelew</a
      >
      <a mat-list-item routerLink="/extra" routerLinkActive="active"
        >Zakres szkolenia</a
      >
    </mat-nav-list>
  `,
  styleUrls: ["./sidebar.css"],
})
export class SidebarComponent {}
