import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { PodinfoService } from "../podinfo.service";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  constructor(private podinfoService: PodinfoService) {}

  ngOnInit(): void {}

  //get Podinfo from podinfoservice provided in root
  showPodinfo() {
    console.log("Hu");
    this.podinfoService.getPodinfo().subscribe(data => console.log(data));
  }
}
