const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    return tf.loadGraphModel("file://submissions-model/model.json");
}

module.exports = loadModel;