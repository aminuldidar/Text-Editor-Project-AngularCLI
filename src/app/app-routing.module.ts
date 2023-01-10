import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'view', component: ViewComponent },
  { path: '', redirectTo: '/editor', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
