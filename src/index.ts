import app from './app'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.info(`Express server listening on port ${port} in ${app.get('env')} mode`);
});