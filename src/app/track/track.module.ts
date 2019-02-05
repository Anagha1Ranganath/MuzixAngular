import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './header/search/search.component';
import { CardComponent } from './card/card.component';
import { CardComponentComponent } from './card-component/card-component.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WishlistComponent, SearchComponent, CardComponent, CardComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    WishlistComponent
  ]
})
export class TrackModule { }
