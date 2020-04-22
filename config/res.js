function OK200(data, res) {
  return res.status(200).json({
    ok: true,
    data: data,
   });
};

function error400(err, res) {
    return res.status(400).json({
      ok: false,
      message: 'Error en bbdd, Internal Server Error.',
      errors: err
    });
  };
  
module.exports = {
    OK200,
    error400
}