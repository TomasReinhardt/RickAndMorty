import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListcharacterComponent } from "./components/listcharacter/listcharacter.component";
import { CharacterComponent } from "./components/character/character.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    {   path: '', component: HomeComponent},
    {   path: 'characters', component:  ListcharacterComponent},
    {   path: 'character/:id', component:  CharacterComponent},
    {   path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
