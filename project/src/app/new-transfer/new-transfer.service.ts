import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../transaction.model";
import { Observable } from "rxjs";

@Injectable()
export class NewTransferService {
  constructor(private http: HttpClient) {}

  addTransaction(tx: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      "http://localhost:3000/transactions",
      tx
    );
  }
}
