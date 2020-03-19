import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PodinfoService {
  constructor(private http: HttpClient) {}

  podinfourl = "localhost:8080";

  getPodinfo() {
    return this.http.get(this.podinfourl);
  }
}
