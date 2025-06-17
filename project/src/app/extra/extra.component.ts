import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-extra",
  standalone: true,
  imports: [MatCardModule, MatListModule],
  template: `
    <mat-card>
      <h1><b>Program: </b></h1>
      <h1><b>Dzień 1 – Komponenty, DI oraz komunikacja HTTP</b></h1>
      <h2>Wprowadzenie:</h2>
      <h2>Komponenty</h2>
      <h2>Dependency Injection</h2>
      <h1><b>Dzień 2 - Routing oraz formularze</b></h1>
      Routing - Definiowanie routingu w aplikacji - Lazy loading - Guards,
      Resolvers, static data
      <h2>Reactive Forms</h2>
      <h3>
        Tworzenie złożonych formularzy za pomocą FormBuilder - Walidatory -
        Śledzenie zmian wartości formularza - praktyczne wykorzystanie
        operatorów RxJS w pracy z formularzami
      </h3>
      <h3>Struktura projektu oraz dobre praktyki dla poznanych zagadnień</h3>
      <h1><b>Dzień 3 - Projekt praktyczny</b></h1>
      <h2>
        Praca nad własnym projektem z wykorzystaniem poznanych elementów
        Angulara
      </h2>
      <h2>Konsultacje - Wspólne code review projektów</h2>
      <h2>Opcjonalne Q&A dotyczące projektów zbudowanych w Angularze</h2>
    </mat-card>
  `,
})
export class ExtraComponent {}
