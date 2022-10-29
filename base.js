AFRAME.registerComponent("base",{
    schema:{
        radius:{type:"number",default:150},
        height:{type:"number",default:3}
    },
    init:function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:200,
            height:2
           
        })
        this.el.setAttribute("material", { color: "red" });
    }

})