import { init } from '@rematch/core'
import test from './modules/test'

const store = init({ models: {test} });

export default store
