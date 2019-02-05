import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WishlistComponent, SearchComponent],
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
