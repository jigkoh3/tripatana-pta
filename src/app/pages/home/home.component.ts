import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lat: number = 13.930398;
  lng: number = 100.728676;
  icon = {
    url: './assets/svg/school2.svg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  stations = [
    // {
    //   name: "st1",
    //   lat: 13.929592,
    //   lng: 100.7233158,
    //   aqi: 26
    // },
    // {
    //   name: "st2",
    //   lat: 13.9291291,
    //   lng: 100.7270129,
    //   aqi: 26
    // },
    // {
    //   name: "st3",
    //   lat: 13.932252,
    //   lng: 100.722367,
    //   aqi: 26
    // },
    // {
    //   name: "st4",
    //   lat: 13.935294,
    //   lng: 100.71718,
    //   aqi: 26
    // },
    // {
    //   name: "st5",
    //   lat: 13.9295589,
    //   lng: 100.7287681,
    //   aqi: 26
    // },
    // {
    //   name: "st6",
    //   lat: 13.932767,
    //   lng: 100.728676,
    //   aqi: 101
    // },
    // {
    //   name: "st7",
    //   lat: 13.934481,
    //   lng: 100.728676,
    //   aqi: 26
    // },
    // {
    //   name: "st8",
    //   lat: 13.9291291,
    //   lng: 100.7270129,
    //   aqi: 45
    // },
    // {
    //   name: "st9",
    //   lat: 13.9297107,
    //   lng: 100.719533,
    //   aqi: 53
    // }
  ];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getLocation();
  }

  async getLocation() {
    const res: any = await this.http.get('https://pamasmell.herokuapp.com/api/reports').toPromise();
    console.log(res);
    this.stations = res.data;
  }
}
