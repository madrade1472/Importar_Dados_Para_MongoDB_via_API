import logs from "../models/log.js";

class LogController {
  static listarLogs = (req, res) => {
    logs.find((err, logs) => {
      res.status(200).json(logs);
    });
  };

  static listarLogPorId = (req, res) => {
    const id = req.params.id;
    logs.findById(id, (err, logs) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - id não encontrado` });
      }
      res.status(200).send(logs);
    });
  };

  static cadastrarLog = (req, res) => {
    let pessoa = new logs(req.body);
    pessoa.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} = falha ao cadastrar log.` });
      res.status(200).send(log.toJSON());
    });
  };

  static atualizarLog = (req, res) => {
    const id = req.params.id;
    logs.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Log atualizado" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletarLog = (req, res) => {
    const id = req.params.id;
    logs.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Log excluído" });
      }
      else res.status(500).send({ message: err.message });
    });
  };
}

export default LogController;
