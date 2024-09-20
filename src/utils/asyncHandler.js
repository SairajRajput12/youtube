const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error))
    }
}



export {asyncHandler};

// const asyncHandler = () => {}

// const asyncHandler = (fn) => async (req,res,next) =>  {
//     try{
//         await fn(req,res,next); 
//     }catch(error){
//         // how to send response 
//         res.status(error.code || 69).json({
//             success:false, 
//             message:error.message
//         }); 
//     }
// }