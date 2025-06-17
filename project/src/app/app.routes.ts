import { Routes } from "@angular/router";
import { DataComponent } from "./data/data.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ExtraComponent } from "./extra/extra.component";

export const routes: Routes = [
  { path: "data", component: DataComponent },
  { path: "new-transfer", component: NewTransferComponent },
  { path: "extra", component: ExtraComponent },
  { path: "", component: MainPageComponent },
];
