import axios from 'axios';

export default axios.create({
	// Expires in 8 hours -- 10 am
	baseURL: 'http://87d31987.ngrok.io'
});
