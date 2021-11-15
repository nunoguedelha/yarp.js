var yarp = require('./yarp');

var port1 = yarp.portHandler.open('/yarpjsTest/inertial','bottle');
var port2 = yarp.portHandler.open('/yarpjsTest/left_leg/stateExt:i','bottle');
var port3 = yarp.portHandler.open('/yarpjsTest/left_foot/cartesianEndEffectorWrench:i','bottle');
var port4 = yarp.portHandler.open('/yarpjsTest/right_foot/cartesianEndEffectorWrench:i','bottle');

port1.onRead((data) => {
    console.log(data.toString());
});
port2.onRead((data) => {
    console.log(data.toString());
});
port3.onRead((data) => {
    console.log(data.toString());
});
port4.onRead((data) => {
    console.log(data.toString());
});

// yarp.Network.connect('/icubSim/inertial','/yarpjsTest/inertial');
// yarp.Network.connect('/icubSim/left_leg/stateExt:o','/yarpjsTest/left_leg/stateExt:i');
// yarp.Network.connect('/wholeBodyDynamics/left_foot/cartesianEndEffectorWrench:o','/yarpjsTest/left_foot/cartesianEndEffectorWrench:i');
// yarp.Network.connect('/wholeBodyDynamics/right_foot/cartesianEndEffectorWrench:o','/yarpjsTest/right_foot/cartesianEndEffectorWrench:i');

yarp.Network.connect('/icubSim/inertial','topic://aTopicTest1');
yarp.Network.connect('/icubSim/left_leg/stateExt:o','topic://aTopicTest2');
yarp.Network.connect('/wholeBodyDynamics/left_foot/cartesianEndEffectorWrench:o','topic://aTopicTest3');
yarp.Network.connect('/wholeBodyDynamics/right_foot/cartesianEndEffectorWrench:o','topic://aTopicTest4');
yarp.Network.connect('topic://aTopicTest1','/yarpjsTest/inertial');
yarp.Network.connect('topic://aTopicTest2','/yarpjsTest/left_leg/stateExt:i');
yarp.Network.connect('topic://aTopicTest3','/yarpjsTest/left_foot/cartesianEndEffectorWrench:i');
yarp.Network.connect('topic://aTopicTest4','/yarpjsTest/right_foot/cartesianEndEffectorWrench:i');

process.once('SIGINT', () => {

    yarp.Network.disconnect('/icubSim/inertial','topic://aTopicTest1');
    yarp.Network.disconnect('/icubSim/left_leg/stateExt:o','topic://aTopicTest2');
    yarp.Network.disconnect('/wholeBodyDynamics/left_foot/cartesianEndEffectorWrench:o','topic://aTopicTest3');
    yarp.Network.disconnect('/wholeBodyDynamics/right_foot/cartesianEndEffectorWrench:o','topic://aTopicTest4');
    yarp.Network.disconnect('topic://aTopicTest1','/yarpjsTest/inertial');
    yarp.Network.disconnect('topic://aTopicTest2','/yarpjsTest/left_leg/stateExt:i');
    yarp.Network.disconnect('topic://aTopicTest3','/yarpjsTest/left_foot/cartesianEndEffectorWrench:i');
    yarp.Network.disconnect('topic://aTopicTest4','/yarpjsTest/right_foot/cartesianEndEffectorWrench:i');

    yarp.Network.disconnect('/icubSim/inertial','/yarpjsTest/inertial');
    yarp.Network.disconnect('/icubSim/left_leg/stateExt:o','/yarpjsTest/left_leg/stateExt:i');
    yarp.Network.disconnect('/wholeBodyDynamics/left_foot/cartesianEndEffectorWrench:o','/yarpjsTest/left_foot/cartesianEndEffectorWrench:i');
    yarp.Network.disconnect('/wholeBodyDynamics/right_foot/cartesianEndEffectorWrench:o','/yarpjsTest/right_foot/cartesianEndEffectorWrench:i');

});
