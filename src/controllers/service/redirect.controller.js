import { Get, Bind, Controller, Param, Res, Dependencies } from '@nestjs/common';
import { RedirectMemDao } from '../../data/redirect.dao';

@Controller()
@Dependencies(RedirectMemDao)
export class RedirectController {
	constructor(redirectDao) {
    this.redirectDao = redirectDao;
  }

	@Get()
	@Bind(Res())
	index(res) {
		return res.redirect('./ui/manage');
	}

	@Get(':id')
	@Bind(Param(), Res())
	handleRedirect(params, res) {
    let redirectUrl = this.redirectDao.findRedirect(params.id);
		if(redirectUrl !== null) {
			res.redirect(302, redirectUrl.startsWith('http:') ? redirectUrl : 'http://' + redirectUrl); //TODO: change back to 301
		} else {
			res.status(404).send('Not found');
		}
  }
}
