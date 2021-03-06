webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_locations_location_service__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_list_venue_list__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nearme_nearme__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_util_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, locationService, venue_service, headerService, geo, platform, utils) {
        this.navCtrl = navCtrl;
        this.locationService = locationService;
        this.venue_service = venue_service;
        this.headerService = headerService;
        this.geo = geo;
        this.platform = platform;
        this.utils = utils;
        this.searchQuery = '';
        this.showNearMe = true;
        this.headerService.showMap(true);
    }
    HomePage.prototype.format_location_name = function (locationName) {
        var p1, p2;
        var pos = locationName.lastIndexOf(' ');
        locationName = locationName.substring(0, pos) + ', ' + locationName.substring(pos + 1);
        p1 = locationName.slice(0, locationName.length - 2);
        p2 = locationName.slice(locationName.length - 2);
        p2 = p2.toUpperCase();
        return p1 + p2;
    };
    HomePage.prototype.ngOnInit = function () {
        this.getSearchLocations();
        this.headerService.homeIcons();
        this.setLocation();
    };
    HomePage.prototype.setLocation = function () {
        this.utils.get_location(function () { });
    };
    HomePage.prototype.getSearchLocations = function () {
        var self = this;
        this.locationService.getListOfLocations(function (locations) {
            self.locations = [];
            for (var key in locations) {
                self.locations.push({ name: self.format_location_name(locations[key].City_Plain), key: key });
            }
        });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.filter_locations = this.locations;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.filter_locations = this.filter_locations.filter(function (location) {
                return (location.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.showNearMe = false;
        }
        else {
            this.filter_locations = []; //make list empty if search string is
            this.showNearMe = true;
        }
    };
    HomePage.prototype.openNearMe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nearme_nearme__["a" /* NearmePage */]);
    };
    HomePage.prototype.onSelect = function (location) {
        var self = this;
        this.locationService.getFirebaseLocation(location, function (firebase_location) {
            self.venue_service.get_venues("food", location, function (venues) {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__venue_list_venue_list__["a" /* VenueList */], {
                    location: firebase_location,
                    venues: venues,
                });
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/home/home.html"*/'<ion-header>\n	<app-header></app-header>\n</ion-header>\n<ion-content [attr.noScroll]="shouldScroll" class="homeContent">\n	<ion-searchbar mode="md" class="searchbar" placeholder="Type a place name…" (ionInput)="getItems($event)"></ion-searchbar>\n	<!--<div class="searchbar near-me" *ngIf=\'showNearMe\' (click)="openNearMe()"><img src="assets/icons/scoutMAP.png"><p>Near me</p></div>-->\n  <ion-list no-lines *ngFor="let filter_location of filter_locations" (click)="onSelect(filter_location)">\n  	<ion-item class="card-title">{{ filter_location.name }}</ion-item>\n  </ion-list>\n	<div class="homeImage"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_locations_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_3__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_7__components_header_header_service__["a" /* HeaderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_locations_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_3__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_7__components_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__app_util_util_service__["a" /* UtilService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_util_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //for checking if device is ios for different maps app



var VenueDetail = (function () {
    function VenueDetail(afd, navCtrl, navParams, utils, headerService, profileService, plt, venueService) {
        this.afd = afd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utils = utils;
        this.headerService = headerService;
        this.profileService = profileService;
        this.plt = plt;
        this.venueService = venueService;
        this.venue = this.navParams.get('venue');
        this.media = this.navParams.get('media');
        this.venue_link = this.navParams.get('venue_link');
        this.top_media = [];
        this.favorited = false;
        this.opening_hours = "";
        this.venue.open_status = this.venueService.check_if_open(this.venue);
        this.heart_image = 'assets/icons/scoutHEART.png';
        this.headerService.venueDetailIcons();
        this.checked = false;
        this.formatOpeningHours();
    }
    VenueDetail.prototype.ngOnInit = function () {
        this.rank_latest_media();
        this.check_favorite();
        this.venue.distance = this.utils.get_distance(this.venue.lat, this.venue.lng);
        this.initJquery();
        this.checkWebsite();
        this.checkPhone();
    };
    VenueDetail.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    VenueDetail.prototype.formatOpeningHours = function () {
        if (typeof this.venue.opening_hours === "string") {
            return;
        }
        var text = "";
        var prevDay = 1;
        var streak = false;
        for (var key in this.venue.opening_hours) {
            var obj = this.venue.opening_hours[key];
            console.log("key: ", key);
            var days = obj.days;
            for (var i = 0; i < days.length; i++) {
                console.log(days[i] + " " + prevDay);
                if (i == 0 || i == days.length - 1) {
                    if (i > 0 && !streak /* && i != days.length - 1*/) {
                        text += ", ";
                    }
                    switch (days[i]) {
                        case 1:
                            text += "Mon";
                            prevDay = 1;
                            break;
                        case 2:
                            text += "Tue";
                            prevDay = 2;
                            break;
                        case 3:
                            text += "Wed";
                            prevDay = 3;
                            break;
                        case 4:
                            text += "Thu";
                            prevDay = 4;
                            break;
                        case 5:
                            text += "Fri";
                            prevDay = 5;
                            break;
                        case 6:
                            text += "Sat";
                            prevDay = 6;
                            break;
                        case 7:
                            text += "Sun";
                            prevDay = 7;
                            break;
                    }
                    streak = false;
                }
                else {
                    if (!streak) {
                        text += " - ";
                        switch (days[i]) {
                            case 1:
                                prevDay = 1;
                                break;
                            case 2:
                                prevDay = 2;
                                break;
                            case 3:
                                prevDay = 3;
                                break;
                            case 4:
                                prevDay = 4;
                                break;
                            case 5:
                                prevDay = 5;
                                break;
                            case 6:
                                prevDay = 6;
                                break;
                            case 7:
                                prevDay = 7;
                                break;
                        }
                        streak = true;
                    }
                }
            }
            console.log("Error");
            console.log(obj.open);
            var start = obj.open[0].start;
            var end = obj.open[0].end;
            if (start < 1200) {
                start += " AM";
            }
            else {
                start -= 1200;
                start += " PM";
            }
            if (end < 1200) {
                end += " AM";
            }
            else {
                end -= 1200;
                end += " PM";
            }
            console.log("end: ", end);
            if (start.length < 7) {
                start = "0" + start;
            }
            if (end.length < 7) {
                end = "0" + end;
            }
            start = [start.slice(0, 2), ":", start.slice(2)].join('');
            end = [end.slice(0, 2), ":", end.slice(2)].join('');
            text += " " + start;
            text += " - " + end + "\n";
            console.log(text);
        }
        this.opening_hours = text;
    };
    VenueDetail.prototype.loadMap = function () {
        var venuePosition = { lat: this.venue.lat, lng: this.venue.lng };
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: venuePosition,
            scaleControl: false,
            draggable: false,
            disableDefaultUI: true
        });
        var marker = new google.maps.Marker({
            position: venuePosition,
            map: map
        });
        this.map = new google.maps.Map(this.mapElement.nativeElement, map);
    };
    VenueDetail.prototype.cutCategory = function (str) {
        var s = str.split(" ");
        return s[0];
    };
    VenueDetail.prototype.checkWebsite = function () {
        if (this.venue.external_url == "") {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.website').css('opacity', '.5');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.website a').attr("href", "#");
        }
    };
    VenueDetail.prototype.checkPhone = function () {
        if (this.venue.phone == "") {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.call').css('opacity', '.5');
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.call a').attr("href", "#");
        }
    };
    VenueDetail.prototype.initJquery = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.flag').click(function () {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.oops-dialog').fadeIn(375);
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.dialog-close-button').click(function () {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.oops-dialog').fadeOut(375);
        });
    };
    VenueDetail.prototype.open_instagram = function () {
        window.location.href = "https://www.instagram.com/" + this.venue.instagram;
    };
    VenueDetail.prototype.rank_latest_media = function () {
        var temp_media = [];
        var how_many_top = 10;
        for (var prop in this.media) {
            temp_media.push(this.media[prop]);
        }
        temp_media = this.utils.order_array_by(temp_media, 'likes');
        if (temp_media.length < (how_many_top + 1)) {
            how_many_top = temp_media.length;
        }
        for (var i = 1; i < (how_many_top + 1); i += 2) {
            this.top_media.push([temp_media[i], temp_media[i + 1]]);
        }
    };
    VenueDetail.prototype.check_favorite = function () {
        var self = this;
        this.profileService.checkUser(function (profile) {
            var favorites = self.afd.object('/profiles/' + profile.id + '/favorites', { preserveSnapshot: true }).take(1);
            ;
            favorites.subscribe(function (snapshot) {
                var snap = snapshot.val();
                for (var key in snap) {
                    if (self.venue_link == snap[key].link) {
                        self._favorite();
                        continue;
                    }
                }
            });
        });
    };
    VenueDetail.prototype.flag_venue = function (reason) {
        var key = this.venue.name + ' ' + this.venue.location;
        this.profileService.flagVenue(key, reason);
        __WEBPACK_IMPORTED_MODULE_7_jquery___default()('.oops-dialog').fadeOut(375);
    };
    VenueDetail.prototype.favorite_venue = function () {
        var self = this;
        if (!this.favorited) {
            this.profileService.favoriteVenue(this.venue_link, function () {
                self._favorite();
            });
        }
        else {
            this.profileService.unFavoriteVenue(this.venue_link, function () {
                self._unfavorite();
            });
        }
    };
    VenueDetail.prototype.open_map = function () {
        var geocoords = this.venue.lat + ',' + this.venue.lng;
        if (this.plt.is('ios')) {
            window.open('maps://?q=' + geocoords, '_system');
        }
        else if (this.plt.is('android')) {
            window.open('geo:0,0?q=' + geocoords, '_system');
        }
        else {
            window.open('https://maps.google.com/maps/place/' + geocoords, '_blank');
        }
    };
    VenueDetail.prototype._favorite = function () {
        //alert('fav');
        this.favorited = true;
        this.heart_image = 'assets/icons/scoutHEARTFULL.png';
    };
    VenueDetail.prototype._unfavorite = function () {
        //alert('unfav');
        this.favorited = false;
        this.heart_image = 'assets/icons/scoutHEART.png';
    };
    return VenueDetail;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], VenueDetail.prototype, "mapElement", void 0);
VenueDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'venue-detail',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/venue-detail/venue-detail.html"*/'<ion-header>\n\n	<app-header></app-header>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div class="oops-dialog">\n\n		<div class="dialog-wrapper">\n\n			<div class="dialog-close">\n\n				<img class="dialog-close-button" src="assets/icons/scoutCLOSE.png">\n\n			</div>\n\n			<div class="dialog-title">\n\n				<h1>Oops!</h1>\n\n				<p>Sometimes the Scout bot has a moment...</p>\n\n			</div>\n\n			<div class="dialog-reason">\n\n				<h1>What\'s Happened Here?</h1>\n\n				<ul>\n\n					<li (click)="flag_venue(\'chain\')">It\'s a chain</li>\n\n					<li (click)="flag_venue(\'wrong profile\')">Wrong Instagram profile</li>\n\n					<li (click)="flag_venue(\'repeat\')">Repeated Venue</li>\n\n					<li (click)="flag_venue(\'other\')">Something else</li>\n\n				</ul>\n\n			</div>\n\n			<div class="dialog-thanks">\n\n				<h1>Thanks &#x270C;</h1>\n\n			</div>\n\n		</div>\n\n	</div>\n\n	<div class="venue">\n\n	  	<img class="venue-image" src={{venue.most_liked_media}}/>\n\n			<div class="feature">\n\n	  		<div class="price"><span class="pricespan" *ngIf="venue.price == 1">&#36;<span style="color: #ddd">&#36;&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 2">&#36;&#36;<span style="color: #ddd">&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 3">&#36;&#36;&#36;<span style="color: #ddd">&#36;</span></span><span class="pricespan" *ngIf="venue.price == 4">&#36;&#36;&#36;&#36;</span></div>\n\n				<div class="feature-spacer"></div>\n\n				<p class="venue-distance" (click)="open_map()">{{venue.distance}} km </p>\n\n				<div class="feature-spacer"></div>\n\n				<p class="venue-category">{{venue.category.name}}</p>\n\n				<div class="feature-spacer"></div>\n\n				<p *ngIf="venue.open_status == 0" class="open-status">-</p>\n\n				<p *ngIf="venue.open_status == 1" class="open-status"><span style="color: #2ECC71">Open</span></p>\n\n				<p *ngIf="venue.open_status == 2" class="open-status"><span style="color: #EF4836">Closed</span></p>\n\n	  	</div>\n\n	   <a class="venue-instagram" href="https://www.instagram.com/{{venue.instagram}}" (tap)="open_instagram()"><h1 class="venue-name">{{venue.name}}</h1></a>\n\n	    <p class="venue-bio">{{venue.bio}}</p>\n\n			<p class="venue-opening-times">{{opening_hours}}</p>\n\n			<div class="action-bar">\n\n				<div *ngIf="venue.external_url" class="website"><a href="{{venue.external_url}}"><img src="assets/icons/scoutLINK.png"> <p>Website</p></a></div>\n\n				<div *ngIf="!venue.external_url" class="nowebsite"><img src="assets/icons/scoutLINK.png"> <p>Website</p></div>\n\n				<div *ngIf="venue.phone" class="call"><a href="tel:{{venue.phone}}"><img src="assets/icons/scoutPHONE.png"> <p>Call</p></a></div>\n\n				<div *ngIf="!venue.phone" class="nocall"><img src="assets/icons/scoutPHONE.png"> <p>Call</p></div>\n\n				<div class="flag"><img src="assets/icons/scoutFLAG.png"> <p>Flag</p></div>\n\n				<div class="favorite" (click)="favorite_venue()"><img class="favorite-heart" src="{{heart_image}}"> <p>Favorite</p></div>\n\n			</div>\n\n			<div #map id="map" (click)="open_map()"></div>\n\n		<ion-grid>\n\n		  	<ion-row *ngFor="let m of top_media">\n\n		    	<ion-col col-6><img src={{m[0].images.thumbnail.url}}/></ion-col>\n\n		    	<ion-col col-6><img src={{m[1].images.thumbnail.url}}/></ion-col>\n\n		  	</ion-row>\n\n		</ion-grid>\n\n		<div class="instagram-handle"><a href="https://www.instagram.com/{{venue.instagram}}">Images from @{{venue.instagram}}</a></div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/venue-detail/venue-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_3__components_header_header_service__["a" /* HeaderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_util_util_service__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_3__components_header_header_service__["a" /* HeaderService */],
        __WEBPACK_IMPORTED_MODULE_4__profile_profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__app_venues_venue_service__["a" /* VenueService */]])
], VenueDetail);

//# sourceMappingURL=venue-detail.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = (function () {
    function ProfileService(afd, facebook, emailComposer) {
        this.afd = afd;
        this.facebook = facebook;
        this.emailComposer = emailComposer;
        this.profile = {
            id: "",
            name: "",
            email: "",
            picture: ""
        };
    }
    ProfileService.prototype.checkUser = function (callback) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.profile.id = user.uid;
                self.profile.name = user.displayName;
                if (user.user_location) {
                    self.profile.email = user.user_location;
                }
                self.profile.picture = user.photoURL;
                callback(self.profile);
            }
        });
    };
    ProfileService.prototype.getProfile = function (callback) {
        var self = this;
        if (this.profile != undefined) {
            console.log('get cache profile');
            callback(this.profile);
        }
        else {
            self.getFirebaseProfile('/profiles/' + this.profile.id, function (profile) {
                callback(profile);
            });
        }
    };
    //get the favourites of the facebook user
    ProfileService.prototype.getFirebaseProfile = function (profileString, callback) {
        var profile = this.afd.object(profileString, { preserveSnapshot: true });
        profile.subscribe(function (snapshot) {
            var p = snapshot.val();
            var favorites = [];
            for (var key in p.favorites) {
                favorites.push({ key: key, link: p.favorites[key].link });
            }
            p.favorites = favorites;
            callback(p);
        });
    };
    /*favoriteVenue(venueString: string, callback: any){
      var self = this;
      var favorites = this.afd.list('/profiles/'+this.profile.id+'/favorites');
      favorites.push({link:venueString}).then((item) => {
          self.getFirebaseProfile('/profiles/'+this.profile.id,function(profile){
                  //profile.favorites is a list of objects with profile.favorites[i].link being the link
              //callback();
          });
      });
    }*/
    ProfileService.prototype.getFavoritesSubscribe = function (id, callback) {
        var favorites = this.afd.object('/profiles/' + id + '/favorites', { preserveSnapshot: true });
        favorites.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    ProfileService.prototype.getFavorites = function (id, callback) {
        var favorites = this.afd.object('/profiles/' + id + '/favorites', { preserveSnapshot: true }).take(1);
        favorites.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    ProfileService.prototype.getFavoritesAsList = function () {
        var f = this.afd.list('/profiles/' + this.profile.id + '/favorites');
        console.log(f);
        return f;
    };
    ProfileService.prototype.favoriteVenue = function (venueString, callback) {
        this.afd.list('/profiles/' + this.profile.id + '/favorites').push({ link: venueString }).then(function (_) { return callback(); });
    };
    ProfileService.prototype.unFavoriteVenue = function (venueString, callback) {
        var self = this;
        var deleteKey = "";
        //this.profile.favorites.push(venueString);
        this.getFavorites(this.profile.id, function (favs) {
            for (var key in favs) {
                if (favs[key].link == venueString) {
                    deleteKey = key;
                    continue;
                }
            }
            //alert(deleteKey);
            if (deleteKey != "") {
                self.afd.list('/profiles/' + self.profile.id + '/favorites').remove(deleteKey).then(function (_) { return callback(); });
            }
        });
    };
    ProfileService.prototype.flagVenue = function (key, reason) {
        var self = this;
        var chains, wrong_profiles, repeats, others, total_flags, reportedBy;
        var flags = this.afd.object('/flags/' + key);
        flags.take(1)
            .subscribe(function (data) {
            console.log(data);
            try {
                chains = data.reason.chain;
                wrong_profiles = data.reason.wrong_profile;
                repeats = data.reason.repeat;
                others = data.reason.other;
                reportedBy = data.reportedBy;
            }
            catch (e) {
                chains = 0;
                wrong_profiles = 0;
                repeats = 0;
                others = 0;
                reportedBy = [];
            }
            var alreadyReported = false;
            for (var i = 0; i < reportedBy.length; i++) {
                if (self.profile.id == reportedBy[i]) {
                    alreadyReported = true;
                    break;
                }
            }
            if (!alreadyReported) {
                reportedBy.push(self.profile.id);
                switch (reason) {
                    case "chain":
                        chains++;
                        break;
                    case "wrong profile":
                        wrong_profiles++;
                        break;
                    case "repeat":
                        repeats++;
                        break;
                    case "other":
                        others++;
                        break;
                }
                total_flags = chains + wrong_profiles + repeats + others;
                if (total_flags > 0) {
                    self.emailComposer.isAvailable().then(function (available) {
                        if (available) {
                            var email = {
                                to: 'solfonictoast@gmail.com',
                                subject: 'Scout flag notification',
                                body: 'Venue ' + key + ' has received enough flags to trigger this email',
                                isHtml: true
                            };
                            // Send a text message using default options
                            alert("before email");
                            self.emailComposer.open(email);
                            alert("emailed");
                        }
                        else {
                            alert("email not avaiable");
                        }
                    });
                }
                flags.set({
                    reportedBy: reportedBy,
                    reason: {
                        chain: chains,
                        wrong_profile: wrong_profiles,
                        repeat: repeats,
                        other: others
                    }
                });
            }
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
], ProfileService);

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var Appsee:any;
var SplashPage = (function () {
    function SplashPage(navCtrl, login, facebook, firebaseProvider, afAuth, platform, headerService, statusBar) {
        this.navCtrl = navCtrl;
        this.login = login;
        this.facebook = facebook;
        this.firebaseProvider = firebaseProvider;
        this.afAuth = afAuth;
        this.platform = platform;
        this.headerService = headerService;
        this.statusBar = statusBar;
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.headerService.splashIcons();
        this.platform.ready().then(function () {
            //Appsee.start("67bddf300a8642ac91953da588d7559a");
        });
    }
    SplashPage.prototype.ngOnInit = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }
        });
    };
    SplashPage.prototype.createUser = function (response) {
    };
    SplashPage.prototype.loginFB = function () {
        //this.loginBrowser();
        if (this.platform.is('cordova')) {
            alert("loginapp");
            this.loginApp();
        }
        else {
            alert("loginbrowser");
            this.loginBrowser();
        }
    };
    SplashPage.prototype.loginApp = function () {
        var self = this;
        this.facebook.login(["email"]).then(function (loginResponse) {
            var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signInWithCredential(credential).then(function (info) {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            });
        });
    };
    SplashPage.prototype.loginBrowser = function () {
        var self = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider();
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            alert(error);
            /*// Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...*/
        });
    };
    /*this.facebook.login(["email"]).then((loginResponse) =>{
        let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

        firebase.auth().signInWithCredential(credential).then((info) =>{
        this.checkUser();
        })
    });*/
    //this.navCtrl.push(HomePage);
    //this.navCtrl.setRoot(HomePage);
    SplashPage.prototype.checkUser = function () {
        var self = this;
        this.facebook.getLoginStatus().then(function (response) {
            if (response.status === 'connected') {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }
        });
    };
    return SplashPage;
}());
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'splash',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/splash/splash.html"*/'<ion-header>\n\n	<app-header></app-header>\n\n</ion-header>\n\n<ion-content padding class="splashContent">\n\n	<button ion-button full icon-left (click)="loginApp()" class="loginButton disable-hover">\n\n		<div class="loginButtonText">Login Via Facebook</div>\n\n		<div class="loginButtonIcon"><img src=\'assets/icons/X-facebook.png\'></div>\n\n	</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/splash/splash.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__components_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__components_header_header_service__["a" /* HeaderService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_cloud_angular__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(auth, insta_info) {
        this.auth = auth;
        this.insta_info = insta_info;
    }
    LoginService.prototype.login = function (callback) {
        var self = this;
        this.auth.login('instagram').then(function (response) {
            self.createUser(response);
            callback();
        });
    };
    LoginService.prototype.createUser = function (response) {
        this.user = {
            access_token: response.token,
            user_id: this.insta_info.social.instagram.data.username,
            full_name: this.insta_info.social.instagram.data.full_name,
            profile_picture: this.insta_info.social.instagram.data.profile_picture,
            instagram_raw_data: this.insta_info.social.instagram.data.raw_data
        };
        console.log(this.user);
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_cloud_angular__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1__ionic_cloud_angular__["c" /* User */]])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderService = (function () {
    function HeaderService() {
        this.show_map = false;
    }
    HeaderService.prototype.homeIcons = function () {
        this.showMap(false);
        this.showLeftAccount(true);
        this.showRightAccount(false);
        this.showLeftSearch(false);
        this.showRightSearch(false);
        this.showLeftBack(false);
        this.showRightBack(false);
    };
    HeaderService.prototype.venueListIcons = function () {
        this.showMap(true);
        this.showLeftAccount(false);
        this.showRightAccount(true);
        this.showLeftSearch(true);
        this.showRightSearch(false);
        this.showLeftBack(false);
        this.showRightBack(false);
    };
    HeaderService.prototype.venueDetailIcons = function () {
        this.showMap(false);
        this.showLeftAccount(false);
        this.showRightAccount(true);
        this.showLeftSearch(false);
        this.showRightSearch(false);
        this.showLeftBack(true);
        this.showRightBack(false);
    };
    HeaderService.prototype.profileIcons = function () {
        this.showMap(false);
        this.showLeftAccount(false);
        this.showRightAccount(false);
        this.showLeftSearch(false);
        this.showRightSearch(false);
        this.showLeftBack(true);
        this.showRightBack(false);
    };
    HeaderService.prototype.splashIcons = function () {
        this.showMap(false);
        this.showLeftAccount(false);
        this.showRightAccount(false);
        this.showLeftSearch(false);
        this.showRightSearch(false);
        this.showLeftBack(false);
        this.showRightBack(false);
    };
    HeaderService.prototype.nearmeIcons = function () {
        this.showMap(false);
        this.showLeftAccount(false);
        this.showRightAccount(true);
        this.showLeftSearch(false);
        this.showRightSearch(false);
        this.showLeftBack(true);
        this.showRightBack(false);
    };
    HeaderService.prototype.showMap = function (b) {
        this.show_map = b;
    };
    HeaderService.prototype.showLeftAccount = function (b) {
        this.show_left_account = b;
    };
    HeaderService.prototype.showRightAccount = function (b) {
        this.show_right_account = b;
    };
    HeaderService.prototype.showLeftSearch = function (b) {
        this.show_left_search = b;
    };
    HeaderService.prototype.showRightSearch = function (b) {
        this.show_right_search = b;
    };
    HeaderService.prototype.showLeftBack = function (b) {
        this.show_left_back = b;
    };
    HeaderService.prototype.showRightBack = function (b) {
        this.show_right_back = b;
    };
    return HeaderService;
}());
HeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HeaderService);

//# sourceMappingURL=header.service.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(http, afd) {
        this.http = http;
        this.afd = afd;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.registerUser = function (userData) {
        //this.afd.object('/profiles/${userData}').$ref.transaction(currentValue => {
        //if (currentValue === null) {
        //user does not exist, create new profile
        this.afd.list('/profiles/').push(userData);
        //} else {
        //user exists, log them in
        //}
        //  })
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__venue_detail_venue_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_util_util_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VenueList = (function () {
    function VenueList(navCtrl, platform, navParams, venueService, utils, headerService) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.venueService = venueService;
        this.utils = utils;
        this.headerService = headerService;
        this.venue_type = "food";
        this.location = this.navParams.get('location');
        this.format_location_name();
        this.venues = this.navParams.get('venues');
        this.setVenueKeys();
        this.headerService.venueListIcons();
    }
    VenueList.prototype.ngAfterViewInit = function () {
        var offset = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.main-container').offset().top;
        this.content.ionScroll.subscribe(function (event) {
            ;
            if (event.scrollTop >= offset) {
                __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.fixed-header').show();
                //jQuery('.list').addClass("buttonPadded");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.fixed-header').hide();
            }
        });
    };
    VenueList.prototype.ngOnInit = function () {
        var _this = this;
        this.select_top_venues();
        this.platform.ready().then(function () {
            _this.get_distances(function () { });
        });
    };
    VenueList.prototype.setVenueKeys = function () {
        var i = 0;
        for (var key in this.venues) {
            this.venues[key].fbkey = key;
        }
    };
    VenueList.prototype.cutCategory = function (str) {
        var s = str.split(" ");
        return s[0];
    };
    VenueList.prototype.format_location_name = function () {
        var locationName = this.location.City_Plain;
        var p1, p2;
        var pos = locationName.lastIndexOf(' ');
        locationName = locationName.substring(0, pos) + ', ' + locationName.substring(pos + 1);
        p1 = locationName.slice(0, locationName.length - 2);
        p2 = locationName.slice(locationName.length - 2);
        p2 = p2.toUpperCase();
        this.location.City_Plain = p1 + p2;
    };
    VenueList.prototype.change_type = function (type) {
        this.content.scrollToTop();
        this.venue_type = type;
        console.log(this.venue_type);
        var self = this;
        self.venueService.get_venues(this.venue_type, this.location, function (venues) {
            self.venues = venues;
            self.setVenueKeys();
            self.select_top_venues();
            self.get_distances(function () { });
        });
    };
    VenueList.prototype.filterFollowers = function (minimumFollowers) {
        var venues = [];
        for (var i = 0; i < this.venues.length; i++) {
            if (this.venues[i].followers > 300) {
                venues.push(this.venues[i]);
            }
        }
        this.venues = venues;
    };
    VenueList.prototype.select_top_venues = function () {
        this.venues = this.utils.order_array_by(this.venues, 'followers');
        console.log(this.location.Population);
        var min, max, divisor;
        var minimumFollowers = 300;
        this.filterFollowers(minimumFollowers);
        if (this.location.Population) {
            if (this.venue_type == "food") {
                min = 2;
                max = 30;
                divisor = 40000;
            }
            else {
                min = 1;
                max = 20;
                divisor = 30000;
            }
            var num_results = Math.round(this.location.Population / divisor);
            if (num_results > max) {
                num_results = max;
            }
            else if (num_results < min) {
                num_results = min;
            }
        }
        else {
            if (this.venue_type == "food") {
                num_results = 10;
            }
            else {
                num_results = 5;
            }
        }
        this.venues = this.venues.slice(0, num_results);
    };
    VenueList.prototype.get_distances = function (callback) {
        var self = this;
        for (var i = 0; i < self.venues.length; i++) {
            self.venues[i].interactions = (Math.round(self.venues[i].followers * 1.38)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            self.venues[i].open_status = self.venueService.check_if_open(self.venues[i]);
            self.venues[i].category.name = self.cutCategory(self.venues[i].category.name);
        }
        this.utils.get_location(function (coords) {
            for (var i = 0; i < self.venues.length; i++) {
                self.venues[i].distance = self.utils.get_distance(self.venues[i].lat, self.venues[i].lng);
                //console.log(this.venues[i].lat,this.venues[i].lng);
                //console.log(this.utils.get_distance(this.venues[i].lat,this.venues[i].lng));
            }
        });
    };
    VenueList.prototype.onSelect = function (venue) {
        var self = this;
        this.venueService.get_venue_media('food', this.location, venue, function (media) {
            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__venue_detail_venue_detail__["a" /* VenueDetail */], {
                venue: venue,
                media: media,
                venue_link: venue.type + "/" + self.location.key + '/' + venue.fbkey
            });
        });
    };
    return VenueList;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], VenueList.prototype, "content", void 0);
VenueList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'venue-list',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/venue-list/venue-list.html"*/'<ion-header>\n\n	<app-header></app-header>\n\n	<div class="button-container fixed-header" style="display:none">\n\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'food\')">\n\n			<img src="assets/icons/scoutFOOD.png"/>\n\n		</button>\n\n		<div class="icon-spacer"></div>\n\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'coffee\')">\n\n			<img src="assets/icons/scoutCOFFEE.png"/>\n\n		</button>\n\n	</div>\n\n</ion-header>\n\n<ion-content>\n\n	<p class="scout-slogan">The most instagrammed independent places in</p>\n\n	<h1 class="location-title">{{location.City_Plain}}</h1>\n\n	<div class="button-container main-container">\n\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'food\')">\n\n			<img src="assets/icons/scoutFOOD.png"/>\n\n		</button>\n\n		<div class="icon-spacer"></div>\n\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'coffee\')">\n\n			<img src="assets/icons/scoutCOFFEE.png"/>\n\n		</button>\n\n	</div>\n\n	<ion-list no-lines>\n\n		<ion-item *ngFor="let venue of venues; let i = index" (click)="onSelect(venue)" class="venue" text-wrap>\n\n			<img class="venue-image" src="{{venue.most_liked_media}}"/>\n\n			<div class="feature">\n\n	  		<div class="price"><span class="pricespan" *ngIf="venue.price == 1">&#36;<span style="color: #ddd">&#36;&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 2">&#36;&#36;<span style="color: #ddd">&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 3">&#36;&#36;&#36;<span style="color: #ddd">&#36;</span></span><span class="pricespan" *ngIf="venue.price == 4">&#36;&#36;&#36;&#36;</span></div>\n\n				<div class="feature-spacer"></div>\n\n				<p class="venue-distance" (click)="open_map()">{{venue.distance}} km </p>\n\n				<div class="feature-spacer"></div>\n\n				<p class="venue-category">{{venue.category.name}}</p>\n\n				<div class="feature-spacer"></div>\n\n				<p *ngIf="venue.open_status == 0" class="open-status">-</p>\n\n				<p *ngIf="venue.open_status == 1" class="open-status"><span style="color: #2ECC71">Open</span></p>\n\n				<p *ngIf="venue.open_status == 2" class="open-status"><span style="color: #EF4836">Closed</span></p>\n\n	  	</div>\n\n			<!-- <p class="venue-distance">{{venue.prediction}}</p>\n\n			<a href="https://instagram.com/{{venue.instagram}}" target="_blank"><p class="venue-distance">{{venue.instagram}}</p></a> -->\n\n			<h1 class="venue-name">{{i+1}}. {{venue.name}}</h1>\n\n			<p class="venue-bio">{{venue.bio}}</p>\n\n			<p class="venue-interactions">{{venue.interactions}} instagrams</p>\n\n			<div class="venue-divider"></div>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/venue-list/venue-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_5__components_header_header_service__["a" /* HeaderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_4__app_util_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_5__components_header_header_service__["a" /* HeaderService */]])
], VenueList);

//# sourceMappingURL=venue-list.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_util_util_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_detail_venue_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NearmePage = (function () {
    function NearmePage(navCtrl, navParams, headerService, venueService, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headerService = headerService;
        this.venueService = venueService;
        this.utils = utils;
        this.headerService.nearmeIcons();
        this.venue_type = "food";
        this.search_radius = 1;
        this.venues = [];
        this.find_nearby_venues();
    }
    NearmePage.prototype.ngAfterViewInit = function () {
        var offset = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.main-container').offset().top;
        this.content.ionScroll.subscribe(function (event) {
            ;
            if (event.scrollTop >= offset) {
                __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.fixed-header').show();
                //jQuery('.list').addClass("buttonPadded");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.fixed-header').hide();
            }
        });
    };
    NearmePage.prototype.cutCategory = function (str) {
        var s = str.split(" ");
        return s[0];
    };
    NearmePage.prototype.add_venue = function (venue) {
        venue.interactions = (Math.round(venue.followers * 1.38)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        venue.open_status = this.venueService.check_if_open(venue);
        venue.distance = this.utils.get_distance(venue.lat, venue.lng);
        venue.category.name = this.cutCategory(venue.category.name);
        this.venues.push(venue);
        console.log(venue);
    };
    NearmePage.prototype.find_nearby_venues = function () {
        var self = this;
        this.venueService.get_venues_within_range(this.search_radius, this.venue_type, function (venue) {
            if (self.venue_type == 'coffee') {
                if (venue.name != undefined && venue.followers > 300 && self.venues.length < 10) {
                    self.add_venue(venue);
                }
            }
            else {
                if (venue.name != undefined && venue.followers > 300 && self.venues.length < 25) {
                    self.add_venue(venue);
                }
            }
            console.log(self.venues);
            self.venues.sort(self.compareDistance);
            //self.utils.order_array_by(self.venues, 'distance');
            //self.venues.reverse();
        });
    };
    NearmePage.prototype.compareDistance = function (a, b) {
        console.log("a:");
        console.log(a);
        if (a.distance < b.distance)
            return -1;
        if (a.distance > b.distance)
            return 1;
        return 0;
    };
    NearmePage.prototype.change_type = function (type) {
        this.venue_type = type;
        this.venues = [];
        this.find_nearby_venues();
    };
    NearmePage.prototype.onSelect = function (venue) {
        var self = this;
        console.log(venue);
        var key = venue.location.replace(/\s/g, "").toLowerCase();
        this.venueService.get_venue_nearme_media('food', key, venue, function (media) {
            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__venue_detail_venue_detail__["a" /* VenueDetail */], {
                venue: venue,
                media: media,
                venue_link: venue.type + "/" + self.utils.generate_key(venue.location) + "/" + venue.fbkey
            });
        });
    };
    return NearmePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], NearmePage.prototype, "content", void 0);
NearmePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nearme',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/nearme/nearme.html"*/'<ion-header>\n	<app-header></app-header>\n	<div class="button-container fixed-header" style="display:none">\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'food\')">\n			<img src="assets/icons/scoutFOOD.png"/>\n		</button>\n		<div class="icon-spacer"></div>\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'coffee\')">\n			<img src="assets/icons/scoutCOFFEE.png"/>\n		</button>\n	</div>\n</ion-header>\n<ion-content padding>\n	<p class="scout-slogan">The most instagrammed independent places near you</p>\n	<div class="button-container main-container">\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'food\')">\n			<img src="assets/icons/scoutFOOD.png"/>\n		</button>\n		<div class="icon-spacer"></div>\n		<button ion-button clear class="radio-button" mode="md" (click)="change_type(\'coffee\')">\n			<img src="assets/icons/scoutCOFFEE.png"/>\n		</button>\n	</div>\n	<ion-list no-lines>\n		<div *ngIf="venues.length == 0" class="spinner-wrapper"><ion-spinner></ion-spinner></div>\n		<ion-item *ngFor="let venue of venues; let i = index" (click)="onSelect(venue)" class="venue" text-wrap>\n			<img class="venue-image" src="{{venue.most_liked_media}}"/>\n			<div class="feature">\n	  		<div class="price"><span class="pricespan" *ngIf="venue.price == 1">&#36;<span style="color: #ddd">&#36;&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 2">&#36;&#36;<span style="color: #ddd">&#36;&#36;</span></span><span class="pricespan" *ngIf="venue.price == 3">&#36;&#36;&#36;<span style="color: #ddd">&#36;</span></span><span class="pricespan" *ngIf="venue.price == 4">&#36;&#36;&#36;&#36;</span></div>\n				<div class="feature-spacer"></div>\n				<p class="venue-distance" (click)="open_map()">{{venue.distance}} km </p>\n				<div class="feature-spacer"></div>\n				<p class="venue-category">{{venue.category.name}}</p>\n				<div class="feature-spacer"></div>\n				<p *ngIf="venue.open_status == 0" class="open-status">-</p>\n				<p *ngIf="venue.open_status == 1" class="open-status"><span style="color: #2ECC71">Open</span></p>\n				<p *ngIf="venue.open_status == 2" class="open-status"><span style="color: #EF4836">Closed</span></p>\n	  	</div>\n			<!-- <p class="venue-distance">{{venue.prediction}}</p>\n			<a href="https://instagram.com/{{venue.instagram}}" target="_blank"><p class="venue-distance">{{venue.instagram}}</p></a> -->\n			<h1 class="venue-name">{{i+1}}. {{venue.name}}</h1>\n			<p class="venue-bio">{{venue.bio}}</p>\n			<p class="venue-interactions">{{venue.interactions}} instagrams</p>\n			<div class="venue-divider"></div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/nearme/nearme.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_2__components_header_header_service__["a" /* HeaderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__components_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_3__app_util_util_service__["a" /* UtilService */]])
], NearmePage);

//# sourceMappingURL=nearme.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, login) {
        this.navCtrl = navCtrl;
        this.login = login;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onLoginClick = function (location) {
        var self = this;
        this.login.login(function () {
            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/login/login.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n	  <ion-title>Login</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<button ion-button full icon-left (click)="loginFB()"><ion-icon name="lock"></ion-icon>Login With Facebook</button>\n\n\n\n	<ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n\n    <img [src]="userData.picture" />\n\n    <ion-card-content>\n\n      <p>Email: {{ userData.email }}</p>\n\n      <p>First Name: {{ userData.first_name }}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_detail_venue_detail__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, headerService, profileService, venueService) {
        this.navCtrl = navCtrl;
        this.headerService = headerService;
        this.profileService = profileService;
        this.venueService = venueService;
        this.headerService.profileIcons();
        this.favorite_venues = [];
        this.favorite_links = [];
        this.favs = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.setupProfile();
    };
    ProfilePage.prototype.pipeFavorites = function () {
        this.favs = [];
        for (var i = 0; i < this.favorite_venues.length; i++) {
            if (i == this.favorite_venues.length - 1 && i % 2 == 0) {
                this.favs.push([this.favorite_venues[i], { "link": "", "venue": "", "bio": "", "followers": 0, "key": "" }]);
                continue;
            }
            if (i % 2 == 0) {
                this.favs.push([this.favorite_venues[i], this.favorite_venues[i + 1]]);
            }
        }
    };
    ProfilePage.prototype.setupProfile = function () {
        var self = this;
        this.getProfileInfo(function () {
            self.profileService.getFavoritesSubscribe(self.id, function (favorites) {
                self.favorite_links = [];
                self.favorite_venues = [];
                self.favorite_links = favorites;
                for (var key in favorites) {
                    self.getFavoriteVenue(favorites[key].link, function (venue) {
                        if (venue.most_liked_media) {
                            self.favorite_venues.push({
                                link: favorites[key].link,
                                venue: venue,
                                present: true
                            });
                        }
                        self.pipeFavorites();
                    });
                }
            });
        });
    };
    ProfilePage.prototype.getProfileInfo = function (callback) {
        var self = this;
        this.profileService.checkUser(function (profile) {
            self.id = profile.id;
            self.name = profile.name;
            self.email = profile.email;
            self.profile_picture = profile.picture;
            callback();
        });
    };
    ProfilePage.prototype.getFavoriteVenue = function (link, callback) {
        this.venueService.get_favorite_venue(link, function (venue) {
            callback(venue);
        });
    };
    ProfilePage.prototype.getProfileFavorites = function (i, favorites, callback) {
        var self = this;
        this.venueService.get_favorite_venue(this.favorite_links[i].link, function (venue) {
            favorites.push({
                link: self.favorite_links[i].link,
                venue: venue,
                present: true //used for the template
            });
            i++;
            if (i < self.favorite_links.length) {
                self.getProfileFavorites(i, favorites, callback);
            }
            else {
                callback(favorites);
            }
        });
    };
    ProfilePage.prototype.openFavorite = function (favorite) {
        console.log(favorite);
        var parts = favorite.link.split('/');
        var media_link = 'media/' + parts[1] + '/' + favorite.venue.key;
        var self = this;
        this.venueService.get_favorite_venue_media(media_link, function (media) {
            self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__venue_detail_venue_detail__["a" /* VenueDetail */], {
                venue: favorite.venue,
                media: media,
                venue_link: favorite.link
            });
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'profile-page',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/profile/profile.html"*/'<ion-header>\n	<app-header></app-header>\n</ion-header>\n<ion-content padding>\n	<div class="profile">\n		<img class="profile-image" src={{profile_picture}}/>\n		<h1 class="profile-name">{{name}}</h1>\n		<p class="profile-bio">&#x270C;</p>\n	</div>\n	<div class="divider"></div>\n	<div class="favorites">\n		<h1 class="favorites-title">Favorites</h1>\n		<ion-grid>\n			<ion-row *ngFor="let f of favs">\n				<ion-col col-6>\n					<img class="favorites-image" src={{f[0].venue.most_liked_media}} (click)="openFavorite(f[0])" />\n					<p class="favorites-name" (click)="openFavorite(f[0])">{{f[0].venue.name}}</p>\n					<p class="favorites-location">{{f[0].venue.location}}</p>\n				</ion-col>\n				<ion-col col-6>\n					<img class="favorites-image" src={{f[1].venue.most_liked_media}} (click)="openFavorite(f[1])" />\n					<p class="favorites-name" (click)="openFavorite(f[1])">{{f[1].venue.name}}</p>\n					<p class="favorites-location">{{f[1].venue.location}}</p>\n				</ion-col>\n				<!--<ion-col col-6>\n		    		<img class="favorites-image" src={{favorite_venues[i+1].venue.most_liked_media}} (click)="openFavorite(favorite_venues[i+1])"/>\n		    		<p class="favorites-name" (click)="openFavorite(favorite_venues[i+1])">{{favorite_venues[i+1].venue.name}}</p>\n		    	</ion-col>-->\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__components_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__["a" /* VenueService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__components_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__app_venues_venue_service__["a" /* VenueService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(518);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_venue_list_venue_list__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_venue_detail_venue_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nearme_nearme__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__venues_venue_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_util_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_firebase__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_cloud_angular__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//666bcf1d
/*Pro.init('666bcf1d', {
  appVersion: '0.1'
})*/
/*@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}*/
// Initialize Firebase
var firebase_config = {
    apiKey: "AIzaSyA1S5Zv48ciri4AvvLC1aNBsQr21IXi2UQ",
    authDomain: "scout-f7b83.firebaseapp.com",
    databaseURL: "https://scout-f7b83.firebaseio.com",
    projectId: "scout-f7b83",
    storageBucket: "scout-f7b83.appspot.com",
    messagingSenderId: "166508255488"
};
var cloudSettings = {
    'core': {
        'app_id': '280e91b9'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_venue_list_venue_list__["a" /* VenueList */],
            __WEBPACK_IMPORTED_MODULE_10__pages_venue_detail_venue_detail__["a" /* VenueDetail */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_nearme_nearme__["a" /* NearmePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase_config),
            __WEBPACK_IMPORTED_MODULE_22__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_venue_list_venue_list__["a" /* VenueList */],
            __WEBPACK_IMPORTED_MODULE_10__pages_venue_detail_venue_detail__["a" /* VenueDetail */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_nearme_nearme__["a" /* NearmePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_15__venues_venue_service__["a" /* VenueService */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_16__util_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //forever start /usr/local/bin/http-server /home/ec2-user/scout-demo/www
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__["a" /* SplashPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
                statusBar.styleDefault();
            }
            splashScreen.hide();
            TestFairy.begin("7a5cb39e8543159f61ffe5483fe5f0e9f1c22d33");
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_util_util_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VenueService = (function () {
    function VenueService(afd, utils) {
        this.afd = afd;
        this.utils = utils;
        this.dbRef = this.afd.list('/venue_locations');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef.$ref);
        this.venues = [];
    }
    VenueService.prototype.check_if_open = function (venue) {
        if (typeof venue.opening_hours === "string") {
            return 0; //unknown
        }
        var timeValue = 0;
        var currentTime = new Date();
        var currentDay = currentTime.getDay();
        if (currentDay == 0) {
            currentDay = 7;
        }
        timeValue += currentTime.getHours() * 100;
        timeValue += currentTime.getMinutes();
        for (var key in venue.opening_hours) {
            var obj = venue.opening_hours[key];
            for (var i = 0; i < obj.days.length; i++) {
                if (obj.days[i] == currentDay) {
                    var start = obj.open[0].start;
                    var end = obj.open[0].end;
                    if (start < timeValue && timeValue < end) {
                        return 1; //open
                    }
                    else {
                        return 2; //closed
                    }
                }
            }
        }
        return 0; //unknown
    };
    VenueService.prototype.get_venues_within_range = function (range, type, callback) {
        var self = this;
        this.utils.get_location(function (resp) {
            self.geoQuery = self.geoFire.query({
                center: [resp.lat, resp.lng],
                radius: 25
            });
            self.geoQuery.on("key_entered", function (key, location, distance) {
                self.afd.object('/alldata/' + type + '/' + key).subscribe(function (venue) {
                    console.log(venue);
                    callback(venue);
                });
            });
        });
    };
    VenueService.prototype.get_venues = function (type, location, callback) {
        var venues = this.afd.object('/' + type + '/' + location.key, { preserveSnapshot: true });
        venues.subscribe(function (snapshot) {
            console.log(snapshot.val());
            callback(snapshot.val());
        });
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.afd.list('/venue_locations').$ref);
    };
    VenueService.prototype.get_venue_price = function (type, venueID) {
        this.httpGet("https://api.foursquare.com/v2/venues/" + venueID, function (body) {
            return body.response.venue.price.tier;
        });
    };
    VenueService.prototype.httpGet = function (theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        };
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    };
    VenueService.prototype.get_favorite_venue = function (venueString, callback) {
        var venue = this.afd.object(venueString, { preserveSnapshot: true });
        venue.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    VenueService.prototype.get_favorite_venue_media = function (venueString, callback) {
        var venue = this.afd.object(venueString, { preserveSnapshot: true });
        venue.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    VenueService.prototype.get_venue_media = function (type, location, venue, callback) {
        var media = this.afd.object('media/' + location.key + '/' + venue.key, { preserveSnapshot: true });
        media.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    VenueService.prototype.get_venue_nearme_media = function (type, key, venue, callback) {
        var media = this.afd.object('media/' + key + '/' + venue.key, { preserveSnapshot: true });
        media.subscribe(function (snapshot) {
            callback(snapshot.val());
        });
    };
    return VenueService;
}());
VenueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__app_util_util_service__["a" /* UtilService */]])
], VenueService);

//# sourceMappingURL=venue.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//import { Geolocation } from 'ionic-native';


var UtilService = (function () {
    function UtilService(geolocation, platform) {
        this.geolocation = geolocation;
        this.platform = platform;
        this.browser = true;
    }
    UtilService.prototype.get_location = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var coords;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.lat == undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition({ enableHighAccuracy: false })];
                    case 2:
                        coords = (_a.sent()).coords;
                        this.lat = coords.latitude;
                        this.lng = coords.longitude;
                        _a.label = 3;
                    case 3:
                        console.log(this.lat + ", " + this.lng);
                        callback({ lat: this.lat, lng: this.lng });
                        return [2 /*return*/];
                }
            });
        });
    };
    UtilService.prototype.get_distance = function (lat, lng) {
        var dist = this.calculate_distance(this.lat, this.lng, lat, lng);
        console.log(this.lat, this.lng, lat, lng);
        //console.log(dist);
        return dist;
    };
    UtilService.prototype.calculate_distance = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // this.deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return parseFloat(d.toFixed(2));
    };
    UtilService.prototype.order_array_by = function (input, attribute) {
        var array = [];
        for (var objectKey in input) {
            array.push(input[objectKey]);
        }
        array.sort(function (a, b) {
            a = parseInt(a[attribute]);
            b = parseInt(b[attribute]);
            return b - a;
        });
        return array;
    };
    UtilService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    UtilService.prototype.generate_key = function (k) {
        return k.replace(/\s/g, '').toLowerCase();
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_locations__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationService = (function () {
    function LocationService(afd) {
        this.afd = afd;
    }
    LocationService.prototype.getSearchLocations = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__search_locations__["a" /* LOCATIONS */]);
    };
    LocationService.prototype.getFirebaseLocation = function (location, callback) {
        console.log(location);
        var loc = this.afd.object('/locations/' + location.key, { preserveSnapshot: true });
        loc.subscribe(function (snapshot) {
            console.log(snapshot.val());
            callback(snapshot.val());
        });
    };
    LocationService.prototype.getListOfLocations = function (callback) {
        var loc = this.afd.object('/locations', { preserveSnapshot: true });
        loc.subscribe(function (snapshot) {
            console.log(snapshot.val());
            callback(snapshot.val());
        });
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], LocationService);

//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCATIONS; });
//export const LOCATIONS: SearchLocation[] = [{"key":"dublincity","name":"Dublin City"},{"key":"abbeywood","name":"Abbey Wood"},{"key":"abbotslangley","name":"Abbots Langley"},{"key":"abercarn","name":"Abercarn"},{"key":"aberdare","name":"Aberdare"},{"key":"aberdeen","name":"Aberdeen"},{"key":"abergavenny","name":"Abergavenny"},{"key":"abergele","name":"Abergele"},{"key":"aberkenfig","name":"Aberkenfig"},{"key":"abertillery","name":"Abertillery"},{"key":"aberystwyth","name":"Aberystwyth"},{"key":"abingdon","name":"Abingdon"},{"key":"abram","name":"Abram"},{"key":"accrington","name":"Accrington"},{"key":"acocksgreen","name":"Acocks Green"},{"key":"acton","name":"Acton"},{"key":"addlestone","name":"Addlestone"},{"key":"adwicklestreet","name":"Adwick le Street"},{"key":"airdrie","name":"Airdrie"},{"key":"aldershot","name":"Aldershot"},{"key":"aldridge","name":"Aldridge"},{"key":"alfreton","name":"Alfreton"},{"key":"alloa","name":"Alloa"},{"key":"alsager","name":"Alsager"},{"key":"alton","name":"Alton"},{"key":"altrincham","name":"Altrincham"},{"key":"amersham","name":"Amersham"},{"key":"amershamonthehill","name":"Amersham on the Hill"},{"key":"amesbury","name":"Amesbury"},{"key":"ammanford","name":"Ammanford"},{"key":"ampthill","name":"Ampthill"},{"key":"andover","name":"Andover"},{"key":"annfieldplain","name":"Annfield Plain"},{"key":"antrim","name":"Antrim"},{"key":"arbroath","name":"Arbroath"},{"key":"ardrossan","name":"Ardrossan"},{"key":"armadale","name":"Armadale"},{"key":"armagh","name":"Armagh"},{"key":"armthorpe","name":"Armthorpe"},{"key":"arnold","name":"Arnold"},{"key":"ascot","name":"Ascot"},{"key":"ashbydelazouch","name":"Ashby de la Zouch"},{"key":"ashford","name":"Ashford"},{"key":"ashford","name":"Ashford"},{"key":"ashington","name":"Ashington"},{"key":"ashtead","name":"Ashtead"},{"key":"ashtoninmakerfield","name":"Ashton in Makerfield"},{"key":"ashton-under-lyne","name":"Ashton-under-Lyne"},{"key":"atherstone","name":"Atherstone"},{"key":"atherton","name":"Atherton"},{"key":"attleborough","name":"Attleborough"},{"key":"aylesbury","name":"Aylesbury"},{"key":"ayr","name":"Ayr"},{"key":"bacup","name":"Bacup"},{"key":"baildon","name":"Baildon"},{"key":"baldock","name":"Baldock"},{"key":"ballymena","name":"Ballymena"},{"key":"banbridge","name":"Banbridge"},{"key":"banbury","name":"Banbury"},{"key":"bangor","name":"Bangor"},{"key":"bangor","name":"Bangor"},{"key":"banstead","name":"Banstead"},{"key":"bargoed","name":"Bargoed"},{"key":"barking","name":"Barking"},{"key":"barnet","name":"Barnet"},{"key":"barnham","name":"Barnham"},{"key":"barnoldswick","name":"Barnoldswick"},{"key":"barnsbury","name":"Barnsbury"},{"key":"barnsley","name":"Barnsley"},{"key":"barnstaple","name":"Barnstaple"},{"key":"barrhead","name":"Barrhead"},{"key":"barrowinfurness","name":"Barrow in Furness"},{"key":"barry","name":"Barry"},{"key":"bartleygreen","name":"Bartley Green"},{"key":"bartonuponhumber","name":"Barton upon Humber"},{"key":"basford","name":"Basford"},{"key":"basildon","name":"Basildon"},{"key":"basingstoke","name":"Basingstoke"},{"key":"bath","name":"Bath"},{"key":"bathgate","name":"Bathgate"},{"key":"batley","name":"Batley"},{"key":"battersea","name":"Battersea"},{"key":"bayswater","name":"Bayswater"},{"key":"beaconsfield","name":"Beaconsfield"},{"key":"bearsden","name":"Bearsden"},{"key":"bebington","name":"Bebington"},{"key":"beccles","name":"Beccles"},{"key":"beckenham","name":"Beckenham"},{"key":"becontree","name":"Becontree"},{"key":"bedford","name":"Bedford"},{"key":"bedlington","name":"Bedlington"},{"key":"bedworth","name":"Bedworth"},{"key":"beighton","name":"Beighton"},{"key":"belfast","name":"Belfast"},{"key":"bellshill","name":"Bellshill"},{"key":"belper","name":"Belper"},{"key":"belsizepark","name":"Belsize Park"},{"key":"belvedere","name":"Belvedere"},{"key":"bentley","name":"Bentley"},{"key":"berkhamsted","name":"Berkhamsted"},{"key":"berwick-upon-tweed","name":"Berwick-Upon-Tweed"},{"key":"bethnalgreen","name":"Bethnal Green"},{"key":"beverley","name":"Beverley"},{"key":"bexhill-on-sea","name":"Bexhill-on-Sea"},{"key":"bexley","name":"Bexley"},{"key":"bicester","name":"Bicester"},{"key":"biddulph","name":"Biddulph"},{"key":"bideford","name":"Bideford"},{"key":"bigginhill","name":"Biggin Hill"},{"key":"biggleswade","name":"Biggleswade"},{"key":"billericay","name":"Billericay"},{"key":"billingham","name":"Billingham"},{"key":"bingley","name":"Bingley"},{"key":"birkenhead","name":"Birkenhead"},{"key":"birmingham","name":"Birmingham"},{"key":"bishopauckland","name":"Bishop Auckland"},{"key":"bishopbriggs","name":"Bishopbriggs"},{"key":"bishopscleeve","name":"Bishops Cleeve"},{"key":"bishopsstortford","name":"Bishops Stortford"},{"key":"bishopstoke","name":"Bishopstoke"},{"key":"blackburn","name":"Blackburn"},{"key":"blackheath","name":"Blackheath"},{"key":"blackley","name":"Blackley"},{"key":"blackpool","name":"Blackpool"},{"key":"blackwood","name":"Blackwood"},{"key":"blacon","name":"Blacon"},{"key":"blandfordforum","name":"Blandford Forum"},{"key":"blantyre","name":"Blantyre"},{"key":"blaydon-on-tyne","name":"Blaydon-on-Tyne"},{"key":"bletchley","name":"Bletchley"},{"key":"bloxwich","name":"Bloxwich"},{"key":"blyth","name":"Blyth"},{"key":"bo'ness","name":"Bo'ness"},{"key":"bodmin","name":"Bodmin"},{"key":"bognorregis","name":"Bognor Regis"},{"key":"bolsover","name":"Bolsover"},{"key":"bolton","name":"Bolton"},{"key":"boltonupondearne","name":"Bolton upon Dearne"},{"key":"bonnyrigg","name":"Bonnyrigg"},{"key":"bootle","name":"Bootle"},{"key":"bordon","name":"Bordon"},{"key":"borehamwood","name":"Borehamwood"},{"key":"boston","name":"Boston"},{"key":"boughton","name":"Boughton"},{"key":"bourne","name":"Bourne"},{"key":"bournemouth","name":"Bournemouth"},{"key":"bowthorpe","name":"Bowthorpe"},{"key":"brackley","name":"Brackley"},{"key":"bracknell","name":"Bracknell"},{"key":"bradford","name":"Bradford"},{"key":"braintree","name":"Braintree"},{"key":"bramhall","name":"Bramhall"},{"key":"bredbury","name":"Bredbury"},{"key":"brentford","name":"Brentford"},{"key":"brentwood","name":"Brentwood"},{"key":"bridgend","name":"Bridgend"},{"key":"bridgnorth","name":"Bridgnorth"},{"key":"bridgwater","name":"Bridgwater"},{"key":"bridlington","name":"Bridlington"},{"key":"bridport","name":"Bridport"},{"key":"brierfield","name":"Brierfield"},{"key":"brierleyhill","name":"Brierley Hill"},{"key":"brighouse","name":"Brighouse"},{"key":"brighton","name":"Brighton"},{"key":"bristol","name":"Bristol"},{"key":"britonferry","name":"Briton Ferry"},{"key":"brixham","name":"Brixham"},{"key":"brixton","name":"Brixton"},{"key":"brixtonhill","name":"Brixton Hill"},{"key":"broadfield","name":"Broadfield"},{"key":"broadstairs","name":"Broadstairs"},{"key":"broadstone","name":"Broadstone"},{"key":"bromborough","name":"Bromborough"},{"key":"bromsgrove","name":"Bromsgrove"},{"key":"brough","name":"Brough"},{"key":"brownhills","name":"Brownhills"},{"key":"broxbourne","name":"Broxbourne"},{"key":"broxburn","name":"Broxburn"},{"key":"brymbo","name":"Brymbo"},{"key":"brynmawr","name":"Brynmawr"},{"key":"buckhursthill","name":"Buckhurst Hill"},{"key":"buckingham","name":"Buckingham"},{"key":"buckley","name":"Buckley"},{"key":"burgesshill","name":"Burgess Hill"},{"key":"burnage","name":"Burnage"},{"key":"burnham-on-sea","name":"Burnham-on-Sea"},{"key":"burnley","name":"Burnley"},{"key":"burntwood","name":"Burntwood"},{"key":"burtonupontrent","name":"Burton upon Trent"},{"key":"bury","name":"Bury"},{"key":"burystedmunds","name":"Bury St Edmunds"},{"key":"bushey","name":"Bushey"},{"key":"buxton","name":"Buxton"},{"key":"caerphilly","name":"Caerphilly"},{"key":"caldicot","name":"Caldicot"},{"key":"calne","name":"Calne"},{"key":"camberley","name":"Camberley"},{"key":"camborne","name":"Camborne"},{"key":"cambridge","name":"Cambridge"},{"key":"cambuslang","name":"Cambuslang"},{"key":"camdentown","name":"Camden Town"},{"key":"canarywharf","name":"Canary Wharf"},{"key":"canfordheath","name":"Canford Heath"},{"key":"cannock","name":"Cannock"},{"key":"canterbury","name":"Canterbury"},{"key":"canveyisland","name":"Canvey Island"},{"key":"cardiff","name":"Cardiff"},{"key":"carlisle","name":"Carlisle"},{"key":"carluke","name":"Carluke"},{"key":"carmarthen","name":"Carmarthen"},{"key":"carnoustie","name":"Carnoustie"},{"key":"carrickfergus","name":"Carrickfergus"},{"key":"carshalton","name":"Carshalton"},{"key":"carterton","name":"Carterton"},{"key":"castleford","name":"Castleford"},{"key":"castlereagh","name":"Castlereagh"},{"key":"caterham","name":"Caterham"},{"key":"catterickgarrison","name":"Catterick Garrison"},{"key":"chaffordhundred","name":"Chafford Hundred"},{"key":"chalfontsaintpeter","name":"Chalfont Saint Peter"},{"key":"chapelallerton","name":"Chapel Allerton"},{"key":"chapletown","name":"Chapletown"},{"key":"chard","name":"Chard"},{"key":"charltonkings","name":"Charlton Kings"},{"key":"chatham","name":"Chatham"},{"key":"chatteris","name":"Chatteris"},{"key":"cheadle","name":"Cheadle"},{"key":"cheadlehulme","name":"Cheadle Hulme"},{"key":"cheam","name":"Cheam"},{"key":"cheethamhill","name":"Cheetham Hill"},{"key":"chelmsford","name":"Chelmsford"},{"key":"chelmsleywood","name":"Chelmsley Wood"},{"key":"chelsea","name":"Chelsea"},{"key":"cheltenham","name":"Cheltenham"},{"key":"chepstow","name":"Chepstow"},{"key":"chertsey","name":"Chertsey"},{"key":"chesham","name":"Chesham"},{"key":"cheshunt","name":"Cheshunt"},{"key":"chessington","name":"Chessington"},{"key":"chester","name":"Chester"},{"key":"chester-le-street","name":"Chester-le-Street"},{"key":"chesterfield","name":"Chesterfield"},{"key":"chichester","name":"Chichester"},{"key":"chigwell","name":"Chigwell"},{"key":"chippenham","name":"Chippenham"},{"key":"chippingsodbury","name":"Chipping Sodbury"},{"key":"chislehurst","name":"Chislehurst"},{"key":"chorley","name":"Chorley"},{"key":"chorleywood","name":"Chorleywood"},{"key":"christchurch","name":"Christchurch"},{"key":"churchdown","name":"Churchdown"},{"key":"cinderford","name":"Cinderford"},{"key":"cirencester","name":"Cirencester"},{"key":"clacton-on-sea","name":"Clacton-on-Sea"},{"key":"clayton-le-woods","name":"Clayton-le-Woods"},{"key":"cleckheaton","name":"Cleckheaton"},{"key":"cleethorpes","name":"Cleethorpes"},{"key":"clevedon","name":"Clevedon"},{"key":"cleveleys","name":"Cleveleys"},{"key":"clitheroe","name":"Clitheroe"},{"key":"clydach","name":"Clydach"},{"key":"clydebank","name":"Clydebank"},{"key":"coalville","name":"Coalville"},{"key":"coatbridge","name":"Coatbridge"},{"key":"cobham","name":"Cobham"},{"key":"cockington","name":"Cockington"},{"key":"codicote","name":"Codicote"},{"key":"codsall","name":"Codsall"},{"key":"coity","name":"Coity"},{"key":"collierrow","name":"Collier Row"},{"key":"craigavon","name":"Craigavon"},{"key":"crosby","name":"Crosby"},{"key":"crosshills","name":"Cross Hills"},{"key":"crouchend","name":"Crouch End"},{"key":"crumpsall","name":"Crumpsall"},{"key":"darrashall","name":"Darras Hall"},{"key":"deeside","name":"Deeside"},{"key":"derry","name":"Derry"},{"key":"didsbury","name":"Didsbury"},{"key":"earlshilton","name":"Earl Shilton"},{"key":"earlsfield","name":"Earlsfield"},{"key":"elmpark","name":"Elm Park"},{"key":"erskine","name":"Erskine"},{"key":"ewell","name":"Ewell"},{"key":"failsworth","name":"Failsworth"},{"key":"fallowfield","name":"Fallowfield"},{"key":"featherstone","name":"Featherstone"},{"key":"ferndown","name":"Ferndown"},{"key":"gerrardscross","name":"Gerrards Cross"},{"key":"grangehill","name":"Grange Hill"},{"key":"hadleywood","name":"Hadley Wood"},{"key":"hale","name":"Hale"},{"key":"haroldwood","name":"Harold Wood"},{"key":"harringay","name":"Harringay"},{"key":"haylingisland","name":"Hayling Island"},{"key":"heavitree","name":"Heavitree"},{"key":"hedgeend","name":"Hedge End"},{"key":"heywood","name":"Heywood"},{"key":"highpeak","name":"High Peak"},{"key":"holloway","name":"Holloway"},{"key":"hornchurch","name":"Hornchurch"},{"key":"irvine","name":"Irvine"},{"key":"isleoflewis","name":"Isle of Lewis"},{"key":"isleworth","name":"Isleworth"},{"key":"islington","name":"Islington"},{"key":"ivybridge","name":"Ivybridge"},{"key":"jarrow","name":"Jarrow"},{"key":"johnstone","name":"Johnstone"},{"key":"kearsley","name":"Kearsley"},{"key":"keighley","name":"Keighley"},{"key":"kempston","name":"Kempston"},{"key":"kempstonhardwick","name":"Kempston Hardwick"},{"key":"kendal","name":"Kendal"},{"key":"kenilworth","name":"Kenilworth"},{"key":"kesgrave","name":"Kesgrave"},{"key":"kettering","name":"Kettering"},{"key":"keynsham","name":"Keynsham"},{"key":"kidderminster","name":"Kidderminster"},{"key":"kidlington","name":"Kidlington"},{"key":"kidsgrove","name":"Kidsgrove"},{"key":"kilmarnock","name":"Kilmarnock"},{"key":"kilwinning","name":"Kilwinning"},{"key":"kimberley","name":"Kimberley"},{"key":"king'slynn","name":"King's Lynn"},{"key":"kingsteignton","name":"Kingsteignton"},{"key":"kingstonuponhull","name":"Kingston upon Hull"},{"key":"kingstonuponthames","name":"Kingston upon Thames"},{"key":"kingswinford","name":"Kingswinford"},{"key":"kingswood","name":"Kingswood"},{"key":"kippax","name":"Kippax"},{"key":"kirksandall","name":"Kirk Sandall"},{"key":"kirkby","name":"Kirkby"},{"key":"kirkbyinashfield","name":"Kirkby in Ashfield"},{"key":"kirkcaldy","name":"Kirkcaldy"},{"key":"kirkham","name":"Kirkham"},{"key":"kirkintilloch","name":"Kirkintilloch"},{"key":"knaresborough","name":"Knaresborough"},{"key":"knottingley","name":"Knottingley"},{"key":"knowle","name":"Knowle"},{"key":"knutsford","name":"Knutsford"},{"key":"lancaster","name":"Lancaster"},{"key":"lancing","name":"Lancing"},{"key":"largs","name":"Largs"},{"key":"larkhall","name":"Larkhall"},{"key":"larne","name":"Larne"},{"key":"leatherhead","name":"Leatherhead"},{"key":"leeds","name":"Leeds"},{"key":"leek","name":"Leek"},{"key":"leicester","name":"Leicester"},{"key":"leigh","name":"Leigh"},{"key":"leightonbuzzard","name":"Leighton Buzzard"},{"key":"leominster","name":"Leominster"},{"key":"letchworth","name":"Letchworth"},{"key":"letchworthgardencity","name":"Letchworth Garden City"},{"key":"lewes","name":"Lewes"},{"key":"leyland","name":"Leyland"},{"key":"lichfield","name":"Lichfield"},{"key":"limavady","name":"Limavady"},{"key":"lincoln","name":"Lincoln"},{"key":"linlithgow","name":"Linlithgow"},{"key":"lisburn","name":"Lisburn"},{"key":"litherland","name":"Litherland"},{"key":"littlehulton","name":"Little Hulton"},{"key":"littlelever","name":"Little Lever"},{"key":"littleborough","name":"Littleborough"},{"key":"littlehampton","name":"Littlehampton"},{"key":"liverpool","name":"Liverpool"},{"key":"liversedge","name":"Liversedge"},{"key":"livingston","name":"Livingston"},{"key":"llandudno","name":"Llandudno"},{"key":"llanelli","name":"Llanelli"},{"key":"llantrisant","name":"Llantrisant"},{"key":"llantwitmajor","name":"Llantwit Major"},{"key":"lofthouse","name":"Lofthouse"},{"key":"london","name":"London"},{"key":"londonderrycountyborough","name":"Londonderry County Borough"},{"key":"longeaton","name":"Long Eaton"},{"key":"longfield","name":"Longfield"},{"key":"longsight","name":"Longsight"},{"key":"longton","name":"Longton"},{"key":"loughborough","name":"Loughborough"},{"key":"louth","name":"Louth"},{"key":"lowerearley","name":"Lower Earley"},{"key":"lowestoft","name":"Lowestoft"},{"key":"ludlow","name":"Ludlow"},{"key":"luton","name":"Luton"},{"key":"lymington","name":"Lymington"},{"key":"lymm","name":"Lymm"},{"key":"lythamstannes","name":"Lytham St Annes"},{"key":"mablethorpe","name":"Mablethorpe"},{"key":"macclesfield","name":"Macclesfield"},{"key":"maesteg","name":"Maesteg"},{"key":"maghull","name":"Maghull"},{"key":"maidenhead","name":"Maidenhead"},{"key":"maidstone","name":"Maidstone"},{"key":"maldon","name":"Maldon"},{"key":"maltby","name":"Maltby"},{"key":"manchester","name":"Manchester"},{"key":"mangotsfield","name":"Mangotsfield"},{"key":"mansfield","name":"Mansfield"},{"key":"mansfieldwoodhouse","name":"Mansfield Woodhouse"},{"key":"march","name":"March"},{"key":"margate","name":"Margate"},{"key":"marketdeeping","name":"Market Deeping"},{"key":"marketdrayton","name":"Market Drayton"},{"key":"marketharborough","name":"Market Harborough"},{"key":"marlow","name":"Marlow"},{"key":"marple","name":"Marple"},{"key":"matlock","name":"Matlock"},{"key":"mayfield","name":"Mayfield"},{"key":"melksham","name":"Melksham"},{"key":"meltonmowbray","name":"Melton Mowbray"},{"key":"mendip","name":"Mendip"},{"key":"merthyrtydfil","name":"Merthyr Tydfil"},{"key":"methil","name":"Methil"},{"key":"mexborough","name":"Mexborough"},{"key":"middlesbrough","name":"Middlesbrough"},{"key":"middleton","name":"Middleton"},{"key":"middlewich","name":"Middlewich"},{"key":"midsomernorton","name":"Midsomer Norton"},{"key":"mildenhall","name":"Mildenhall"},{"key":"milfordhaven","name":"Milford Haven"},{"key":"milngavie","name":"Milngavie"},{"key":"milnrow","name":"Milnrow"},{"key":"miltonkeynes","name":"Milton Keynes"},{"key":"minehead","name":"Minehead"},{"key":"mirfield","name":"Mirfield"},{"key":"mitcham","name":"Mitcham"},{"key":"mold","name":"Mold"},{"key":"monmouth","name":"Monmouth"},{"key":"montrose","name":"Montrose"},{"key":"morecambe","name":"Morecambe"},{"key":"moreton","name":"Moreton"},{"key":"morley","name":"Morley"},{"key":"morpeth","name":"Morpeth"},{"key":"motherwell","name":"Motherwell"},{"key":"mountainash","name":"Mountain Ash"},{"key":"mountsorrel","name":"Mountsorrel"},{"key":"musselburgh","name":"Musselburgh"},{"key":"nailsea","name":"Nailsea"},{"key":"nantwich","name":"Nantwich"},{"key":"neath","name":"Neath"},{"key":"nelson","name":"Nelson"},{"key":"nelson","name":"Nelson"},{"key":"neston","name":"Neston"},{"key":"neston","name":"Neston"},{"key":"newmalden","name":"New Malden"},{"key":"newmills","name":"New Mills"},{"key":"newmilton","name":"New Milton"},{"key":"newarkontrent","name":"Newark on Trent"},{"key":"newburn","name":"Newburn"},{"key":"newbury","name":"Newbury"},{"key":"newcastleunderlyme","name":"Newcastle under Lyme"},{"key":"newcastleupontyne","name":"Newcastle upon Tyne"},{"key":"newhaven","name":"Newhaven"},{"key":"newmarket","name":"Newmarket"},{"key":"newport","name":"Newport"},{"key":"newport","name":"Newport"},{"key":"newport","name":"Newport"},{"key":"newportpagnell","name":"Newport Pagnell"},{"key":"newquay","name":"Newquay"},{"key":"newry","name":"Newry"},{"key":"newtonabbot","name":"Newton Abbot"},{"key":"newtonaycliffe","name":"Newton Aycliffe"},{"key":"newtonmearns","name":"Newton Mearns"},{"key":"newton-le-willows","name":"Newton-le-Willows"},{"key":"newtown","name":"Newtown"},{"key":"newtownabbey","name":"Newtownabbey"},{"key":"newtownards","name":"Newtownards"},{"key":"northshields","name":"North Shields"},{"key":"northwalsham","name":"North Walsham"},{"key":"northallerton","name":"Northallerton"},{"key":"northampton","name":"Northampton"},{"key":"northolt","name":"Northolt"},{"key":"northwich","name":"Northwich"},{"key":"norwich","name":"Norwich"},{"key":"nottingham","name":"Nottingham"},{"key":"nuneaton","name":"Nuneaton"},{"key":"oadby","name":"Oadby"},{"key":"oakham","name":"Oakham"},{"key":"oldbury","name":"Oldbury"},{"key":"oldham","name":"Oldham"},{"key":"omagh","name":"Omagh"},{"key":"orkney","name":"Orkney"},{"key":"ormskirk","name":"Ormskirk"},{"key":"orpington","name":"Orpington"},{"key":"ossett","name":"Ossett"},{"key":"oswestry","name":"Oswestry"},{"key":"otley","name":"Otley"},{"key":"oxford","name":"Oxford"},{"key":"oxted","name":"Oxted"},{"key":"padiham","name":"Padiham"},{"key":"paignton","name":"Paignton"},{"key":"paisley","name":"Paisley"},{"key":"peacehaven","name":"Peacehaven"},{"key":"pelsall","name":"Pelsall"},{"key":"penarth","name":"Penarth"},{"key":"penicuik","name":"Penicuik"},{"key":"penistone","name":"Penistone"},{"key":"penrith","name":"Penrith"},{"key":"penzance","name":"Penzance"},{"key":"perth","name":"Perth"},{"key":"peterborough","name":"Peterborough"},{"key":"peterhead","name":"Peterhead"},{"key":"peterlee","name":"Peterlee"},{"key":"petersfield","name":"Petersfield"},{"key":"pinner","name":"Pinner"},{"key":"pinxton","name":"Pinxton"},{"key":"pitsea","name":"Pitsea"},{"key":"plymouth","name":"Plymouth"},{"key":"plymstock","name":"Plymstock"},{"key":"pontefract","name":"Pontefract"},{"key":"ponteland","name":"Ponteland"},{"key":"pontypool","name":"Pontypool"},{"key":"pontypridd","name":"Pontypridd"},{"key":"poole","name":"Poole"},{"key":"portglasgow","name":"Port Glasgow"},{"key":"portadown","name":"Portadown"},{"key":"porthcawl","name":"Porthcawl"},{"key":"portishead","name":"Portishead"},{"key":"portland","name":"Portland"},{"key":"portslade","name":"Portslade"},{"key":"portsmouth","name":"Portsmouth"},{"key":"pottersbar","name":"Potters Bar"},{"key":"poultonlefylde","name":"Poulton le Fylde"},{"key":"poynton","name":"Poynton"},{"key":"prenton","name":"Prenton"},{"key":"prescot","name":"Prescot"},{"key":"prestatyn","name":"Prestatyn"},{"key":"preston","name":"Preston"},{"key":"prestwich","name":"Prestwich"},{"key":"prestwick","name":"Prestwick"},{"key":"prudhoe","name":"Prudhoe"},{"key":"pudsey","name":"Pudsey"},{"key":"purfleet","name":"Purfleet"},{"key":"purley","name":"Purley"},{"key":"pyle","name":"Pyle"},{"key":"radcliffe","name":"Radcliffe"},{"key":"ramsbottom","name":"Ramsbottom"},{"key":"ramsgate","name":"Ramsgate"},{"key":"rawmarsh","name":"Rawmarsh"},{"key":"rawtenstall","name":"Rawtenstall"},{"key":"rayleigh","name":"Rayleigh"},{"key":"reading","name":"Reading"},{"key":"redcar","name":"Redcar"},{"key":"redditch","name":"Redditch"},{"key":"redhill","name":"Redhill"},{"key":"redruth","name":"Redruth"},{"key":"reigate","name":"Reigate"},{"key":"renfrew","name":"Renfrew"},{"key":"rhondda","name":"Rhondda"},{"key":"rhosllanerchrugog","name":"Rhosllanerchrugog"},{"key":"rhyl","name":"Rhyl"},{"key":"rickmansworth","name":"Rickmansworth"},{"key":"ringwood","name":"Ringwood"},{"key":"ripley","name":"Ripley"},{"key":"ripon","name":"Ripon"},{"key":"risca","name":"Risca"},{"key":"rochdale","name":"Rochdale"},{"key":"rochester","name":"Rochester"},{"key":"rochford","name":"Rochford"},{"key":"romsey","name":"Romsey"},{"key":"rossonwye","name":"Ross on Wye"},{"key":"rossendale","name":"Rossendale"},{"key":"rosyth","name":"Rosyth"},{"key":"rotherham","name":"Rotherham"},{"key":"rottingdean","name":"Rottingdean"},{"key":"royalleamingtonspa","name":"Royal Leamington Spa"},{"key":"royaltunbridgewells","name":"Royal Tunbridge Wells"},{"key":"royston","name":"Royston"},{"key":"royton","name":"Royton"},{"key":"rugby","name":"Rugby"},{"key":"rugeley","name":"Rugeley"},{"key":"ruislip","name":"Ruislip"},{"key":"runcorn","name":"Runcorn"},{"key":"rushden","name":"Rushden"},{"key":"rustington","name":"Rustington"},{"key":"rutherglen","name":"Rutherglen"},{"key":"ryde","name":"Ryde"},{"key":"ryhope","name":"Ryhope"},{"key":"ryton","name":"Ryton"},{"key":"saffronwalden","name":"Saffron Walden"},{"key":"saintandrews","name":"Saint Andrews"},{"key":"saintleonards-on-sea","name":"Saint Leonards-on-Sea"},{"key":"saintneots","name":"Saint Neots"},{"key":"saintpeters","name":"Saint Peters"},{"key":"sale","name":"Sale"},{"key":"salford","name":"Salford"},{"key":"salisbury","name":"Salisbury"},{"key":"saltash","name":"Saltash"},{"key":"saltcoats","name":"Saltcoats"},{"key":"sandbach","name":"Sandbach"},{"key":"sandown","name":"Sandown"},{"key":"sandy","name":"Sandy"},{"key":"scarborough","name":"Scarborough"},{"key":"scunthorpe","name":"Scunthorpe"},{"key":"seaford","name":"Seaford"},{"key":"seaham","name":"Seaham"},{"key":"selby","name":"Selby"},{"key":"selsey","name":"Selsey"},{"key":"sevenoaks","name":"Sevenoaks"},{"key":"sheerness","name":"Sheerness"},{"key":"sheffield","name":"Sheffield"},{"key":"shefford","name":"Shefford"},{"key":"shepperton","name":"Shepperton"},{"key":"shepshed","name":"Shepshed"},{"key":"sheptonmallet","name":"Shepton Mallet"},{"key":"shetland","name":"Shetland"},{"key":"shipley","name":"Shipley"},{"key":"shirebrook","name":"Shirebrook"},{"key":"shirley","name":"Shirley"},{"key":"shoreham-by-sea","name":"Shoreham-by-Sea"},{"key":"shrewsbury","name":"Shrewsbury"},{"key":"sidcup","name":"Sidcup"},{"key":"sidmouth","name":"Sidmouth"},{"key":"sittingbourne","name":"Sittingbourne"},{"key":"skegness","name":"Skegness"},{"key":"skelmersdale","name":"Skelmersdale"},{"key":"skipton","name":"Skipton"},{"key":"sleaford","name":"Sleaford"},{"key":"slough","name":"Slough"},{"key":"smethwick","name":"Smethwick"},{"key":"snodland","name":"Snodland"},{"key":"solihull","name":"Solihull"},{"key":"southbenfleet","name":"South Benfleet"},{"key":"southcroydon","name":"South Croydon"},{"key":"southelmsall","name":"South Elmsall"},{"key":"southhayling","name":"South Hayling"},{"key":"southockendon","name":"South Ockendon"},{"key":"southshields","name":"South Shields"},{"key":"southall","name":"Southall"},{"key":"southampton","name":"Southampton"},{"key":"southend-on-sea","name":"Southend-on-Sea"},{"key":"southport","name":"Southport"},{"key":"southsea","name":"Southsea"},{"key":"spalding","name":"Spalding"},{"key":"spennymoor","name":"Spennymoor"},{"key":"stalbans","name":"St Albans"},{"key":"staustell","name":"St Austell"},{"key":"sthelens","name":"St Helens"},{"key":"stafford","name":"Stafford"},{"key":"staines","name":"Staines"},{"key":"stalybridge","name":"Stalybridge"},{"key":"stamford","name":"Stamford"},{"key":"stanford-le-hope","name":"Stanford-le-Hope"},{"key":"stanley","name":"Stanley"},{"key":"staveley","name":"Staveley"},{"key":"stenhousemuir","name":"Stenhousemuir"},{"key":"stevenage","name":"Stevenage"},{"key":"stirling","name":"Stirling"},{"key":"stockport","name":"Stockport"},{"key":"stocksbridge","name":"Stocksbridge"},{"key":"stockton-on-tees","name":"Stockton-on-Tees"},{"key":"stokegifford","name":"Stoke Gifford"},{"key":"stoke-on-trent","name":"Stoke-on-Trent"},{"key":"stone","name":"Stone"},{"key":"stonehaven","name":"Stonehaven"},{"key":"stourbridge","name":"Stourbridge"},{"key":"stourport-on-severn","name":"Stourport-on-Severn"},{"key":"stowmarket","name":"Stowmarket"},{"key":"strabane","name":"Strabane"},{"key":"stranraer","name":"Stranraer"},{"key":"surbiton","name":"Surbiton"},{"key":"telford","name":"Telford"},{"key":"theboldons","name":"The Boldons"},{"key":"thornton-cleveleys","name":"Thornton-Cleveleys"},{"key":"tonypandy","name":"Tonypandy"},{"key":"uckfield","name":"Uckfield"},{"key":"upminster","name":"Upminster"},{"key":"uxbridge","name":"Uxbridge"},{"key":"valeofleven","name":"Vale of Leven"},{"key":"verwood","name":"Verwood"},{"key":"viewpark","name":"Viewpark"},{"key":"wakefield","name":"Wakefield"},{"key":"walkden","name":"Walkden"},{"key":"wallasey","name":"Wallasey"},{"key":"wallingford","name":"Wallingford"},{"key":"wallsend","name":"Wallsend"},{"key":"walsall","name":"Walsall"},{"key":"walthamabbey","name":"Waltham Abbey"},{"key":"walthamcross","name":"Waltham Cross"},{"key":"walton-on-thames","name":"Walton-on-Thames"},{"key":"walton-on-the-naze","name":"Walton-on-the-Naze"},{"key":"wantage","name":"Wantage"},{"key":"ware","name":"Ware"},{"key":"warminster","name":"Warminster"},{"key":"warrington","name":"Warrington"},{"key":"warwick","name":"Warwick"},{"key":"washington","name":"Washington"},{"key":"waterlooville","name":"Waterlooville"},{"key":"watford","name":"Watford"},{"key":"wathupondearne","name":"Wath upon Dearne"},{"key":"wednesbury","name":"Wednesbury"},{"key":"wednesfield","name":"Wednesfield"},{"key":"welling","name":"Welling"},{"key":"wellingborough","name":"Wellingborough"},{"key":"wellington","name":"Wellington"},{"key":"wells","name":"Wells"},{"key":"welwyngardencity","name":"Welwyn Garden City"},{"key":"westbridgford","name":"West Bridgford"},{"key":"westbromwich","name":"West Bromwich"},{"key":"westdrayton","name":"West Drayton"},{"key":"westendoflondon","name":"West End of London"},{"key":"westmolesey","name":"West Molesey"},{"key":"westwickham","name":"West Wickham"},{"key":"westbury","name":"Westbury"},{"key":"westhill","name":"Westhill"},{"key":"westhoughton","name":"Westhoughton"},{"key":"weston-super-mare","name":"Weston-super-Mare"},{"key":"wetherby","name":"Wetherby"},{"key":"weybridge","name":"Weybridge"},{"key":"weymouth","name":"Weymouth"},{"key":"whickham","name":"Whickham"},{"key":"whitburn","name":"Whitburn"},{"key":"whitby","name":"Whitby"},{"key":"whitefield","name":"Whitefield"},{"key":"whitehaven","name":"Whitehaven"},{"key":"whitleybay","name":"Whitley Bay"},{"key":"whitstable","name":"Whitstable"},{"key":"whittlesey","name":"Whittlesey"},{"key":"wickford","name":"Wickford"},{"key":"widnes","name":"Widnes"},{"key":"wigan","name":"Wigan"},{"key":"wigstonmagna","name":"Wigston Magna"},{"key":"willenhall","name":"Willenhall"},{"key":"wilmslow","name":"Wilmslow"},{"key":"wimborneminster","name":"Wimborne Minster"},{"key":"yateley","name":"Yateley"},{"key":"ystradgynlais","name":"Ystradgynlais"}]
var LOCATIONS = [{ "key": "brightonuk", "name": "Brighton" }, { "key": "chichesteruk", "name": "Chichester" }, { "key": "swanageuk", "name": "Swanage" }, { "key": "porthlevenuk", "name": "Porthleven" }, { "key": "dublincity", "name": "Dublin City" }, { "key": "bristol", "name": "Bristol" }, { "key": "edinburghuk", "name": "Edinburgh" }];
//# sourceMappingURL=search-locations.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(navCtrl, headerService) {
        this.navCtrl = navCtrl;
        this.headerService = headerService;
    }
    HeaderComponent.prototype.back = function () {
        this.navCtrl.pop();
    };
    HeaderComponent.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    HeaderComponent.prototype.account = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */]);
    };
    HeaderComponent.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComponent.prototype.map = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',template:/*ion-inline-start:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/components/header/header.component.html"*/'<ion-navbar mode="md" color="light">\n\n	<div class="nav-left nav-icon-container">\n\n		<img class="nav-icon nav-back" src="assets/icons/scoutBACK.png" *ngIf="headerService.show_left_back" (click)="back()"/>\n\n		<img class="nav-icon nav-search" src="assets/icons/scoutSEARCH.png" *ngIf="headerService.show_left_search" (click)="search()"/>\n\n		<img class="nav-icon nav-account" src="assets/icons/scoutACCOUNT.png" *ngIf="headerService.show_left_account" (click)="account()"/>\n\n	</div>\n\n	<div class="nav-center nav-icon-container">\n\n		<ion-title (click)="search()"><img class=\'logo\' src=\'assets/images/scout-logo.png\'/></ion-title>\n\n	</div>\n\n	<div class="title-divider"></div>\n\n	<div class="nav-right nav-icon-container">\n\n		<img class="nav-icon nav-back" src="assets/icons/scoutBACK.png" *ngIf="headerService.show_right_back" (click)="back()"/>\n\n		<img class="nav-icon nav-search" src="assets/icons/scoutSEARCH.png" *ngIf="headerService.show__right_search" (click)="search()"/>\n\n		<img class="nav-icon nav-account" src="assets/icons/scoutACCOUNT.png" *ngIf="headerService.show_right_account" (click)="account()"/>\n\n		<!--<img class="nav-icon nav-map" src="../assets/icons/scoutPIN.png" *ngIf="headerService.show_map" (click)="map()"/>-->\n\n	</div>\n\n</ion-navbar>\n\n'/*ion-inline-end:"/Users/Jordan/Documents/Uni/Work/SquareStudio/scout-demo/src/components/header/header.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__header_service__["a" /* HeaderService */]])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ })

},[513]);
//# sourceMappingURL=main.js.map