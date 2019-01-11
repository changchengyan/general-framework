export default {
    namespace:true,
	state: {
		flag2: true,
	},
	mutations: {
		set_flag2(state,getters,rootState, value) {
			state.asideStatus = value;
		}

	},
	actions: {
        getData({commit,state},value){
            commit("set_flag2",value)
        }
	},
	getters: {
		get_flag2(state,getters,rootState,rootGetters) {
			return state.flag2;
		}
	}
}