const express = require('express');
const router = express.Router();

module.exports = (nicknameController) => {
    router.get('/', nicknameController.showResult.bind(nicknameController));
    router.post('/addNickname', nicknameController.createNickname.bind(nicknameController));
    router.post('/isLogged', nicknameController.isLogged.bind(nicknameController));
    router.post('/canactivate', nicknameController.canactivate.bind(nicknameController));
    router.put('/changeAvatar', nicknameController.changeAvatar.bind(nicknameController));
    return  router;
  }
  