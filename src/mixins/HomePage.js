


export default {
    name:"ScriptOne",
    msg: "MESSSAGEEEEEE",

    props:{
        test1: false,
        test2:false,
    },

    data:function(){
        return {
            load : false,
            control: true,
            flag: false,
            msg: "MESSSAGEEEEEE",
            name: "dldldldlldlld",
            active: 'home',
            dropDowns: {
                ranking: { open: false},
                institutional: { open: false}
            },
            slides: [
                {
                    title: 'Slide #1',
                    content: 'Slide content.'
                }
            ]
        }
    },

    created() {
        this.initPage();
        console.log("testfurkan");
    },

    methods:{
        initPage(){
            this.control = true ;
        },
        greet(){
            alert('Hello Guys ' + this.name + '!')
            console.log("testBahadır");
        },
        makeActive: function(item){
            this.active = item;
        },
        toggle: function(dropdownName)
        {
            //alert(dropdownName)
            this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
        },

        close: function()
        {
            this.dropDowns.forEach(function (item){
                item.open = false ;
            });
        }

    }

}

