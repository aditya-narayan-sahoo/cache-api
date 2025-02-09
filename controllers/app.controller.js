// implementing an in-memory cache using map
const cache = new Map();
const MAX_CACHE_SIZE = 10;
const EXPIRATION_TIME = 60 * 1000;

function setCache(key, value) {
  if (cache.size >= MAX_CACHE_SIZE) {
    return false;
  }
  cache.set(key, { value, timestamp: Date.now() });
  return true;
}

function getCache(key) {
  if (cache.has(key)) {
    const entry = cache.get(key);
    if (Date.now() - entry.timestamp < EXPIRATION_TIME) {
      return entry.value;
    } else {
      cache.delete(key);
      throw new Error("Key has expired");
    }
  }
  throw new Error("Key not found");
}

export const storePair = (req, res) => {
  const { key, value } = req.body;
  if (!key || !value) {
    return res.status(400).json({ error: "Key and value are required" });
  }

  const success = setCache(key, value);
  if (!success) {
    return res
      .status(400)
      .json({ error: "Cache limit reached, cannot store pair" });
  }
  res.status(201).json({ message: "Pair stored successfully", key, value });
};

export const getPair = (req, res) => {
  try {
    const key = req.params.key;
    const value = getCache(key);
    if (value !== null) {
      return res.status(200).json({ message: "Pair found", key, value });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const deletePair = (req, res) => {
  const key = req.params.key;
  if (cache.has(key)) {
    cache.delete(key);
    res.status(200).json({ message: "Pair deleted successfully", key });
  } else {
    res.status(404).json({ message: "Pair not found" });
  }
};
