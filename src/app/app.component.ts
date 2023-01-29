import { Component } from '@angular/core';
import arrayWords from 'src/utils/words';
import countryArray from 'src/utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words='';
  limit:number=0;
  handleSlideChange(newLimit:number){
    this.limit=newLimit;
  }
  generate(){
    this.words=arrayWords.slice(0,this.limit).join(" ");
  }
  countries='';
  // countryLimit=0;
  // handleCountryCount(newCount:number){
  //   this.countryLimit=newCount;
  // }
  generateCountries=()=>{
    this.countries=countryArray.slice(0,this.limit).join(",");
  }

}
