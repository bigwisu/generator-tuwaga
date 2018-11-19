module.exports = (router) => {
  /**
   * @swagger
   * /<%= serviceApiName %>/api/ping:
   *   get:
   *     description: ping the Service API to get status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  router.get('/', (req, res) => {
    const data = {
      success: true,
    };

    res.json(data);
  });
};

