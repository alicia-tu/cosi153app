import Axios from 'axios';

const url="https://damp-springs-29329.herokuapp.com";

const sendFeedback = async (feedback) => {
    const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'serverDemoApp',
                           key:'feedbackDemo',
                           value:feedback,
                          });
    console.dir(response.data);
};

const getFeedback = async (saveFeedback) => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'serverDemoApp',key:'feedbackDemo'});
  console.log('got feedback:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await Axios.post(url+"/cloud/clear",{email:'serverDemoApp'});
};

export {sendFeedback,getFeedback,clearData};