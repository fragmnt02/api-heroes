const expres = require('express');
const routerHeroe = require('./routers/HeroeRouter');

const app = expres();

const PORT = process.env.PORT || 3000;

app.use(expres.json());

app.use('/heroe',routerHeroe);

app.listen(PORT, () => {
    console.log(`Servidor escuchando.... en puerto ${PORT}`);
});