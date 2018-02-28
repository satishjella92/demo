import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { PolicyMappingComponent } from "./policy-mapping/policy-mapping.component";




export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PolicyMappingComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
