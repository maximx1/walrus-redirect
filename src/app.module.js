import { Module } from '@nestjs/common';
import { RedirectController } from './controllers/service/redirect.controller';
import { UIController } from './controllers/ui/manage.controller';
import { RedirectMemDao } from './data/redirect.dao';

@Module({
  controllers: [
    RedirectController,
    UIController
  ],
  components: [
    RedirectMemDao
  ],
})

export class ApplicationModule {}
