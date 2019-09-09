const AboutMe = {
    install : (Vue,options) => {
        const {job} = options;
        const hobby = options.hobby;
        Vue.prototype.$me = (name,edad) => {
            return `Mi nombre es ${name}, y tengo ${edad} años, trabajo como ${job} y me gusta ${hobby}`;
        }
    }
}

Vue.use(AboutMe,{
    job: 'programador',
    hobby: 'crear e inventar'
})