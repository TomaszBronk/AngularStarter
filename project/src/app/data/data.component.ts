import { Component, signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { DataService } from "./data.service";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-data",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
  ],
  template: `
    <mat-card>
      <mat-card-title>Transakcje</mat-card-title>
      <mat-card-content>
        <div class="filter-row">
          <mat-form-field appearance="fill">
            <mat-label>Filtruj po typie</mat-label>
            <mat-select [(ngModel)]="filterType">
              <mat-option value="">Wszystko</mat-option>
              <mat-option value="Income">Przychód</mat-option>
              <mat-option value="Expense">Wydatek</mat-option>
            </mat-select>
          </mat-form-field>
          <button
            mat-raised-button
            color="primary"
            routerLink="/new-transfer"
            style="margin-left: 16px;"
          >
            <mat-icon>add</mat-icon>
            Nowy przelew
          </button>
        </div>
        <ul class="transaction-list">
          <li
            *ngFor="let tx of filteredTransactions()"
            [ngClass]="tx.type === 'Income' ? 'income' : 'expense'"
          >
            <mat-icon *ngIf="tx.type === 'Income'" color="primary"
              >check_circle</mat-icon
            >
            <mat-icon *ngIf="tx.type === 'Expense'" color="warn"
              >cancel</mat-icon
            >
            <span class="title">{{ tx.title }}</span>
            <span class="amount"
              >{{ tx.amount / 100 | number : "1.2-2" }} {{ tx.currency }}</span
            >
            <span class="category">({{ tx.category }})</span>
          </li>
        </ul>
        <div class="summary-row">
          <span class="income-summary"
            >Przychód: <b>{{ incomeSum() | number : "1.2-2" }} PLN</b></span
          >
          <span class="expense-summary"
            >Wydatek: <b>{{ expenseSum() | number : "1.2-2" }} PLN</b></span
          >
        </div>
      </mat-card-content>
    </mat-card>
    <mat-card *ngIf="dataService.loading()">Ładowanie...</mat-card>
    <mat-card *ngIf="dataService.error()"
      >Błąd: {{ dataService.error() }}</mat-card
    >
  `,
  styleUrls: ["./data.css"],
})
export class DataComponent {
  dataService = inject(DataService);

  constructor() {
    this.dataService.fetchTransactions();
  }

  filterType = signal<string>("");

  filteredTransactions = computed(() => {
    const txs = this.dataService.transactions() ?? [];
    const type = this.filterType();
    if (!type) return txs;
    return txs.filter((tx) => tx.type === type);
  });

  incomeSum = computed(() => {
    const txs = this.dataService.transactions() ?? [];
    return txs
      .filter((tx) => tx.type === "Income")
      .reduce((sum, tx) => sum + tx.amount / 100, 0);
  });

  expenseSum = computed(() => {
    const txs = this.dataService.transactions() ?? [];
    return txs
      .filter((tx) => tx.type === "Expense")
      .reduce((sum, tx) => sum + tx.amount / 100, 0);
  });
}
