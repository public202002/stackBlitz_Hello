var cochcarna = {createActivity:null,
                 createDecision:null};

cochcarna.createActivity = ()=>{
  var _decision = {finish:null, task:null,exec:null}
  var _finish = (context)=>context;
  _decision.finish =(next)=>{
     if(next){_finish=next}
  }
  _decision.task = (context)=>context;
  _decision.exec = (context)=>{
    var retVal = _decision.task(context)
    return _finish(retVal)
  }
  return _decision
}

cochcarna.createDecision = ()=>{
  var _decision = {finishTrue:null, finishFalse:null, 
                   task:null,exec:null}
  var _finishTrue = (context)=>context;
  var _finishFalse = (context)=>context;
  _decision.finishTrue =(next)=>{
    if(next){_finishTrue=next}
 }
 _decision.finishFalse =(next)=>{
  if(next){_finishFalse=next}
 }
 _decision.task = (context)=>{return {decision:null, context:context}};
 _decision.exec = (context)=>{
    var retVal = _decision.task(context)

    if (retVal.decion===true){
      return _finishTrue(retVal.context)
    }
    if (retVal.decion===false){
      return _finishTrue(retVal.context)
    }
    
    // Cochcarna Decision Simple
    throw {error:"Error, wrong decison", description:"see: Cochcarna Decision Simple"}
 } 
 return _decision
}

export default cochcarna
