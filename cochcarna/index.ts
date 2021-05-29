var cochcarna = {createActivity:null};
cochcarna.createActivity = ()=>{
  var _activity = {finish:null, task:null,exec:null}
  var _finish = (context)=>context;
  _activity.finish =(next)=>{
     if(next){_finish=next}
  }
  _activity.task = (context)=>context;
  _activity.exec = (context)=>{
    var retVal = _activity.task(context)
    return _finish(retVal)
  }
  return _activity
}

export default cochcarna
