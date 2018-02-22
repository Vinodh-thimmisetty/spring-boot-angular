import {NgModule} from '@angular/core';
import {RoutingUsersComponent} from './routing/routing-sample/routing-users/routing-users.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RoutingUserComponent} from './routing/routing-sample/routing-users/routing-user/routing-user.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RoutingSampleComponent} from './routing/routing-sample/routing-sample.component';
import {RouterModule, Routes} from '@angular/router';
import {RoutingHomeComponent} from './routing/routing-sample/routing-home/routing-home.component';
import {RoutingServersComponent} from './routing/routing-sample/routing-servers/routing-servers.component';

const routeSamples1: Routes = [
  { path: 'recipes', // localhost:4200/recipes
    component: RecipesComponent,
    children: [
      { path: '',  // localhost:4200/recipes/1
        component: RecipeListComponent,
        children: [
          { path: ':id', component: RecipeDetailComponent} // localhost:4200/recipes/1
        ]},
    ]
  },
  { path: 'shopping', component: ShoppingListComponent}, // localhost:4200/shopping
  { path: 'routes', // localhost:4200/routes
    component: RoutingSampleComponent,
    children: [
      { path: '', component: RoutingHomeComponent}, // localhost:4200/routes/home
      { path: 'servers', component: RoutingServersComponent}, // localhost:4200/routes/servers
      { path: 'users',
        component: RoutingUsersComponent,
        children: [ // localhost:4200/routes/users
          {path: ':id/:name', component: RoutingUserComponent}, // localhost:4200/routes/users/1/vinodh
          {path: ':id/edit', component: RoutingUserComponent} // localhost:4200/routes/users/1/edit
        ]
      },
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' } // Must exists at End of Routing ( All Unknown Routings)
];
/*
@NgModule({
  imports: [
    RouterModule.forRoot(routeSamples)
  ],
  exports: [
    RouterModule
  ]

})*/
export class AppRoutingModule {

}
