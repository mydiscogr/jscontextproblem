var Tst = (function () {
    function Tst() {
        this.var1 = "unmod";
    }
    Tst.prototype.setVar1 = function () {
        this.var1 = "OK";
    };
    return Tst;
})();
module.exports= new Tst();
