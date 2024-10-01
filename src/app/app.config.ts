import { provideAnimations } from "@angular/platform-browser/animations";

import { ApplicationConfig, importProvidersFrom } from '@angular/core';




export const appConfig: ApplicationConfig = {
  providers: [provideAnimations()

  ]
};
