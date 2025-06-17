import { Component } from "@angular/core";

@Component({
  selector: "app-overview",
  standalone: true,
  template: `
    <div>
      <p>
        Aplikacja została zbudowana w oparciu o <b>Angular 20</b> oraz
        <b>Angular Material</b>. Struktura opiera się na
        <b>standalone components</b>, co ułatwia zarządzanie kodem i jego
        rozbudowę.
      </p>
      <br />
      <ul>
        <li>
          <b>Header</b> – stały pasek nagłówka z nazwą aplikacji, zrealizowany
          przy użyciu Material.
        </li>
        <li>
          <b>Sidebar</b> – boczne menu nawigacyjne po lewej stronie,
          wykorzystujące <code>mat-nav-list</code> i
          <code>mat-list-item</code> do przejrzystego routingu pomiędzy
          stronami.
        </li>
        <li>
          <b>Routing</b> – dynamiczne wyświetlanie zawartości po prawej stronie,
          w zależności od wybranej opcji w menu.
        </li>
        <li>
          <br />
          <b>Komponenty funkcjonalne:</b>
          <ul>
            <li><b>Przegląd</b> – prezentuje podsumowanie lub statystyki.</li>
            <li>
              <b>Transakcje</b> – pobiera i wyświetla dane z serwera
              (<i>json-server</i>) z typowaniem opartym o model
              <code>Transaction</code>.
            </li>
            <li>
              <b>Nowy przelew</b> – formularz oparty o Angular Material
              (<code>mat-form-field</code>, <code>mat-select</code>,
              <code>mat-input</code>, <code>mat-button</code>), umożliwiający
              dodanie nowej transakcji do bazy danych przez dedykowany serwis.
            </li>
            <li>
              <b>Dodatkowa strona</b> – prezentuje sformatowane informacje lub
              inne treści.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <br />
        <b>Wykorzystane rozwiązania:</b>
      </p>
      <ul>
        <li><b>Angular Signals API</b> do zarządzania stanem komponentów.</li>
        <li>
          <b>HttpClient</b> do komunikacji z backendem (<i>json-server</i>).
        </li>
        <li>
          <b>Dependency Injection</b> do obsługi serwisów i logiki biznesowej.
        </li>
        <li>
          <b>Material Design</b> dla spójnego i responsywnego interfejsu
          użytkownika.
        </li>
      </ul>
      <p>
        <br />
        <b>Możliwości aplikacji obejmują:</b>
      </p>
      <ul>
        <li>Filtrowanie po typie</li>
        <li>Sumowanie przychodu i wydatków</li>
        <li>Dodawanie nowych przelewów przez formularz.</li>
        <li>Dynamiczną nawigację pomiędzy stronami bez przeładowania.</li>
        <li>
          Łatwą rozbudowę o kolejne funkcjonalności dzięki modularnej
          strukturze.
        </li>
      </ul>
    </div>
  `,
})
export class OverviewComponent {}
