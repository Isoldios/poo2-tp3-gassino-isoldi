function Letrero(){
    this.totalEncendidas= function(){
        return 0;
    }
    this.encenderLuces = function(){
        this.totalEncendidas= function(){
            return 1;
        }
    }
}

module.exports = Letrero;