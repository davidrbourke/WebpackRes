import { Map } from 'immutable';

const immutableResearch = () => {

    var map1 = Map({a:1, b:2, c:3});
    console.log(map1);
    console.log(map1.get('a'));
    console.log(map1.get('b'));
    var map2 = map1.set('a', '4');
    console.log(map1.get('a'));
    console.log(map2.get('a'));
}

export default immutableResearch;