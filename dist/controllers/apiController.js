"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nome = exports.random = exports.ping = void 0;
const ping = (req, res) => res.json({ pong: true });
exports.ping = ping;
const random = (req, res) => res.json({ number: Math.floor(Math.random() * 100) });
exports.random = random;
const nome = (req, res) => res.json({ nome: req.params.nome });
exports.nome = nome;
//# sourceMappingURL=apiController.js.map