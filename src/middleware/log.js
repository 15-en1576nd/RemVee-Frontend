/* eslint-disable */
import { publicIpv4 } from 'public-ip';
import axios from 'axios';
import router from '../router';
import { data } from 'autoprefixer';

export default async function log({ next }) {
  // Get public IPv4 address
  const ip = await publicIpv4();
  await axios.post('http://localhost:3000/api/ip', {
    ipaddress: ip,
  }).then((response, err) => {

    // console.log(response.data.allowedIp);
    
    if (response.data.allowedIp === true) {
      console.log('OK');
    } else if (response.data.allowedIp === false) {
      console.log('NOT OK');
      // Return fail message to user
      
      router.push('/');
    } else {
      console.log(err);
    }
  });
  return next();
}
