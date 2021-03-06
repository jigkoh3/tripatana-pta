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
  typeChart: any;
  dataChart: any;
  optionsChart: any;

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
    this.chartData();
  }

  chartData() {
    this.typeChart = 'line';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'
    this.dataChart = {
      labels: ["8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00"],
      datasets: [
        {
          label: "แสงตะวัน",
          data: [20, 15, 14, 11, 20, 15, 14, 18, 23, 23],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#ff0000"
        },
        {
          label: "จันทร์ฉาย",
          data: [31, 26, 14, 12, 31, 33, 18, 18, 40, 36],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#ffff00"
        },
        {
          label: "สายรุ้ง",
          data: [30, 19, 10, 35, 28, 25, 25, 25, 35, 35],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#ff007f"
        },
        {
          label: "ป.1",
          data: [39, 39, 39, 50, 50, 59, 64, 64, 64, 64, 64],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#007fff"
        },
        {
          label: "ป.5",
          data: [34, 34, 38, 33, 33, 57, 58, 54, 54, 54, 54],
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#00ff00"
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  async getLocation() {
    const res: any = await this.http.get('https://pamasmell.herokuapp.com/api/reports').toPromise();
    console.log(res);
    this.stations = res.data;
  }
}
