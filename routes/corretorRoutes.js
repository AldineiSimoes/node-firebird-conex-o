import Corretor from './../models/Corretor.js';
var corretor = new Corretor();

const corretorRoutes = (app) => {
    app.route('/corretor/:id?')
        .get((req, res) => {
            corretor.list(req.params.id,(err,r) => {
                // if (req.params.id) {
                //     res.send(r.filter(data => data.ID_CORRETOR == req.params.id));
                // } else {
                    res.send(r);
                // }
            });
        })
};

export default corretorRoutes;
