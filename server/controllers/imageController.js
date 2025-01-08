import FormData from "form-data";
import userModel from "../model/userModel.js";
import axios from "axios";
import 'dotenv/config';


export const generateImage = async (req, res) => {
try{
    const {userId, prompt} = req.body;
    const user = await userModel.findById(userId);

    if(!user || !prompt){
        return res.json({success: false, message: "Missing details"});
    }

    if(user.creditBalance === 0 || userModel.creditBalance < 0){
        return res.json({success: false, creditBalance: 0, message: "Insufficient credit balance"});
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

   const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
        headers: {
            'x-api-key': process.env.CLIPDROP_API,
          },
          responseType: 'arraybuffer',
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64, ${base64Image}`;
        

        await userModel.findByIdAndUpdate(userId, {creditBalance: user.creditBalance - 1});

        res.json({success: true,  creditBalance: user.creditBalance - 1, resultImage});


} catch(error){
    console.log(error);
    res.json({success: false, message: `An error occurred: ${error.message}` });
}

}

