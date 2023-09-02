const express = require("express");
const ElevatorManager = require("./elevatorManager");

const router = express.Router();
const elevatorManager = new ElevatorManager();

router.get('/elevator/status', (req, res) =>{
  const elevatorsStatus = elevatorManager.getAllStatus();
  //console.log(elevatorsStatus);
  res.send(elevatorsStatus);
  
  res.end();

});

router.put('/elevator/call', (req, res)=>{
  
  const floor = req.body.floor;
  console.log(floor);
  elevatorManager.callElevator(floor);
  res.send(`Call for elevator to floor ${floor} recieved `);
  res.end();
});


module.exports = router;