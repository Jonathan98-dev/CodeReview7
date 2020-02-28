import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//my route components
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
	{ 
		path: '', component: HomeComponent
	},
	{ 
		path: 'blog', component: BlogComponent
	},
	{ 
		path: 'travels', component: TravelComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
