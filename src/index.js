import app from './app';

app.listen(app.get('port'), () => console.log(`server running at port ${app.get('port')}`));
