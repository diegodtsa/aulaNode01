const router = require('express').Router();
const path = require('path');
const SobreController = require('./controllers/SobreController');
const HomeController = require('./controllers/HomeController');
const ImgensController = require('./controllers/ImagensController');
const PerguntasController = require('./controllers/PerguntasController');
const CepController = require('./controllers/CepController');
const LivroController = require('./controllers/LivroController');

router.get('/',HomeController.index);

router.get('/sobre',SobreController.index);

router.get('/imagens',ImgensController.index);

router.get('/perguntas',PerguntasController.index,);

router.get('/ws/69020060/json',CepController.index)

router.get('/livros/',LivroController.index)
router.get('/livros/:id',LivroController.show)

router.post('/livros/',LivroController.store)

router.put('/livros/:id',LivroController.update)
router.delete('/livros/:id',LivroController.delete)


module.exports = router;