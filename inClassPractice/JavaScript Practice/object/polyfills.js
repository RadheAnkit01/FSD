var arr = [12,34,23,1,45,745,31]

console.log(arr.includes(12)) //return true

if(!Array.prototype.includes){
    Array.prototype.includes = function(item){
        return this.indexOf(item) !== -1;
    }
}