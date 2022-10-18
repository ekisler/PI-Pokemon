//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const path = require('path')
const express = require('express');
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {PORT} = require("./src/utils/config")
const dotenv = require('dotenv').config();

// Serve frontend
if(process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, '../client/build')))
  
  server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
)
} else {
  server.get('/', (req, res) => res.send('Please set to production'))
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log("DATABASE conectada con éxito! ✔✔✔");
  server.listen(PORT, () => { 
    console.log(`El Servidor está escuchando en el Puerto ${PORT} 🚀🚀🚀`); // eslint-disable-line no-console
  });
});
