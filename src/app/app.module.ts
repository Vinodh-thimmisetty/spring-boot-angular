import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './services/shopping-list.service';
import { RoutingSampleComponent } from './routing/routing-sample/routing-sample.component';
import { RoutingUsersComponent } from './routing/routing-sample/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-sample/routing-servers/routing-servers.component';
import { RoutingHomeComponent } from './routing/routing-sample/routing-home/routing-home.component';
import {RouterModule, Routes} from '@angular/router';
import { RoutingUserComponent } from './routing/routing-sample/routing-users/routing-user/routing-user.component';


const routeSamples: Routes = [
  { path: 'recipes', component: RecipesComponent}, // localhost:4200/recipes
  { path: 'shopping', component: ShoppingListComponent}, // localhost:4200/shopping
  { path: 'routes',
    component: RoutingSampleComponent,
    children: [ // localhost:4200/routes
      {path: '', component: RoutingHomeComponent}, // localhost:4200/routes/home
      {path: 'servers', component: RoutingServersComponent}, // localhost:4200/routes/servers
      {path: 'users', component: RoutingUsersComponent}, // localhost:4200/routes/users
      {path: 'users/:id/:name', component: RoutingUserComponent}, // localhost:4200/routes/users
      {path: 'users/:id/edit', component: RoutingUsersComponent} // localhost:4200/routes/users
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    RoutingSampleComponent,
    RoutingUsersComponent,
    RoutingServersComponent,
    RoutingHomeComponent,
    RoutingUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeSamples)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
