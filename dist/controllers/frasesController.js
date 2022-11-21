"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.edit = exports.show = exports.store = exports.create = exports.index = void 0;
const Frase_1 = require("../models/Frase");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let frases = yield Frase_1.Frase.findAll();
    res.json(frases);
});
exports.index = index;
const create = () => { };
exports.create = create;
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { frase, autor } = req.body;
    let novaFrase = yield Frase_1.Frase.create({ autor, frase });
    res.status(201).json({ novaFrase });
});
exports.store = store;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let frase = yield Frase_1.Frase.findByPk(id);
    if (frase) {
        res.status(200).json(frase);
    }
    else {
        res
            .status(200)
            .json({ error: "Nenhum registro foi encontrado com o id informado" });
    }
});
exports.show = show;
const edit = () => { };
exports.edit = edit;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let { autor, frase } = req.body;
    let frase_banco = yield Frase_1.Frase.findByPk(id);
    if (frase_banco) {
        frase_banco.autor = autor;
        frase_banco.frase = frase;
        yield frase_banco.save();
        res.status(200).json(frase_banco);
    }
    else {
        res
            .status(200)
            .json({ error: "Nenhum registro foi encontrado com o id informado" });
    }
});
exports.update = update;
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let frase_banco = yield Frase_1.Frase.findByPk(id);
    if (frase_banco) {
        yield frase_banco.destroy();
        res.status(200).json({ success: "Registro excluído com sucesso" });
    }
    else {
        res
            .status(200)
            .json({ error: "Nenhum registro foi encontrado com o id informado" });
    }
});
exports.destroy = destroy;
//# sourceMappingURL=frasesController.js.map