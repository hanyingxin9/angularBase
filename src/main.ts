import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//引导启动模块
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
