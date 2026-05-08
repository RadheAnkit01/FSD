let ax =123
var b = 321
// window.a =a
// console.log(window.a)
// console.log(a)

let getObj = (function(){
    var a = 341
    return {
        getVal : function(){
            return a
        }
    }
})()
window.getObj = getObj
//use of export import
// export default ax

export {
    ax,b,getObj
}