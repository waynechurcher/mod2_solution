loadAPI: Promise<any>;

constructor() {
    this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
    });
}

function testAction(){
var number = 131;
console.log("HELLO!!!! number is:" + number);
return number

}
