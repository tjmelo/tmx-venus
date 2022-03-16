// import data from '../../config/db.json';

exports.handler = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    }
}