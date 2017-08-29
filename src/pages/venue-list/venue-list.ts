import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';
import { UtilService } from '../../app/util/util.service';
import { HeaderService } from '../../components/header/header.service';

@Component({
  selector: 'venue-list',
  templateUrl: 'venue-list.html',
  providers: [VenueService, HeaderService]
})
export class VenueList implements OnInit{

	venues: Venue[];
	location : Location;
  distances : number[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private venueService: VenueService, private utils: UtilService , private headerService: HeaderService) {
  	this.location = this.navParams.get('location');
    this.venues = this.navParams.get('venues');
    this.headerService.venueListIcons();
  }

  ngOnInit(): void {
    this.venues = this.utils.order_array_by(this.venues,'followers');
    for(var i=0; i<this.venues.length; i++){
      //console.log(i+') name: '+this.venues[i].name+', '+'instagram: '+this.venues[i].instagram+', '+'followers: '+this.venues[i].followers)
    }
    this.get_distances(function(){});
	}

  get_distances(callback): void{
      for(var i=0; i<this.venues.length; i++){
        this.venues[i].distance = this.utils.get_distance(this.venues[i].lat,this.venues[i].lng);
      }
  }

  onSelect(venue: Venue){
    var self = this;
    this.venueService.get_venue_media('food',this.location,venue,function(media){
      self.navCtrl.push(VenueDetail, {
        venue : venue,
        media : media,
        venue_link : 'food/'+self.location.key+'/'+venue.key
      });
    });
  }

}