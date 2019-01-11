export default {
    namespace:true,
	state: {
		flag: true
	},
	mutations: {
		set_flag(state,getters,rootState, value) {
			state.flag = value;
		}
	},
	actions: {
        getData({commit,state},value){
            commit("set_flag",value)
        }
	},
	getters: {
		get_flag(state,getters,rootState,rootGetters) {
			return state.flag;
		}
	}
}