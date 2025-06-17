import { Injectable, signal, computed } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../transaction.model";
import { delay } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  private _transactions = signal<Transaction[] | null>(null);
  private _loading = signal(true);
  private _error = signal<string | null>(null);

  transactions = computed(() => this._transactions());
  loading = computed(() => this._loading());
  error = computed(() => this._error());

  constructor(private http: HttpClient) {}

  fetchTransactions() {
    this._transactions.set(null);
    this._loading.set(true);
    this.http
      .get<Transaction[]>("http://localhost:3000/transactions")
      .pipe(delay(2000))
      .subscribe({
        next: (res) => {
          this._transactions.set(res);
          this._loading.set(false);
        },
        error: (err) => {
          this._error.set(err.message);
          this._loading.set(false);
        },
      });
  }
}
