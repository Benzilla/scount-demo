import { Injectable } from '@angular/core';
//import { Geolocation } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Injectable()
export class UtilService {

  browser: boolean;
  lat: number;
  lng: number;

  constructor(private geolocation: Geolocation, private platform: Platform) {
    this.browser = true;
  }

  async get_location(callback) {
    if (this.lat == undefined) {
      await this.platform.ready();
      const { coords } = await this.geolocation.getCurrentPosition({ enableHighAccuracy: false });
      this.lat = coords.latitude;
      this.lng = coords.longitude;
    }
    console.log(this.lat + ", " + this.lng);
    callback({ lat: this.lat, lng: this.lng });
  }

  get_distance(lat, lng): number {
    var dist = this.calculate_distance(this.lat, this.lng, lat, lng);
    console.log(this.lat, this.lng, lat, lng);
    //console.log(dist);
    return dist;
  }

  calculate_distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // this.deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return parseFloat(d.toFixed(2));
  }

  order_array_by(input, attribute) {
    var array = [];
    for (var objectKey in input) {
      array.push(input[objectKey]);
    }
    array.sort(function(a, b) {
      a = parseInt(a[attribute]);
      b = parseInt(b[attribute]);
      return b - a;
    });
    return array;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  generate_key(k) {
    return k.replace(/\s/g, '').toLowerCase();
  }

}
