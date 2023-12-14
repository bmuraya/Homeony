/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {   
        const locals = {
            title: 'Nodejs Notes',
            decription: 'free NodeJs  Note App',
        }
        
        res.render('index', locals);   
        
        
  
}