export default {
	state: {
		asideStatus: true,
		filePath: ""
	},
	mutations: {
		setAside_status(state, value) {
			state.asideStatus = value;
		},
		set_filePath(state, val) {
			state.filePath = val
		}

	},
	actions: {
        getData({commit,state},value){
            commit("set_filePath",value)
        }
	},
	getters: {
		get_asideStatus(state) {
			return state.asideStatus;
		},
		get_filePath(state) {
			return state.filePath
		}
	}
}