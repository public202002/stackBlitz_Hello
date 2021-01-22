import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import cochcarna from './cochcarna';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(ev => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));

var act1 =  cochcarna.createActivity()
act1.task = ()=>{console.log("act1")}
var act2 =  cochcarna.createActivity()
act2.task = ()=>{console.log("act2")}

act1.finish(act2.exec)

act1.exec()