// prop :: s -> {s: a} -> a?
const prop = key => obj => obj[key]

// assoc :: String -> a -> {k: v} -> {k: v}
const assoc = key => val => obj => ({ ...obj, [key]: val })

// lens :: (s → a) → ((a, s) → s) → Lens s a
const lens = (get, set) => ({ get, set })

// view :: Lens s a → s → a
const view = (lens, obj) => lens.get(obj)

// set :: Lens s a → a → s → s
const set = (lens, val, obj) => lens.set(val, obj)

// over :: Lens s a → (a → a) → s → s
const over = (lens, f, obj) => lens.set(f(lens.get(obj)), obj)

// lensProp :: String → Lens s a
const lensProp = key => lens(prop(key), assoc(key))

// lensIndex :: Number → Lens s a
const lensIndex = index => lens(prop(index), assoc(index))
