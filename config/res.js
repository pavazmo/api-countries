
  
function OK200(data, res) {
  return res.status(200).json({
    ok: true,
    message: data,
   });
};
  
  module.exports = {
      OK200
  }