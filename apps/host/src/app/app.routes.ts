import { Route } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";

export const appRoutes: Route[] = [
  {
    path: '**',
    loadComponent: () =>
      loadRemoteModule('mf1', './Component').then((m) => m.TestComponent),
  },

];
