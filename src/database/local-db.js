import NeDB from 'nedb'
import util from 'util'


export class LocalDB extends NeDB {
    constructor(options){
        super(options)
        this.removeAsync  = util.promisify(this.remove.bind(this))
        this.insertAsync  = util.promisify(this.insert.bind(this))
        this.updateAsync  = util.promisify(this.update.bind(this))
        this.findAsync    = util.promisify(this.find.bind(this))
        this.findOneAsync = util.promisify(this.findOne.bind(this))
    }
};
