const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


let sortedRobots = robots.map(function(robot){
  let ret = new Object
  if(knownDecepticons.includes(robot.name)){
    ret.name = robot.name
    ret.alliance = 'decepticon'
  }else {
    ret.name = robot.name
    ret.alliance = 'autobot'
  }
  // debugger;
  return ret
});

let coloredZebraStripes = zebraStripes.map(function(stripe, index){
  if(index % 2 ===  0){
    return {width: stripe.width, color: 'black'};
  }else {
    return {width: stripe.width, color: 'white'};
  }
});
