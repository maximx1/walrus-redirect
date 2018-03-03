import { Get, Controller, Bind, Dependencies, Param } from '@nestjs/common';
import { RedirectMemDao } from '../../data/redirect.dao';

@Controller('ui')
@Dependencies(RedirectMemDao)
export class UIController {
  constructor(redirectDao) {
    this.redirectDao = redirectDao;
  }

	@Get('manage')
	list() {
    return this.redirectDao.findAll();
  }

  //TODO: I know, I know.
  @Get('manage/create/:url')
  @Bind(Param())
  create(params) {
    return this.redirectDao.create(params.url);
  }
}
