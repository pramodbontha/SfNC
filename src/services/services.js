import axios from "axios";

export const getDevices = () => {
	return axios.get("devices").then((res) => res.data);
};

export const getDeviceStatistics = (id) => {
	return axios.get("devices/" + id + "/readings").then((res) => res.data);
};
