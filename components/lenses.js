// prop :: s -> {s: a} -> a?
export const prop = curry((key, obj) => obj[key])

// assoc :: String -> a -> {k: v} -> {k: v}
export const assoc = curry((key, val, obj) => ({ ...obj, [key]: val }))

// lens :: (s → a) → ((a, s) → s) → Lens s a
export const lens = curry((get, set) => ({ get, set }))

// view :: Lens s a → s → a
export const view = curry((lens, obj) => lens.get(obj))

// set :: Lens s a → a → s → s
export const set = curry((lens, val, obj) => lens.set(val, obj))

// over :: Lens s a → (a → a) → s → s
export const over = curry((lens, f, obj) => lens.set(f(lens.get(obj)), obj))

// lensProp :: String → Lens s a
export const lensProp = key => lens(prop(key), assoc(key))

// lensIndex :: Number → Lens s a
export const lensIndex = index => lens(prop(index), assoc(index))
