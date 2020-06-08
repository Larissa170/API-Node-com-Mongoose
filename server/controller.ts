import model from "./model";

class Controller {
  constructor() {}
  //select all
  getCrushs() {
    return model.find({});
  }
  select(req, res) {
    this.getCrushs()
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  //select for ID
  getCrushsById(id) {
    return model.find(id);
  }
  selectOne(req, res) {
    const id = { _id: req.params.id };
    this.getCrushsById(id)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  //delete
  deleteById(id) {
    return model.deleteOne(id);
  }
  delete(req, res) {
    const id = { _id: req.params.id };
    this.deleteById(id)
      .then((crushs) => res.status(200).json({ result: crushs })) // aqui posso tratar e escrever o que eu quiser caso de certo
      .catch((err) => res.status(400).json({ result: err }));
  }
  //update
  updateCrush(id, data) {
    return model.findOneAndUpdate(id, data);
  }
  update(req, res) {
    const id = { _id: req.params.id };
    const crush = req.body;
    this.updateCrush(id, crush)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
  //insert
  createCrush(data) {
    return model.create(data);
  }
  insert(req, res) {
    const crush = req.body;
    this.createCrush(crush)
      .then((crushs) => res.status(200).json({ result: crushs }))
      .catch((err) => res.status(400).json({ result: err }));
  }
}
export default Controller;
