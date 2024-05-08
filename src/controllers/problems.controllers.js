function ping (req,res){
    return res.json({message:"ping service of routing is up"});
}
function addProblem(req,res){

}
function getProblem(req,res){

}
function getProblems(req,res){

}
function deleteProblem(req,res){

}
function updateProblem(req,res){

}
module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    ping
}