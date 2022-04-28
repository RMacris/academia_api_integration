import  Moment  from  'moment' ;
export class AvaliacaoTemplate{ 
    constructor(
        avalInfo = {
         id: null,
         altura: '', 
         peso: '', 
         massaMuscular: '', 
         taxaGordura: '',
         ombrosE: '',
         ombrosD: '',
         tricipalE: '',
         tricipalD: '',
         peitoral: '',
         cintura: '',
         quadril: '',
         bracoE: '',
         bracoD: '',
         pernaE: '',
         pernaD: '',
         panturrilhaE: '',
         panturrilhaD: '',
         abdomem: '',
         gluteo:  '',
         user_id: '',
         createdAt: '',
         updatedAt: ''
    }
    ) {
        this.id            = this.formatID(avalInfo.id)
        this.altura        = this.format(avalInfo.altura)
        this.peso          = this.format(avalInfo.peso)
        this.massaMuscular = this.format(avalInfo.massaMuscular)
        this.taxaGordura   = this.format(avalInfo.taxaGordura)
        this.ombrosE       = this.format(avalInfo.ombrosE)
        this.ombrosD       = this.format(avalInfo.ombrosD)
        this.tricipalE     = this.format(avalInfo.tricipalE)
        this.tricipalD     = this.format(avalInfo.tricipalD)
        this.peitoral      = this.format(avalInfo.peitoral)
        this.cintura       = this.format(avalInfo.cintura)
        this.quadril       = this.format(avalInfo.quadril)
        this.bracoE        = this.format(avalInfo.bracoE)
        this.bracoD        = this.format(avalInfo.bracoD)
        this.pernaE        = this.format(avalInfo.pernaE)
        this.pernaD        = this.format(avalInfo.pernaD)
        this.panturrilhaE  = this.format(avalInfo.panturrilhaE)
        this.panturrilhaD  = this.format(avalInfo.panturrilhaD)
        this.abdomem       = this.format(avalInfo.abdomem)
        this.gluteo        = this.format(avalInfo.gluteo)
        this.user_id       = this.formatID(avalInfo.user_id)
        this.createdAt     = avalInfo.createdAt
        this.updatedAt     = avalInfo.updatedAt
    }

    setValue(key, value) {
        console.log(this[key])
        this[key] = this.format(value)
    }
    /*
    this function make sure to format the input into a valido sql decimal (2,3)
    */
    format(val) {

        if(val === '') return ''
        if(typeof val === 'string') {
            val = parseFloat(val)
            console.log(val)
        }
        
        if(isNaN(val)) return 0.00
        if(typeof val != `number`) return 0.00
        if(val < 0 || val == null) return ''
        if(val > Number.MAX_SAFE_INTEGER) { 
            // console.warn('The number ' + val + ' exceeds the max safe value')
            return 999.99
        }
        return this.clamp(parseFloat(val.toFixed(2)), 0.00, 999.99)
    }
    formatID(val = 0) {
        if (typeof val != `number`) return null
        if (val < 1) return null
        if (val > Number.MAX_SAFE_INTEGER) {
            return null
        }
        return parseInt(val)
    }
    setUpdatedTime() {
        return Moment().format()
    }
    dateFormat(date) {
        return Moment().format(date)
    }

    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}