import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PodinfoService {
  constructor(private http: HttpClient) {}

  podinfourl = "http://localhost:8080/v1/get_podinfo";

  getPodinfo() {
    return this.http.get(this.podinfourl);
  }
}
