import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ShoppingListService } from './services/shopping-list.service';
import { RoutingSampleComponent } from './routing/routing-sample/routing-sample.component';
import { RoutingUsersComponent } from './routing/routing-sample/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-sample/routing-servers/routing-servers.component';
import { RoutingHomeComponent } from './routing/routing-sample/routing-home/routing-home.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingUserComponent } from './routing/routing-sample/routing-users/routing-user/routing-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routeSamples: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'}, // localhost:4200/
  { path: 'recipes', // localhost:4200/recipes
    component: RecipesComponent,
    children: [
      { path: '',  // localhost:4200/recipes
        component: RecipeListComponent,
        outlet: 'recipe-list'
      },
      { path: '',  // localhost:4200/recipes
        component: RecipeStartComponent,
        outlet: 'recipe-detail'
      },
      { path: ':id', // localhost:4200/recipes/1
        component: RecipeDetailComponent,
        outlet: 'recipe-detail'
      }
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
  { path: 'template-forms', component: TemplateFormsComponent}, // localhost:4200/shopping
  { path: 'reactive-forms', component: ReactiveFormsComponent}, // localhost:4200/shopping
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' } // Must exists at End of Routing ( All Unknown Routings)
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
    RoutingUserComponent,
    PageNotFoundComponent,
    RecipeStartComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeSamples)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
