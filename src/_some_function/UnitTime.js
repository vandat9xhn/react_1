// time change: millisecond
const UnitTime = (time_change) => {
    if(time_change >= 31536000000){
        return Math.floor(time_change / 31536000000) + ' y'
    }
    if(time_change >= 2592000000){
        return Math.floor(time_change / 2592000000) + ' mon'
    }
    if(time_change >= 86400000){
        return Math.floor(time_change / 86400000) + ' d'
    }
    if(time_change >= 3600000){
        return Math.floor(time_change / 3600000) + ' h'
    }
    if(time_change >= 60000){
        return Math.floor(time_change / 60000) + ' m'
    }
    
    return 'Just now'
}

export default UnitTime;