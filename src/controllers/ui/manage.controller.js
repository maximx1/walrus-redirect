import { Get, Post, Controller, Bind, Dependencies, Param, Res, Body } from '@nestjs/common';
import { RedirectMemDao } from '../../data/redirect.dao';

@Controller('ui')
@Dependencies(RedirectMemDao)
export class UIController {
  constructor(redirectDao) {
    this.redirectDao = redirectDao;
  }

	@Get('manage')
  @Bind(Res())
	list(res, obj) {
    let model = (obj != null) ? obj : {}
    model.list = this.redirectDao.findAll();
    res.render('manager', model);
  }

  @Post('manage')
  @Bind(Res(), Body())
  handleCreate(res, body) {
    this.list(res, { message: this.redirectDao.create(body.url, body.optionalId) });
  }

  //TODO: I know, I know.
  @Get('manage/create/:url')
  @Bind(Param())
  create(params) {
    return this.redirectDao.create(params.url);
  }
}
