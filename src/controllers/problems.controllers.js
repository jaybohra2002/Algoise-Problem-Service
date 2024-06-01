const NotImplemented=require('../errors/notImplemented.error');
const BadRequest=require('../errors/badrequest.error')
const{ StatusCodes }=require('http-status-codes');
function ping (req,res){
    return res.json({message:"ping service of routing is up"});
}
function addProblem(req,res){
    try {
        throw new BadRequest('Problem Name',{missing:["Problem Name"]})
    } catch (error) {
        next(error);
    }

}
function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}
function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}
module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    ping
}