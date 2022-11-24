class PlatziReactive{
    constructor(options){
        this.origin = options.data()
    }
mount(){
    document.querySelectorAll('*[p-text]').forEach(el=>{
        this.pText(el,this.origin,el.getAttribute('p-text'))
    })
}

    pText(){}

    pModel(){}
}

var platzi ={
    createApp(options){
        return new PlatziReactive(options)
    }
}