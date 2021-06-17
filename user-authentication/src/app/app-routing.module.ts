import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enviroment',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'enviroment',
    pathMatch: 'prefix',
    loadChildren: () => import('./enviroment/enviroment.module').then( m => m.EnviromentPageModule)
  },
  {
    path: 'embedded',
    pathMatch: 'prefix',
    loadChildren: () => import('./embedded/embedded.module').then( m => m.EmbeddedPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'blocks',
    loadChildren: () => import('./block/block.module').then( m => m.BlockPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
