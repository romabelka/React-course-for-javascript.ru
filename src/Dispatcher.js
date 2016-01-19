import { Dispatcher } from 'flux'

const AppDispatcher = new Dispatcher

AppDispatcher.register(console.log.bind(console))

export default AppDispatcher