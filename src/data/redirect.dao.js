import { Component } from '@nestjs/common';
import { RedirectModel } from '../models/redirect.model';

@Component()
export class RedirectMemDao {
  constructor() {
		this.redirectdb = [];
    this.currentId = 0; //TODO: Again, I know.
	}

  create(url, optionalId) {
    let newRedirection = new RedirectModel(optionalId, url);
    let message = 'New Id: ';
    console.log(this.redirectdb.filter(x => x.id === optionalId));
    if(optionalId == null || this.redirectdb.filter(x => x.id === optionalId).length > 0) {
        newRedirection.id = this.getNewId();
        console.log(optionalId);
        message += newRedirection.id + (optionalId != null) ? ' - The id you wished for was already taken' : '';
    } else {
      message += newRedirection.id;
    }
    this.redirectdb.push(newRedirection);
    return message;
  }

  findRedirect(id) {
    let possibleMatches = this.redirectdb.filter(x => x.id === id);
    return possibleMatches.length > 0 ? possibleMatches[0].url : null;
  }

  findAll() {
    return this.redirectdb.map(x => x.id);
  }

  getNewId() {
    this.currentId += 1;
    return "" + this.currentId;
  }
}
