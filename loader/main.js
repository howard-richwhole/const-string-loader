
module.exports = function loader(source) {
    const ruleObj = require('./rule')
    for(const key in ruleObj){
        source = source.replace(new RegExp(key,"g"),ruleObj[key])
    }
    return source
}