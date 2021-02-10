import Ball from './ball';

export default class Spawn extends Ball {
    constructor(params) {
        super(params);
        this.maxlinespawn = params.maxlinespawn;
    }
}
