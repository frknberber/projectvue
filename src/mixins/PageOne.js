export default {
    name:"PageOne",

    props:{
        test1: false,
        test2:false,
    },
    data:function(){
        return {
            control:true,
            flag:false
        }
    },

    created() {
        this.initPage();

    },

    methods:{
        initPage(){
            this.control = false ;
        },
        greet(){
            console.log("testBahadır");
        }
    }



}