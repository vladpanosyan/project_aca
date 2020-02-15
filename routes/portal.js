const express = require('express');
const router = express.Router();

module.exports = (portalController, authMiddleware) => {
    router.get('/getAll', portalController.getAll.bind(portalController));
    router.get('/active/:userId', authMiddleware, portalController.getActivePortal.bind(portalController));
    router.get('/:token', portalController.getCurrentPortal.bind(portalController));

    router.put('/:token', portalController.startPortal.bind(portalController));

    router.post('/getUserPortals', portalController.getUserPortals.bind(portalController));
    router.post('/addPortal', portalController.createPortal.bind(portalController));
    router.post('/checkToken', portalController.checkToken.bind(portalController));
    router.post('/portalStatus', portalController.getPortalStatus.bind(portalController));
    return  router;
  }
  