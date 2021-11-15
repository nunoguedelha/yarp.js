var yarp = require('./yarp');

var port = yarp.portHandler.open('/yarpjsTest/read','bottle');

port.onRead((data) => {
    console.log(data.toString());
})

yarp.Network.connect('/write','topic://aTopicTest');
yarp.Network.connect('topic://aTopicTest','/yarpjsTest/read');
