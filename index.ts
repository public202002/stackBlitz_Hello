import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import cochcarna from './cochcarna';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(ev => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));

//COCHCARNA
var act1 =  cochcarna.createActivity()
act1.task = (num)=>{console.log("act1 " + num); return (num+1)}
var act2 =  cochcarna.createActivity()
act2.task = (num)=>{console.log("act2 " + num);return (num+22)}
//   pipeline
act1.finish(act2.exec)
//   execute
var finVal = act1.exec(1); console.log("finVal " + finVal + " expected 1+1 + 22 = 24")

//test
var actTest =  cochcarna.createActivity()
var testFinish = actTest.exec(77); console.log("actTest " + testFinish)
