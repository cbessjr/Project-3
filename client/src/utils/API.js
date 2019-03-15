import axios from "axios";

export default {
	//Gets all reports
	reports: {
		getReports: function () {
			return axios.get("/api/reports");
		},
		searchState: function (state) {
			return axios.get("/api/" + state);
		},
		searchCity: function (city) {
			return axios.get("/api/" + city);
		},
		createReport: function (reportData) {
			return axios.post("/api/reports", reportData);
		}
	},
	users: {
		createUser: function (userData) {
			return axios.post("/api/users", userData);
		}
	}

}