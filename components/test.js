import { assoc, prop, lensProp, view, over, set } from './lenses'

const user = { id: 1, name: 'foo' }

const propName = prop('name')(user)

const assocName = assoc('name')('bar')(user)

const toUpper = str => str.toUpperCase()

const squared = num => num ** 2

const idLens = lensProp('id')

const viewId = view(idLens, user) // > 1

const setId = set(idLens, 2, user) // > { id: 2, name: "foo" }

const squaredId = over(idLens, squared, setId) // > { id: 4, name: "foo" }

const nameLense = lensProp('name')

const getName = view(nameLense, user) // > "foo"

const setName = set(nameLense, 'flavio', user) // > { id: 1, name: "flavio" }

const capName = over(nameLense, toUpper, setName) // > { id: 1, name: "FLAVIO" }
