import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "../transaction.model";
import { NewTransferService } from "./new-transfer.service";

@Component({
  selector: "app-new-transfer",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  template: `
    <form
      class="transfer-form mat-elevation-z2"
      (ngSubmit)="submit()"
      #f="ngForm"
    >
      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Tytuł</mat-label>
        <input matInput name="title" [(ngModel)]="form.title" required />
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Data</mat-label>
        <input
          matInput
          name="date"
          type="date"
          [(ngModel)]="form.date"
          required
        />
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Kategoria</mat-label>
        <mat-select name="category" [(ngModel)]="form.category" required>
          <mat-option *ngFor="let cat of categories" [value]="cat">{{
            cat
          }}</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Kwota (PLN)</mat-label>
        <input
          matInput
          name="amount"
          type="number"
          [(ngModel)]="form.amount"
          required
        />
      </mat-form-field>

      <mat-form-field appearance="fill" class="full-width">
        <mat-label>Typ</mat-label>
        <mat-select name="type" [(ngModel)]="form.type" required>
          <mat-option value="Income">Przychód</mat-option>
          <mat-option value="Expense">Wydatek</mat-option>
        </mat-select>
      </mat-form-field>

      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="f.invalid"
      >
        Zapisz
      </button>
      <div *ngIf="success()" style="color: green; margin-top: 8px;">
        Przelew zapisany!
      </div>
    </form>
  `,
  styleUrls: ["./new-transfer.css"],
  providers: [NewTransferService],
})
export class NewTransferComponent {
  categories = [
    "Transfer",
    "Transport",
    "Media",
    "Subscriptions",
    "Bills",
  ] as TransactionCategory[];
  form: Partial<Transaction> = {
    title: "",
    date: "",
    category: "Transfer",
    amount: 0,
    currency: "PLN",
    type: "Expense",
  };
  success = signal(false);

  constructor(private service: NewTransferService) {}

  submit() {
    const data: Transaction = {
      ...this.form,
      title: this.form.title ?? "",
      id: crypto.randomUUID(),
      amount: Math.round(Number(this.form.amount) * 100), // PLN to grosze
      currency: "PLN",
      type: this.form.type as TransactionType,
      category: this.form.category as TransactionCategory,
      date: this.form.date || new Date().toISOString().slice(0, 10),
    };
    this.service.addTransaction(data).subscribe(() => {
      this.success.set(true);
      setTimeout(() => this.success.set(false), 2000);
    });
  }
}
