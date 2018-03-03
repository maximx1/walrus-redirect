import { Component } from '@nestjs/common';
import { RedirectModel } from '../models/redirect.model';

@Component()
export class RedirectMemDao {
  constructor() {
		this.redirectdb = [];
    this.currentId = 0; //TODO: Again, I know.
	}

  create(url) {
    this.currentId += 1;
    let newId = "" + this.currentId;
    let newRedirection = new RedirectModel(newId, url);
    this.redirectdb.push(newRedirection);
    return newId;
  }

  findRedirect(id) {
    let possibleMatches = this.redirectdb.filter(x => x.id === id);
    return possibleMatches.length > 0 ? possibleMatches[0].url : null;
  }

  findAll() {
    return this.redirectdb.map(x => x.id);
  }
}
